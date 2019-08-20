import { csv2json } from '../src/csv2json';

describe('csv2json', () => {
  describe('when parsing valid csv with header row and 1 data row', () => {
    const json = csv2json(`
      NMI,METER SERIAL NUMBER,CON/GEN,DATE,ESTIMATED?,Test?,00:00 - 00:30,00:30 - 01:00
      1111111111,1111111,Consumption,01/Dec/2013,N,true,0.07,0.089
    `);

    it('return the json with correct property keys and values', () => {
      expect(json).toEqual([
        {
          NMI: 1111111111,
          'METER SERIAL NUMBER': 1111111,
          'CON/GEN': 'Consumption',
          DATE: '01/Dec/2013',
          'ESTIMATED?': 'N',
          'Test?': true,
          '00:00 - 00:30': 0.07,
          '00:30 - 01:00': 0.089,
        },
      ]);
    });
  });

  describe('when parsing valid csv with header row and 1 data row with leading and trailing spaces', () => {
    const json = csv2json(`
      NMI,METER SERIAL NUMBER,CON/GEN,DATE,ESTIMATED?,00:00 - 00:30,00:30 - 01:00
      1111111111,1111111, Consumption,01/Dec/2013, N ,0.07,0.089
    `);

    it('return the json with correct property keys and values', () => {
      expect(json).toEqual([
        {
          NMI: 1111111111,
          'METER SERIAL NUMBER': 1111111,
          'CON/GEN': 'Consumption',
          DATE: '01/Dec/2013',
          'ESTIMATED?': 'N',
          '00:00 - 00:30': 0.07,
          '00:30 - 01:00': 0.089,
        },
      ]);
    });

    describe('when parsing valid csv with header row and 1 data row with quotes', () => {
      const json = csv2json(`
        NMI,METER SERIAL NUMBER,CON/GEN,DATE,ESTIMATED?,00:00 - 00:30,00:30 - 01:00
        1111111111,1111111," Consumption",01/Dec/2013,N,0.07,0.089
      `);

      it('return the json with correct property keys and values', () => {
        expect(json).toEqual([
          {
            NMI: 1111111111,
            'METER SERIAL NUMBER': 1111111,
            'CON/GEN': ' Consumption',
            DATE: '01/Dec/2013',
            'ESTIMATED?': 'N',
            '00:00 - 00:30': 0.07,
            '00:30 - 01:00': 0.089,
          },
        ]);
      });
    });
  });
});
