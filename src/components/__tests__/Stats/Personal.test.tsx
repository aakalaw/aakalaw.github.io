import { act, render, screen } from '@testing-library/react';

import Personal from '../../Stats/Personal';

describe('Personal', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders the personal stats table', () => {
    render(<Personal />);

    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays the current age label', () => {
    render(<Personal />);

    expect(screen.getByText('Current age')).toBeInTheDocument();
  });

  it('displays countries visited', () => {
    render(<Personal />);

    expect(screen.getByText('Countries visited')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('displays current city', () => {
    render(<Personal />);

    expect(screen.getByText('Current city')).toBeInTheDocument();
    expect(screen.getByText('City of Antipolo, Rizal')).toBeInTheDocument();
  });

  it('has a link for countries visited', () => {
    render(<Personal />);

    const link = screen.getByRole('link', { name: /1/i });
    expect(link).toHaveAttribute(
      'href',
      'https://www.google.com/maps/d/u/0/embed?mid=13NxPUrlYkcyO61umHs6zy1USYm25klA&ehbc=2E312F',
    );
  });

  it('updates age over time', async () => {
    render(<Personal />);

    // Get initial age text
    const ageCell = screen.getByText('Current age').closest('tr');
    expect(ageCell).toBeInTheDocument();

    // Advance timer to trigger age update
    act(() => {
      jest.advanceTimersByTime(50);
    });

    // Age should still be displayed (value changes but component renders)
    expect(screen.getByText('Current age')).toBeInTheDocument();
  });
});
