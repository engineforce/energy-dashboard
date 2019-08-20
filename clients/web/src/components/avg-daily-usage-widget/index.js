import React, { useContext } from 'react';
import { Root, H3, P, IconContainer } from './styled';
import { I18nContext } from '../../libs/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

const AvgDailyUsageWidget = ({ avgDailyUsage }) => {
  const i18nFormatter = useContext(I18nContext);

  return (
    <Root>
      <IconContainer>
        <FontAwesomeIcon icon={faCalendarDay} />
      </IconContainer>
      <H3>Average Daily Usage</H3>
      <P>{i18nFormatter.formatNumber(avgDailyUsage)}</P>
    </Root>
  );
};

export default AvgDailyUsageWidget;
