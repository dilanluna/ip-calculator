import Ip from './ip';

describe('Ip', () => {
  test('toString', () => {
    const ip = Ip.fromString('192.168.0.1');
    expect(ip.toString()).toBe('192.168.0.1');
  });

  test('netmask', () => {
    const netmask = Ip.netmask(24);
    expect(netmask.toString()).toBe('255.255.255.0');
  });

  test('network', () => {
    const ip = Ip.fromString('192.168.0.1');
    const netmask = Ip.netmask(24);
    const network = ip.network(netmask);
    expect(network.toString()).toBe('192.168.0.0');
  });

  test('broadcast', () => {
    const ip = Ip.fromString('192.168.0.1');
    const netmask = Ip.netmask(24);
    const broadcast = ip.broadcast(netmask);
    expect(broadcast.toString()).toBe('192.168.0.255');
  });
});
