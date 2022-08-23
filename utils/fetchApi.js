import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '0210c59628msh12ffd0680c80284p1f0c64jsne0b33deb0485',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });

  return data;
}
