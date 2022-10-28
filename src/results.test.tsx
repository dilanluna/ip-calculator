import { render, screen } from '@testing-library/react';
import Results from './results';
import { Network } from './types';

describe('Resutls', () => {
  const current: Network = { address: '192.168.0.1', netmask: '24' };

  it('should display the ip address', () => {
    render(<Results network={current} />);
    const address = screen.getByLabelText(/address/i);
    expect(address).toBeInTheDocument();
    expect(address).toHaveTextContent(/192\.168\.0\.1/i);
  });

  it('should display netmask ip of the network', () => {
    render(<Results network={current} />);
    const netmask = screen.getByLabelText(/netmask/i);
    expect(netmask).toBeInTheDocument();
    expect(netmask).toHaveTextContent(/255\.255\.255\.0/i);
  });

  it('should display ip of the network', () => {
    render(<Results network={current} />);
    const network = screen.getByLabelText(/network/i);
    expect(network).toBeInTheDocument();
    expect(network).toHaveTextContent(/192\.168\.0\.0/i);
  });

  it('should display broadcast ip of the network', () => {
    render(<Results network={current} />);
    const broadcast = screen.getByLabelText(/broadcast/i);
    expect(broadcast).toBeInTheDocument();
    expect(broadcast).toHaveTextContent(/192\.168\.0\.255/i);
  });
});
