import axios from '@/utils/request';
const list = (params = {}) => {
  return axios.post('', params)
}
export default{
  list
}