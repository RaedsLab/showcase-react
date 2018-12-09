import { rawData } from './rawData';
export default {
  get: jest.fn(() => Promise.resolve({ data: rawData }))
};
