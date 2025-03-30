//CountryService.js
import axios from "axios";

const COUNTRY_API_URL = "https://restcountries.com/v3.1/all";

export const getCountries = async () => {
  try {
    const response = await axios.get(COUNTRY_API_URL);
    return response.data.map((country) => ({
      name: country.name.common,
      code: country.cca2, // Country code (e.g., US, IN)
      flag: country.flags.png,
      region: country.region,
      population: country.population,
    }));
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};
