import { calculateTotalUsage } from '../src/calculateTotalUsage';

describe('calculateTotalUsage', () => {
  describe('when calculate usage from 1 days of daily usages', () => {
    const totalUsage = calculateTotalUsage([
      {
        date: '01/Dec/2013',
        usage: 9.59,
      },
    ]);

    it('should return the correct total usages', () => {
      expect(totalUsage).toEqual(9.59);
    });
  });

  describe('when calculate usage from 2 days of daily usages', () => {
    const totalUsage = calculateTotalUsage([
      {
        date: '01/Dec/2013',
        usage: 9.59,
      },
      {
        date: '02/Dec/2013',
        usage: 10,
      },
    ]);

    it('should return the correct total usages', () => {
      expect(totalUsage).toEqual(19.59);
    });
  });
});
