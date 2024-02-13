import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.86.30:9000/api',
});

apiClient.get('/listings').then((response) => {
  if (!response.ok) {
    response.problem;
  }
});
