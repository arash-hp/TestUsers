import axios from 'axios';
const URL = 'https://61ebc7117ec58900177cdd6d.mockapi.io/website/';
export async function addWebsite(data) {
  return axios.post(URL, data)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
}

export async function editWebsite(item) {
  return axios.put(`${URL}${item.id}`, item)
    .then(response => response.data)
}

export async function deleteWebsite(id) {
  return axios.delete(`${URL}${id}`)
}

export async function getWebsite() {
  return axios.get(URL)
    .then(res => res.data)
}