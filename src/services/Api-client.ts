import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '8ddf30d36b9142dda934b6802eda5c21'
    }
})