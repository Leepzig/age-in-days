import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('renders a button that says "Get Day Age"', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: "Get Day Age"})
  expect(button).toBeInTheDocument()
})

test('renders an text input', () => {
  render(<App />)
  const input = screen.getByLabelText("birthday")
  expect(input).toBeInTheDocument()
})

test('User is able to type in the birthday input', () => {
  render(<App />)
  const input = screen.getByLabelText("birthday")
  userEvent.type(input, "07/19/2000")
  expect(input).toHaveValue("07/19/2000")

})
