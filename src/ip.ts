export default class Ip {
  readonly buffer: ArrayBuffer;

  constructor(buffer: ArrayBuffer) {
    this.buffer = buffer;
  }

  static fromString(value: string) {
    const octets = value.split('.');
    const buffer = new ArrayBuffer(4);
    const view = new DataView(buffer);

    octets.forEach((octect, index) => {
      view.setUint8(index, Number(octect));
    });

    return new Ip(buffer);
  }

  /**
   * Netmask Ip
   * @param bits Amount of bits setted in the mask
   */
  static netmask(bits: number): Ip {
    const buffer = new ArrayBuffer(4);
    const view = new DataView(buffer);
    view.setUint32(0, 0xffffffff << (32 - bits));

    return new Ip(buffer);
  }

  /**
   * Network Ip of the current Ip
   */
  network(netmask: Ip): Ip {
    const buffer = new ArrayBuffer(4);
    const view = new DataView(buffer);

    const currentDecimal = new DataView(this.buffer).getUint32(0);
    const netmaskDecimal = new DataView(netmask.buffer).getUint32(0);
    view.setUint32(0, currentDecimal & netmaskDecimal);

    return new Ip(buffer);
  }

  /**
   * Broadcast Ip of the current Ip
   */
  broadcast(netmask: Ip): Ip {
    const buffer = new ArrayBuffer(4);
    const view = new DataView(buffer);

    const currentDecimal = new DataView(this.buffer).getUint32(0);
    const netmaskDecimal = new DataView(netmask.buffer).getUint32(0);
    const broadcasWildcard = ~netmaskDecimal;
    view.setUint32(0, currentDecimal | broadcasWildcard);

    return new Ip(buffer);
  }

  toString() {
    const octets = new Uint8Array(this.buffer);
    return octets.join('.');
  }
}
