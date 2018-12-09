import {
  getPlanetListFromNasaData,
  formatNasaDataForChart,
  extractListOfOrbits,
  filterNasaDataByOrbit
} from './formatter';

import { rawData } from '../__mocks__/rawData';

// filterNasaDataByOrbit
it('filterNasaDataByOrbit no filter', () => {
  const nasaData = getPlanetListFromNasaData(rawData);
  const data = filterNasaDataByOrbit(nasaData, '');
  expect(data.length).toBe(nasaData.length);
});

it('filterNasaDataByOrbit no filter', () => {
  const nasaData = getPlanetListFromNasaData(rawData);
  const data = filterNasaDataByOrbit(nasaData, 'Earth');
  expect(data.length).toBe(9);
});

// extractListOfOrbits
it('extractListOfOrbits empty', () => {
  const empty = extractListOfOrbits([]);
  expect(empty.length).toBe(0);
});

it('extractListOfOrbits', () => {
  const nasaData = getPlanetListFromNasaData(rawData);
  const orbits = extractListOfOrbits(nasaData);
  expect(orbits).toBeDefined();
});

// extractListOfOrbits
it('extractListOfOrbits not null return', () => {
  const formatted = getPlanetListFromNasaData(rawData);
  expect(formatted).toBeDefined();
});

it('extractListOfOrbits null', () => {
  const empty = getPlanetListFromNasaData(null);
  expect(empty.length).toBe(0);

  const emptyNear_earth_objects = getPlanetListFromNasaData({
    near_earth_objects: null
  });
  expect(emptyNear_earth_objects.length).toBe(0);
});

it('extractListOfOrbits response shape', () => {
  const formatted = getPlanetListFromNasaData(rawData);
  const item = formatted[0];
  expect(item.name).toBeDefined();
  expect(item.minDiameter).toBeDefined();
  expect(item.maxDiameter).toBeDefined();
  expect(item.orbitingBody).toBeDefined();
});

// formatNasaDataForChart
it('extractListOfOrbits empty', () => {
  const empty = formatNasaDataForChart([]);
  expect(empty.length).toBe(1);
  expect(empty[0].length).toBe(3);
});

it('extractListOfOrbits empty', () => {
  const empty = formatNasaDataForChart([]);
  expect(empty.length).toBe(1);
});
