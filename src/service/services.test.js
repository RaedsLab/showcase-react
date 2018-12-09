import { fecthNearEarthObjects } from './service';

import mockAxios from 'axios';
import { rawData } from '../__mocks__/rawData';

it('fetches data from unsplash', async () => {
  // setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: rawData
    })
  );

  const data = await fecthNearEarthObjects();
  expect(data).toBe(rawData);

  // work

  // expect
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});
