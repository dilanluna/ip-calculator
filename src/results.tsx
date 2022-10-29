import { useMemo } from 'react';
import Ip from './ip';
import { Network } from './types';

export default function Results({ network }: { network?: Network }) {
  const ip = useMemo(
    () => (network ? Ip.fromString(network.address) : null),
    [network],
  );
  const netmask = useMemo(
    () => (network ? Ip.netmask(Number(network.netmask)) : null),
    [network],
  );

  return (
    <section aria-label="Calculation results">
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="bg-white dark:bg-gray-900 px-4 py-5 sm:p-6">
          <table className="w-full">
            <thead>
              <tr>
                <td className="w-24" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span
                    id="AddressLabel"
                    className="text-sm font-medium text-gray-700 dark:text-gray-50">
                    Address
                  </span>
                </td>
                <td>
                  <span
                    aria-labelledby="AddressLabel"
                    className="font-mono text-blue-700 dark:text-blue-300">
                    {ip ? ip.toString() : 'N/A'}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span
                    id="NetmaskLabel"
                    className="text-sm font-medium text-gray-700 dark:text-gray-50">
                    Netmask
                  </span>
                </td>
                <td>
                  <span
                    aria-labelledby="NetmaskLabel"
                    className="font-mono text-blue-700 dark:text-blue-300">
                    {netmask ? netmask.toString() : 'N/A'}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span
                    id="NetworkLabel"
                    className="text-sm font-medium text-gray-700 dark:text-gray-50">
                    Network
                  </span>
                </td>
                <td>
                  <span
                    aria-labelledby="NetworkLabel"
                    className="font-mono text-blue-700 dark:text-blue-300">
                    {ip && netmask ? ip.network(netmask).toString() : 'N/A'}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span
                    id="BroadcastLabel"
                    className="text-sm font-medium text-gray-700 dark:text-gray-50">
                    Broadcast
                  </span>
                </td>
                <td>
                  <span
                    aria-labelledby="BroadcastLabel"
                    className="font-mono text-blue-700 dark:text-blue-300">
                    {ip && netmask ? ip.broadcast(netmask).toString() : 'N/A'}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
