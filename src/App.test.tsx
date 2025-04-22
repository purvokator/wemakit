import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar links correctly', () => {
  render(<App />);
  
  expect(screen.getByText(/our work/i)).toBeInTheDocument();
  expect(screen.getByText(/pricing/i)).toBeInTheDocument();
  expect(screen.getByText(/book a call/i)).toBeInTheDocument();
  expect(screen.getByText(/log in/i)).toBeInTheDocument();
});
