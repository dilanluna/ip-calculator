import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Network } from './types';
import Form, { SubmitHandler } from './form';

describe('Form', () => {
  let submitHandler: SubmitHandler = vi.fn();

  it('should render a form', () => {
    render(<Form onSubmit={submitHandler} />);

    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('should has a input for address and netmask', () => {
    render(<Form onSubmit={submitHandler} />);

    expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/netmask/i)).toBeInTheDocument();
  });

  it('should call onSubmit once within address and netmask values when is submitted', async () => {
    let data: Network = {
      address: '192.168.0.1',
      netmask: '24',
    };

    render(<Form onSubmit={submitHandler} />);

    const addressInput = screen.getByLabelText(/address/i);
    await userEvent.type(addressInput, data.address);

    const netmaskInput = screen.getByLabelText(/netmask/i);
    await userEvent.type(netmaskInput, data.netmask);

    const submitButton = screen.getByRole('button');
    await userEvent.click(submitButton);

    expect(submitHandler).toBeCalledTimes(1);
    expect(submitHandler).toBeCalledWith(data, expect.anything());
  });
});
