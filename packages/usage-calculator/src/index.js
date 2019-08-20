import assert from 'assert';

const DAILY_USAGE_CALCULATORS = {
  vic: require('./vic/calculateDailyUsages'),
};

export function calculateDailyUsages({ state, detailUsages }) {
  const calculator = DAILY_USAGE_CALCULATORS[state];
  assert(calculator, `Daily usage calculator for ${state} not found.`);

  return calculator.calculate(detailUsages);
}

export * from './calculateTotalUsage';
export * from './calculateAvgDailyUsage';

/**
 * @typedef IDailyUsage
 * @property {string} date
 * @property {number} usage
 */
