import { calculateAvgDailyUsage } from '../src/calculateAvgDailyUsage';

describe('calculateAvgDailyUsage', () => {
  describe('when calculate usage from 1 days of detail usages', () => {
    const avgDailyUsage = calculateAvgDailyUsage([
      {
        date: '01/Dec/2013',
        usage: 9.59,
      },
    ]);

    it('should return the correct avgDaily usages', () => {
      expect(avgDailyUsage).toEqual(9.59);
    });
  });

  describe('when calculate usage from 2 days of detail usages', () => {
    const avgDailyUsage = calculateAvgDailyUsage([
      {
        date: '01/Dec/2013',
        usage: 9.59,
      },
      {
        date: '02/Dec/2013',
        usage: 10,
      },
    ]);

    it('should return the correct avgDaily usages', () => {
      expect(avgDailyUsage).toEqual(9.795);
    });
  });
  describe('when calculate usage from 3 days of detail usages', () => {
    const avgDailyUsage = calculateAvgDailyUsage([
      {
        date: '01/Dec/2013',
        usage: 9.59,
      },
      {
        date: '02/Dec/2013',
        usage: 10,
      },
      {
        date: '03/Dec/2013',
        usage: 8.32,
      },
    ]);

    it('should return the correct avgDaily usages', () => {
      expect(avgDailyUsage).toEqual(9.3033);
    });
  });
});
