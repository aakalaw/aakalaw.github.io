import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc as firestoreDoc,
} from 'firebase/firestore';
import { auth, storage, db } from '../../firebase';

const Home = () => {
  const form = useRef();
  const [newTitle, setTitle] = useState('');
  const [newDesc, setDesc] = useState('');
  const [newDate, setDate] = useState('');
  const [newUrl, setUrl] = useState('');
  const [editedImage, setEditedImage] = useState(null); // State to manage edited image
  const [projects, setProjects] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [editProjectId, setEditProjectId] = useState(null);

  // Fetch projects from Firestore
  const fetchProjects = async () => {
    try {
      const projectsCollection = collection(db, 'projects');
      const projectsSnapshot = await getDocs(projectsCollection);
      const projectsList = projectsSnapshot.docs.map((projectDoc) => ({
        id: projectDoc.id,
        ...projectDoc.data(),
      }));
      setProjects(projectsList);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        fetchProjects(); // Fetch projects if user is signed in
      } else {
        setProjects([]); // Clear projects if user signs out
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  // Reload page after a delay (for demonstration purposes)
  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  };

  // Save project to Firestore
  const saveProject = async (project) => {
    try {
      await addDoc(collection(db, 'projects'), project);
      toast.success('The project has been successfully posted!');
      fetchProjects(); // Fetch projects after saving new project
      reloadPage();
    } catch (error) {
      console.error('Error saving project:', error);
      toast.error('Failed to add project.');
    }
  };

  // Update project in Firestore
  const updateProject = async (projectId, updatedProject) => {
    try {
      const projectRef = firestoreDoc(db, 'projects', projectId);
      await updateDoc(projectRef, updatedProject);
      toast.success('Project updated successfully!');
      fetchProjects(); // Fetch projects after updating
      setEditProjectId(null); // Clear edit mode
    } catch (error) {
      console.error('Error updating project:', error);
      toast.error('Failed to update project.');
    }
  };

  // Delete project from Firestore and associated image from storage
  const deleteProject = async (projectId, imageUrl) => {
    try {
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
      const projectRef = firestoreDoc(db, 'projects', projectId);
      await deleteDoc(projectRef);

      toast.success('Project deleted successfully!');
      fetchProjects(); // Fetch projects after deletion
    } catch (error) {
      console.error('Error deleting project:', error);
      toast.error('Failed to delete project.');
    }
  };

  // Submit form to add new project
  const submitProject = (e) => {
    e.preventDefault();

    const title = form.current[0]?.value;
    const desc = form.current[1]?.value;
    const dateValue = form.current[2]?.value;
    const url = form.current[3]?.value;
    const image = form.current[4]?.files[0];

    const storageRef = ref(storage, `projects/${image.name}`);

    uploadBytes(storageRef, image)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((downloadUrl) => {
            saveProject({
              title,
              desc,
              date: dateValue,
              url,
              image: downloadUrl,
            });
          })
          .catch((error) => {
            console.error('Failed to get download URL:', error);
            saveProject({
              title,
              desc,
              date: dateValue,
              url,
              image: null,
            });
          });
      })
      .catch((error) => {
        console.error('Failed to upload image:', error);
        saveProject({
          title,
          desc,
          date: dateValue,
          url,
          image: null,
        });
      });
  };

  // Handle change in title input
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Handle change in description input
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  // Handle change in date input
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  // Handle change in URL input
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  // Handle change in image input during edit
  const handleEditImageChange = (e) => {
    const file = e.target.files[0];
    setEditedImage(file); // Update edited image state with the new file
  };

  // Set edit mode for a project
  const handleEditProject = (projectId) => {
    setEditProjectId(projectId);
  };

  // Cancel edit mode
  const cancelEdit = () => {
    setEditProjectId(null);
    setEditedImage(null); // Reset edited image state
  };

  // Update project details
  const handleUpdateProject = (projectId, updatedProject) => {
    if (editedImage) {
      const storageRef = ref(storage, `projects/${editedImage.name}`);

      uploadBytes(storageRef, editedImage)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((downloadUrl) => {
              updateProject(projectId, {
                ...updatedProject,
                image: downloadUrl,
              });
            })
            .catch((error) => {
              console.error('Failed to get download URL:', error);
              updateProject(projectId, updatedProject);
            });
        })
        .catch((error) => {
          console.error('Failed to upload image:', error);
          updateProject(projectId, updatedProject);
        });
    } else {
      updateProject(projectId, updatedProject);
    }

    setEditedImage(null); // Reset edited image state after update
  };

  // Delete project
  const handleDeleteProject = (projectId, imageUrl) => {
    /*
    eslint no-alert: 0
    */
    if (window.confirm('Are you sure you want to delete this project?')) {
      deleteProject(projectId, imageUrl);
    }
  };

  return (
    <div className="dashboard">
      <h1>Welcome{currentUser ? ` ${currentUser.displayName || currentUser.email}` : ''}!</h1>
      {currentUser && (
        <form ref={form} onSubmit={submitProject}>
          <p>
            <input type="text" placeholder="Title" value={newTitle} onChange={handleTitleChange} required />
          </p>
          <p>
            <textarea placeholder="Description" value={newDesc} onChange={handleDescChange} required />
          </p>
          <p>
            <input type="date" placeholder="Date" value={newDate} onChange={handleDateChange} required />
          </p>
          <p>
            <input type="text" placeholder="Url" value={newUrl} onChange={handleUrlChange} required />
          </p>
          <p>
            <input type="file" onChange={handleEditImageChange} required /> {/* Edit image input */}
          </p>
          <button type="submit">Submit</button>
          <button onClick={() => auth.signOut()} type="button">
            Sign out
          </button>
          <ToastContainer position="bottom-right" autoClose={2500} hideProgressBar theme="light" />
        </form>
      )}

      <div>
        <h2>Projects</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Url</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>
                  {editProjectId === project.id ? (
                    <input type="text" defaultValue={project.title} onChange={handleTitleChange} />
                  ) : (
                    project.title
                  )}
                </td>
                <td>
                  {editProjectId === project.id ? (
                    <textarea defaultValue={project.desc} onChange={handleDescChange} />
                  ) : (
                    project.desc
                  )}
                </td>
                <td>
                  {editProjectId === project.id ? (
                    <input type="date" defaultValue={project.date} onChange={handleDateChange} />
                  ) : (
                    project.date
                  )}
                </td>
                <td>
                  {editProjectId === project.id ? (
                    <input type="text" defaultValue={project.url} onChange={handleUrlChange} />
                  ) : (
                    <a href={project.url}>{project.url}</a>
                  )}
                </td>
                <td>
                  {editProjectId === project.id ? (
                    <>
                      <input type="file" onChange={handleEditImageChange} /> {/* Edit image input */}
                      <button type="button" onClick={cancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <img src={project.image} alt="Project" style={{ maxWidth: '100px' }} />
                  )}
                </td>
                <td>
                  {editProjectId === project.id ? (
                    <button
                      type="button"
                      onClick={() => handleUpdateProject(project.id, {
                        ...project,
                        title: form.current[0]?.value,
                        desc: form.current[1]?.value,
                        date: form.current[2]?.value,
                        url: form.current[3]?.value,
                        image: form.current[4]?.file,
                      })}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button type="button" onClick={() => handleEditProject(project.id)}>Edit</button>
                      <button type="button" onClick={() => handleDeleteProject(project.id, project.image)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
