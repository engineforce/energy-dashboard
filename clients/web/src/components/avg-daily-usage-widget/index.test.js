import React from 'react';
import renderer from 'react-test-renderer';
import AvgDailyUsageWidget from './index';
import { I18nContext } from '../../libs/i18n';

describe('AvgDailyUsageWidget', () => {
  describe('when render widget with average usage', () => {
    const { create } = getTestContext();

    const widget = create(<AvgDailyUsageWidget avgDailyUsage={23456.789} />);

    it('renders a label with "Average Daily Usage"', () => {
      widget.root.findByProps({
        children: 'Average Daily Usage',
      });
    });

    it('renders the value of average daily pass to it', () => {
      widget.root.findByProps({
        children: 23456.789,
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
