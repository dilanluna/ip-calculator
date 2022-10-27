import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should display a counter', () => {
    render(<App />);

    expect(screen.queryByText('count is 0')).toBeInTheDocument();
  });

  it('should increment the counter after clicking on the button', async () => {
    render(<App />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(screen.queryByText('count is 1')).toBeInTheDocument();
  });
});
