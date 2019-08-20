import React from 'react';
import { Root } from './styled';
import { AutoSizer, Table, Column } from 'react-virtualized';

const DailyUsagesGrid = ({ dailyUsages }) => {
  return (
    <Root>
      <AutoSizer disableHeight>
        {({ width }) => (
          <Table
            height={300}
            width={width}
            headerHeight={20}
            rowHeight={30}
            rowCount={dailyUsages.length}
            rowGetter={({ index }) => dailyUsages[index]}
          >
            <Column label="Date" dataKey="date" width={100} flexGrow={1} />
            <Column
              label="Usage"
              headerStyle={{ textAlign: 'right' }}
              style={{ textAlign: 'right' }}
              dataKey="usage"
              width={80}
            />
          </Table>
        )}
      </AutoSizer>
    </Root>
  );
};

export default DailyUsagesGrid;
