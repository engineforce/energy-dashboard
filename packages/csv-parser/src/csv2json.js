import {
  pipe,
  map,
  split,
  trim,
  isEmpty,
  filter,
  complement,
  takeLast,
  zipObj,
  tap,
  replace,
} from 'ramda';
import detect from 'detect-csv';
import assert from 'assert';

/**
 * @type {(csv: string) => any[]}
 */
export const csv2json = pipe(
  replace(/^\s+|\s+$/g, ''),
  tap(csvText => assert(detect(csvText), 'Invalid CSV.')),
  split(/\r?\n/g),
  map(trim),
  filter(complement(isEmpty)),
  map(split(',')),
  map(map(trim)),
  rows =>
    pipe(
      takeLast(rows.length - 1),
      map(zipObj(rows[0]))
    )(rows),
  map(map(parseJson))
);

function parseJson(value) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}
