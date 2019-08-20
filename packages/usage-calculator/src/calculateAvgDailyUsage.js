import { pipe, reduce } from 'ramda';
import { toUsage } from './lib/toUsage';

/**
 * @type {(dailyUsage: import('.').IDailyUsage[]) => number}
 */
export const calculateAvgDailyUsage = pipe(
  dailyUsages =>
    reduce((totalUsage, { usage }) => totalUsage + usage, 0, dailyUsages) /
    dailyUsages.length,
  toUsage
);
