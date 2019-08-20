import React from 'react';
import renderer from 'react-test-renderer';
import TotalUsageWidget from './index';
import { I18nContext } from '../../libs/i18n';

describe('TotalUsageWidget', () => {
  describe('when render widget with total usage', () => {
    const { create } = getTestContext();

    const widget = create(<TotalUsageWidget totalUsage={1234.567} />);

    it('renders a label with "Total Usage"', () => {
      widget.root.findByProps({
        children: 'Total Usage',
      });
    });

    it('renders the value of total usage pass to it', () => {
      widget.root.findByProps({
        children: 1234.567,
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
