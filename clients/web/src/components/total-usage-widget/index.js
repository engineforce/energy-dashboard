import React, { useContext } from 'react';
import { Root, H3, P, IconContainer } from './styled';
import { I18nContext } from '../../libs/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const TotalUsageWidget = ({ totalUsage }) => {
  const i18nFormatter = useContext(I18nContext);

  return (
    <Root>
      <IconContainer>
        <FontAwesomeIcon icon={faCalculator} />
      </IconContainer>
      <H3>Total Usage</H3>
      <P>{i18nFormatter.formatNumber(totalUsage)}</P>
    </Root>
  );
};

TotalUsageWidget.propTypes = {
  totalUsage: PropTypes.number.isRequired,
};

export default TotalUsageWidget;
