import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Root, H3, HR, DataContainer, IconContainer } from './styled';
import DailyUsagesGrid from '../daily-usages-grid';
import DailyUsagesLineChart from '../daily-usages-line-chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faChartArea } from '@fortawesome/free-solid-svg-icons';

const DISPLAY_MODES = {
  grid: 'grid',
  lineChart: 'line-chart',
};

const DailyUsagesWidget = ({ dailyUsages }) => {
  const [displayMode, setDisplayMode] = useState(DISPLAY_MODES.grid);

  return (
    <Root>
      <H3>Daily Usages</H3>
      <IconContainer
        active={displayMode === DISPLAY_MODES.grid}
        onClick={event => {
          setDisplayMode(DISPLAY_MODES.grid);
          event.preventDefault();
        }}
      >
        <FontAwesomeIcon icon={faTh} />
      </IconContainer>
      <IconContainer
        active={displayMode === DISPLAY_MODES.lineChart}
        onClick={event => {
          setDisplayMode(DISPLAY_MODES.lineChart);
          event.preventDefault();
        }}
      >
        <FontAwesomeIcon icon={faChartArea} />
      </IconContainer>
      <HR />
      <DataContainer>
        {displayMode === DISPLAY_MODES.lineChart ? (
          <DailyUsagesLineChart dailyUsages={dailyUsages} />
        ) : (
          <DailyUsagesGrid dailyUsages={dailyUsages} />
        )}
      </DataContainer>
    </Root>
  );
};

DailyUsagesWidget.propTypes = {
  dailyUsages: PropTypes.array.isRequired,
};

export default DailyUsagesWidget;
