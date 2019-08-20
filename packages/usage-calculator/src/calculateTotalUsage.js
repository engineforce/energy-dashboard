import { pipe, reduce } from 'ramda';
import { toUsage } from './lib/toUsage';

/**
 * @type {(dailyUsage: import('.').IDailyUsage[]) => number}
 */
export const calculateTotalUsage = pipe(
  reduce((totalUsage, { usage }) => totalUsage + usage, 0),
  toUsage
);
