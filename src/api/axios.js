import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key:'869a7f724f61d3dae134a370efbed7f3',
        language:'ko-KR',
    },
})

export default instance;
