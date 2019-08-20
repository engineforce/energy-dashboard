import { format } from 'date-fns';
import { range } from 'ramda';

const MINUTES_PER_DAY = 1440;

export const getMinuteTimeSlots = interval =>
  range(0, MINUTES_PER_DAY / interval).map(
    index =>
      `${minutesToTime(index * interval)} - ${minutesToTime(
        (index + 1) * interval
      )}`
  );

function minutesToTime(minutes) {
  return format(new Date(0, 0, 0, 0, minutes, 0), 'HH:mm');
}
