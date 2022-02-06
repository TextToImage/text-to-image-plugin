import axios from 'axios';
interface SearchBody {
  search_text: string;
  num_images?: number;
}
interface AxiosOptions {
  method: string | any;
  url: string | any;
  headers: object | any;
  data: SearchBody;
}
export default function TextToImageSearch(apiKey: string, searchBody: SearchBody) {
  searchBody.num_images = searchBody.num_images || 5;

  const options: AxiosOptions = {
    method: 'POST',
    url: 'https://texttoimage.p.rapidapi.com/image',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'texttoimage.p.rapidapi.com',
      'x-rapidapi-key': apiKey
    },
    data: searchBody
  };
  return axios
    .request(options)
    .then((response) => {
      return response.data.body;
    })
    .catch((error) => {
      return error;
    });
}
