import { render, screen } from '@testing-library/react';

import SideBar from '../../Template/SideBar';

describe('Sidebar', () => {
  it('renders the sidebar with correct structure', () => {
    render(<SideBar />);

    const sidebar = screen.getByRole('contentinfo');
    expect(sidebar).toBeInTheDocument();
  });

  it('displays the name', () => {
    render(<SideBar />);

    expect(screen.getByText('Angelo Aaron Kalaw')).toBeInTheDocument();
  });

  it('displays the current year in copyright', () => {
    render(<SideBar />);

    const currentYear = new Date().getFullYear().toString();
    expect(
      screen.getByText(new RegExp(`© ${currentYear}`)),
    ).toBeInTheDocument();
  });

  it('renders contact icons section', () => {
    render(<SideBar />);

    // Contact icons are rendered via ContactIcons component
    const socialSection = document.querySelector('.footer-social');
    expect(socialSection).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });

  it('has link to home from avatar', () => {
    render(<SideBar />);

    const avatarLink = document.querySelector('.logo');
    expect(avatarLink).toHaveAttribute('href', '/');
  });
});
