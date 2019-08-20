import { range } from 'ramda';
import assert from 'assert';
import pad from 'pad';
import { calculate } from '../../src/vic/calculateDailyUsages';

describe('calculateDailyUsages', () => {
  describe('when calculate usage from 2 days of detail usages', () => {
    const dailyUsages = calculate(buildDetailUsages({ count: 2 }));

    it('should return the correct daily usages per day', () => {
      expect(dailyUsages).toEqual([
        {
          date: '01/Dec/2013',
          usage: 9.59,
        },
        {
          date: '02/Dec/2013',
          usage: 9.59,
        },
      ]);
    });
  });

  describe('when calculate usage from 1 days of detail usages that missed 1 time slot', () => {
    const dailyUsages = calculate(
      buildDetailUsages({ count: 1 }).map(usage => ({
        ...usage,
        // Remove usage: '00:30 - 01:00': 0.089,
        '00:30 - 01:00': undefined,
      }))
    );

    it('should return the correct daily usages per day', () => {
      expect(dailyUsages).toEqual([
        {
          date: '01/Dec/2013',
          usage: 9.59 - 0.089,
        },
      ]);
    });
  });

  describe('when calculate usage from 1 day of detail usages that are broken into 2 records', () => {
    const dailyUsages = calculate(
      buildDetailUsages({ count: 2 }).map(usage => ({
        ...usage,
        DATE: '01/Dec/2013',
      }))
    );

    it('should return the correct daily usages per day', () => {
      expect(dailyUsages).toEqual([
        {
          date: '01/Dec/2013',
          usage: 19.18,
        },
      ]);
    });
  });
});

function buildDetailUsages({ count = 1 } = {}) {
  assert(count > 0 && count <= 31, 'Count must be > 0 or <= 31');

  return range(0, count).map(index => ({
    NMI: 1111111111,
    'METER SERIAL NUMBER': 1111111,
    'CON/GEN': 'Consumption',
    DATE: `${pad(2, (index + 1).toString(), '0')}/Dec/2013`,
    'ESTIMATED?': 'N',
    '00:00 - 00:30': 0.07,
    '00:30 - 01:00': 0.089,
    '01:00 - 01:30': 0.095,
    '01:30 - 02:00': 0.127,
    '02:00 - 02:30': 0.143,
    '02:30 - 03:00': 0.141,
    '03:00 - 03:30': 0.135,
    '03:30 - 04:00': 0.117,
    '04:00 - 04:30': 0.14,
    '04:30 - 05:00': 0.14,
    '05:00 - 05:30': 0.148,
    '05:30 - 06:00': 0.113,
    '06:00 - 06:30': 0.133,
    '06:30 - 07:00': 0.273,
    '07:00 - 07:30': 0.143,
    '07:30 - 08:00': 0.077,
    '08:00 - 08:30': 0.198,
    '08:30 - 09:00': 0.258,
    '09:00 - 09:30': 0.188,
    '09:30 - 10:00': 0.085,
    '10:00 - 10:30': 0.089,
    '10:30 - 11:00': 0.135,
    '11:00 - 11:30': 0.114,
    '11:30 - 12:00': 0.102,
    '12:00 - 12:30': 0.083,
    '12:30 - 13:00': 0.086,
    '13:00 - 13:30': 0.083,
    '13:30 - 14:00': 0.08,
    '14:00 - 14:30': 0.081,
    '14:30 - 15:00': 0.067,
    '15:00 - 15:30': 0.096,
    '15:30 - 16:00': 0.109,
    '16:00 - 16:30': 0.079,
    '16:30 - 17:00': 0.517,
    '17:00 - 17:30': 0.525,
    '17:30 - 18:00': 0.467,
    '18:00 - 18:30': 0.989,
    '18:30 - 19:00': 0.558,
    '19:00 - 19:30': 0.152,
    '19:30 - 20:00': 0.214,
    '20:00 - 20:30': 0.192,
    '20:30 - 21:00': 0.283,
    '21:00 - 21:30': 0.327,
    '21:30 - 22:00': 0.48,
    '22:00 - 22:30': 0.197,
    '22:30 - 23:00': 0.339,
    '23:00 - 23:30': 0.217,
    '23:30 - 00:00': 0.116,
  }));
}
