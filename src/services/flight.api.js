import axios from 'axios';

// .env dosyasından API_BASE_URL alınması
const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

export async function fetchAirports() {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/airports`);

    return response.data;
  } catch (error) {
    console.error('Error fetching airports:', error);
    throw error;
  }
}

export async function searchFlightsFromApi(flightSearchOptions) {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/flights`, { params: flightSearchOptions });

    return response.data;
  } catch (error) {
    console.error('Error fetching airports:', error);
    throw error;
  }
}

export async function fetchApiConfig() {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/config`);

    debugger;
    return response.data;
  } catch (error) {
    console.error('Error fetching airports:', error);
    throw error;
  }
}