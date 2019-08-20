import { pipe, map, reduceBy, toPairs } from 'ramda';
import { toUsage } from '../lib/toUsage';
import { getMinuteTimeSlots } from '../lib/getTimeSlots';

export function calculate(detailUsages) {
  const timeSlots = getMinuteTimeSlots(30);
  return calculateDailyUsages(timeSlots)(detailUsages);
}

const calculateDailyUsages = timeSlots =>
  pipe(
    reduceBy(
      (totalDailyUsage, detailUsage) => {
        return (
          totalDailyUsage +
          timeSlots.reduce((dailyUsage, timeSlot) => {
            return dailyUsage + (detailUsage[timeSlot] || 0);
          }, 0)
        );
      },
      0,
      detailUsage => detailUsage.DATE
    ),
    map(toUsage),
    toPairs,
    map(pair => ({ date: pair[0], usage: pair[1] }))
  );
