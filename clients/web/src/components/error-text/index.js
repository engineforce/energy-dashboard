import React from 'react';
import { Root } from './styled';

const ErrorText = ({ children }) => {
  return <Root>{getErrorMessage(children)}</Root>;
};

function getErrorMessage(error) {
  if (typeof error === 'string') {
    return error;
  }

  if (error instanceof Array) {
    return error.join(' ');
  }

  return error;
}

export default ErrorText;
