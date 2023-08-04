import { render, screen } from '@testing-library/react';
import HomePage from '.';

describe('HomePage', () => {
  it('should render welcome message', () => {
    render(<HomePage />);

    const welcomeMessage = screen.getByText(/Welcome to React Boilerplate!/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('should render code examples description', () => {
    render(<HomePage />);

    const codeExamplesDescription = screen.getByText(
      /This project contains various code examples for a typical Single Page Application./i
    );
    expect(codeExamplesDescription).toBeInTheDocument();
  });

  it('should render navigation tip', () => {
    render(<HomePage />);

    const navigationTip = screen.getByText(
      /Try out the examples by navigating the menu on left side. Enjoy!/i
    );
    expect(navigationTip).toBeInTheDocument();
  });
});
