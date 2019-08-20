import { pipe, defaultTo } from 'ramda';
import React from 'react';

export const makeI18nFormatter = ({ locale }) => {
  const formatter = new Intl.NumberFormat(locale);

  const formatNumber = pipe(
    defaultTo(0),
    formatter.format
  );

  return {
    formatNumber,
  };
};

export const I18nContext = React.createContext(undefined);
