import React from 'react';
import renderer, { act } from 'react-test-renderer';
import DailyUsagesWidget from './index';
import { I18nContext } from '../../libs/i18n';

describe('DailyUsagesWidget', () => {
  describe('when render widget with 1 day usages', () => {
    const { create } = getTestContext();

    const widget = create(
      <DailyUsagesWidget
        dailyUsages={[
          {
            date: '01/Dec/2013',
            usage: 9.59,
          },
        ]}
      />
    );

    it('renders a data grid"', () => {
      widget.root.findByProps({
        className: 'ReactVirtualized__Table',
      });
    });
  });

  describe('when render widget with 1 days usages and select line chart', () => {
    const { create } = getTestContext();

    const widget = create(
      <DailyUsagesWidget
        dailyUsages={[
          {
            date: '01/Dec/2013',
            usage: 9.59,
          },
        ]}
      />
    );

    act(() => {
      const lineChartAction = widget.root.findByProps({
        'data-icon': 'chart-area',
      }).parent.parent;

      lineChartAction.props.onClick({
        preventDefault: jest.fn(),
      });
    });

    it('renders a line chart"', () => {
      widget.root.findByProps({
        className: 'recharts-responsive-container',
      });
    });
  });
});

function getTestContext() {
  const mocks = {
    i18nFormatter: {
      formatNumber: jest.fn().mockImplementation(s => s),
    },
  };

  return {
    mocks,
    create: element =>
      renderer.create(
        <I18nContext.Provider value={mocks.i18nFormatter}>
          {element}
        </I18nContext.Provider>
      ),
  };
}
