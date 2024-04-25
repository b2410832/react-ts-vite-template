import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Example from './Example';

test('When clicking count button, should display correct count.', async () => {
  const user = userEvent.setup();
  const { getByRole, getByText } = render(<Example />);

  expect(getByText('count is 0')).toBeInTheDocument();

  const button = getByRole('button', { name: /count/i });

  await user.click(button);
  expect(getByText('count is 1')).toBeInTheDocument();

  await user.click(button);
  expect(getByText('count is 2')).toBeInTheDocument();
});
