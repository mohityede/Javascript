import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null,err =>{
  const expectedErr = err.response && err.response.status >=400 && err.response.status <500
  if(!expectedErr){
    console.log("logging the error ",err)
    toast.error("unexpected error occurs");
  }

  return Promise.reject(err);
})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}