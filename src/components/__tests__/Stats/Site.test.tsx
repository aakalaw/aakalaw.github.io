import { render, screen, waitFor } from '@testing-library/react';

// Mock the fetch function
const mockGitHubData = {
  stargazers_count: 0,
  subscribers_count: 0,
  forks: 0,
  open_issues_count: 0,
  pushed_at: '2026-01-04T00:00:00Z',
};

// Must mock before importing the component
beforeAll(() => {
  // Mock global.fetch to simulate the GitHub API response
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockGitHubData),
    }),
  );
});

// Import after mocking
import Site from '../../Stats/Site';

describe('Site', () => {
  beforeEach(() => {
    jest.mocked(global.fetch).mockClear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the site stats table', async () => {
    const Component = await (<Site />);
    render(Component);

    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays static labels', async () => {
    const Component = await (<Site />);
    render(Component);

    expect(
      screen.getByText('Stars this repository has on github'),
    ).toBeInTheDocument();
    expect(screen.getByText('Number of forks')).toBeInTheDocument();
    expect(screen.getByText('Number of spoons')).toBeInTheDocument();
  });

  it('displays static values for non-GitHub stats', async () => {
    const Component = await (<Site />);
    render(Component);

    expect(screen.getByText('Number of spoons')).toBeInTheDocument();
    expect(screen.getByText('Number of linter warnings')).toBeInTheDocument();
    expect(
      screen.getByText('Lines of TypeScript powering this website'),
    ).toBeInTheDocument();
  });

  it('fetches GitHub data at build time', async () => {
    // Render the component and wait for async actions
    render(<Site />);

    // Wait for the fetch call to be completed
    await waitFor(() => {
      // Check if fetch is called with the expected URL
      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.github.com/repos/aakalaw/aakalaw.github.io',
      );
    });
  });

  it('has links for GitHub-sourced stats', async () => {
    const Component = await (<Site />);
    render(Component);

    const links = document.querySelectorAll(
      'a[href="https://github.com/aakalaw/aakalaw.github.io/stargazers"]',
    );
    expect(links.length).toBeGreaterThan(0);
  });

  it('displays all expected stat categories', async () => {
    const Component = await (<Site />);
    render(Component);

    expect(
      screen.getByText('Stars this repository has on github'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Number of people watching this repository'),
    ).toBeInTheDocument();
    expect(screen.getByText('Number of forks')).toBeInTheDocument();
    expect(screen.getByText('Open github issues')).toBeInTheDocument();
    expect(screen.getByText('Last updated at')).toBeInTheDocument();
  });

  it('uses fallback data when fetch fails', async () => {
    jest.mocked(global.fetch).mockRejectedValueOnce(new Error('Network error'));

    const Component = await (<Site />);
    render(Component);

    // Should still render with fallback data
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
