import { calculateDailyUsages } from '../src';

describe('calculateDailyUsages', () => {
  describe('when calculate usage for an existing rule', () => {
    it('returns daily usages without error', () => {
      const dailyUsages = calculateDailyUsages({
        state: 'vic',
        detailUsages: [],
      });

      expect(dailyUsages).toEqual([]);
    });
  });

  describe('when calculate usage for non-existing rule', () => {
    it('throw a "not found" error', () => {
      expect(() =>
        calculateDailyUsages({
          state: 'invalid state',
          detailUsages: [],
        })
      ).toThrowError(/not found/);
    });
  });
});
