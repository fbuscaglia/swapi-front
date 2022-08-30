import axios from "axios";

const apiBaseUrl = "https://swapi.dev/api/planets";

export const PlanetService = {
  search: (page) => axios.get(`${apiBaseUrl}?page=${page}`),
  findById: (id) => axios.get(`${apiBaseUrl}/${id}`),
};
