import { fecthNearEarthObjects, fetchPlanetInfo } from './service';

import mockAxios from 'axios';
import { rawData } from '../__mocks__/rawData';
import { wikiData } from '../__mocks__/wikiData';

describe('axios services', () => {
  it('fetches data from NASA', async () => {
    // setup
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: rawData
      })
    );
    const data = await fecthNearEarthObjects();
    expect(data).toBe(rawData);
  });

  it('fetches data from Wikipedia', async () => {
    // setup
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: wikiData
      })
    );
    const data = await fetchPlanetInfo();
    expect(data).toBe(wikiData);
  });
});
