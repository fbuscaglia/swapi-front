import axios from "axios";

const apiBaseUrl = "https://swapi.dev/api/people";

export const PeopleService = {
  search: (page) => axios.get(`${apiBaseUrl}?page=${page}`),
  findById: (id) => axios.get(`${apiBaseUrl}/${id}`),
};
