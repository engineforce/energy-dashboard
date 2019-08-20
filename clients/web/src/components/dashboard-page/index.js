import React from 'react';
import {
  calculateDailyUsages,
  calculateTotalUsage,
  calculateAvgDailyUsage,
} from 'usage-calculator';

import { Root, GridContainer, TileContainer } from './styled';
import { useCsvUsages } from './useCsvUsages';
import DailyUsagesWidget from '../daily-usages-widget';
import Loading from '../loading';
import ErrorText from '../error-text';
import TotalUsageWidget from '../total-usage-widget';
import AvgDailyUsageWidget from '../avg-daily-usage-widget';

const USAGE_FILE = '/example-vic-2013.csv';

const Dashboard = () => {
  const [{ usages: detailUsages, isLoading, error }] = useCsvUsages(
    USAGE_FILE,
    []
  );

  const dailyUsages =
    !isLoading &&
    !error &&
    calculateDailyUsages({
      state: 'vic',
      serviceProvider: 'ausnetservices',
      detailUsages,
    });

  const totalUsage = !isLoading && !error && calculateTotalUsage(dailyUsages);
  const avgDailyUsage =
    !isLoading && !error && calculateAvgDailyUsage(dailyUsages);

  return (
    <Root>
      {error ? (
        <ErrorText>Failed get usages.{error.message}</ErrorText>
      ) : isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <>
          <TileContainer>
            <TotalUsageWidget totalUsage={totalUsage} />
          </TileContainer>
          <TileContainer>
            <AvgDailyUsageWidget avgDailyUsage={avgDailyUsage} />
          </TileContainer>
          <GridContainer>
            <DailyUsagesWidget dailyUsages={dailyUsages} />
          </GridContainer>
        </>
      )}
    </Root>
  );
};

export default Dashboard;
