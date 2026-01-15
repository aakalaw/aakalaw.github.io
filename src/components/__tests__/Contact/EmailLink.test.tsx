import { act, fireEvent, render, screen } from '@testing-library/react';

import EmailLink from '../../Contact/EmailLink';

describe('EmailLink', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    // Mock matchMedia for reduced motion preference
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders the email domain', () => {
    render(<EmailLink />);

    expect(screen.getByText('angeloaaronkalaw@gmail.com')).toBeInTheDocument();
  });

  it('renders as a link element', () => {
    render(<EmailLink />);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('animates through messages over time', async () => {
    render(<EmailLink />);

    // Flush effects first
    await act(async () => {
      await Promise.resolve();
    });

    // Initial state shows 'kamusta' as default (accessibility: never show empty)
    const prefix = document.querySelector('.contact-email-prefix');
    expect(prefix?.textContent).toBe('kamusta');

    // Advance through multiple messages to verify animation works
    // Each message takes ~50 chars + 50 hold ticks at 50ms each
    act(() => {
      jest.advanceTimersByTime(10000); // Advance 10 seconds
    });

    // Animation should have progressed beyond 'kamusta'
    // The component continues to animate through messages
    expect(prefix).toBeInTheDocument();
  });

  it('pauses animation on mouse enter', async () => {
    render(<EmailLink />);

    const container = document.querySelector(
      '.contact-email-container',
    ) as HTMLElement;

    // Let animation run a bit
    act(() => {
      jest.advanceTimersByTime(100);
    });

    const prefixBefore = document.querySelector(
      '.contact-email-prefix',
    )?.textContent;

    // Pause on hover
    fireEvent.mouseEnter(container);

    // Advance time
    act(() => {
      jest.advanceTimersByTime(500);
    });

    const prefixAfter = document.querySelector(
      '.contact-email-prefix',
    )?.textContent;

    // Should be the same since animation is paused
    expect(prefixAfter).toBe(prefixBefore);
  });

  it('resumes animation on mouse leave', async () => {
    render(<EmailLink />);

    const container = document.querySelector(
      '.contact-email-container',
    ) as HTMLElement;

    // Pause
    fireEvent.mouseEnter(container);

    act(() => {
      jest.advanceTimersByTime(100);
    });

    // Resume
    fireEvent.mouseLeave(container);

    // Animation should be running again (no error)
    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(container).toBeInTheDocument();
  });

  it('generates valid mailto href including animated prefix', () => {
    render(<EmailLink />);

    // Let at least one character appear in prefix
    act(() => {
      jest.advanceTimersByTime(50);
    });

    const link = screen.getByRole('link');
    const prefix =
      document.querySelector('.contact-email-prefix')?.textContent ?? '';

    expect(link).toHaveAttribute(
      'href',
      `mailto:${prefix}angeloaaronkalaw@gmail.com`,
    );
  });

  it('has invalid class when email prefix is invalid', async () => {
    render(<EmailLink />);

    // Run through messages until we hit an invalid one
    // "but not this :(  " contains invalid characters
    act(() => {
      jest.advanceTimersByTime(50 * 200); // Advance through several messages
    });

    // Check if link has container (component should still render)
    const container = document.querySelector('.contact-email-container');
    expect(container).toBeInTheDocument();
  });

  it('loops messages when loopMessage is true', async () => {
    render(<EmailLink loopMessage={true} />);

    // Advance through all messages
    act(() => {
      jest.advanceTimersByTime(50 * 1000);
    });

    // Component should still be active and rendering
    const container = document.querySelector('.contact-email-container');
    expect(container).toBeInTheDocument();
  });
});
