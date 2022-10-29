import clsx from 'clsx';
import isCidr from 'is-cidr';
import { isIPv4 } from 'is-ip';
import { useForm } from 'react-hook-form';
import { BaseSyntheticEvent } from 'react';
import { Network } from './types';

const validateIpv4 = (value: string) => isIPv4(value);
const validateCIDR = (value: string) => isCidr.v4(`0.0.0.0/${value}`);

export type SubmitHandler = (data: Network, event?: BaseSyntheticEvent) => void;

export default function Form({ onSubmit }: { onSubmit: SubmitHandler }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Network>();

  return (
    <form
      aria-label="Network information"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="bg-white dark:bg-gray-900 px-4 py-5 sm:p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 md:col-span-2">
              <label
                htmlFor="Address"
                className="block text-sm font-medium text-gray-700 dark:text-gray-50">
                Address <span className="font-normal">(Host or Network)</span>
              </label>
              <input
                id="Address"
                {...register('address', {
                  validate: validateIpv4,
                })}
                className={clsx(
                  'block w-full py-2 px-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm dark:text-white dark:bg-gray-900 dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-blue-400',
                  {
                    'focus:border-red-500 focus:ring-red-500 dark:focus:border-red-500 dark:focus:ring-red-500':
                      Boolean(errors.address),
                  },
                )}
              />
              {errors.address ? (
                <span className="text-xs text-red-500 dark:text-red-400">
                  Please enter a valid IPv4 address
                </span>
              ) : null}
            </div>

            <div className="col-span-3 md:col-span-1">
              <label
                htmlFor="Netmask"
                className="block text-sm font-medium text-gray-700 dark:text-gray-50">
                Netmask{' '}
                <span className="font-normal">(CIDR format i.e 24)</span>
              </label>
              <input
                id="Netmask"
                {...register('netmask', {
                  validate: validateCIDR,
                })}
                className={clsx(
                  'block w-full py-2 px-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm dark:text-white dark:bg-gray-900 dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-blue-400',
                  {
                    'focus:border-red-500 focus:ring-red-500 dark:focus:border-red-500 dark:focus:ring-red-500':
                      Boolean(errors.netmask),
                  },
                )}
              />
              {errors.netmask ? (
                <span className="text-xs text-red-500 dark:text-red-400">
                  Please enter a valid ICDR value
                </span>
              ) : null}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Calculate
          </button>
        </div>
      </div>
    </form>
  );
}
