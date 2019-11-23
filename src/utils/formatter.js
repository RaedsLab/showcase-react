export const filterNasaDataByOrbit = (data, selectedOrbit) => {
  return data.filter((element, index) => {
    if (index === 0 || selectedOrbit === "") {
      // no need to filter
      return true;
    }
    return element.orbitingBody.includes(selectedOrbit);
  });
};

export const extractListOfOrbits = nasaData => {
  const orbits = new Set();
  nasaData.map(element => element.orbitingBody.map(orbit => orbits.add(orbit)));
  return Array.from(orbits);
};

export const getPlanetListFromNasaData = nasaData => {
  if (nasaData == null || nasaData.near_earth_objects == null) {
    return [];
  }

  return nasaData.near_earth_objects
    .map(nearEarthObject => {
      return {
        name: nearEarthObject.name,
        minDiameter:
          nearEarthObject.estimated_diameter.kilometers.estimated_diameter_min,
        maxDiameter:
          nearEarthObject.estimated_diameter.kilometers.estimated_diameter_max,
        orbitingBody: nearEarthObject.close_approach_data.map(
          close_approach_data => close_approach_data.orbiting_body
        )
      };
    })
    .sort((left, right) => {
      const letAverage = (left.maxDiameter + left.minDiameter) / 2;
      const rightAverage = (right.maxDiameter + right.minDiameter) / 2;

      return letAverage - rightAverage;
    });
};

export const formatNasaDataForChart = nasaData => {
  const chartData = [
    ["NEO Name", "Min Estimated Diameter (km)", "Max Estimated Diameter (km)"]
  ];

  nasaData.forEach(element => {
    chartData.push([element.name, element.minDiameter, element.maxDiameter]);
  });

  return chartData;
};
