import axios from "axios";
const CATEGORY_API_BASE_URL = "http://localhost:8080/api/v1/category";
class CategoryService{
    getAllCategory() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: CATEGORY_API_BASE_URL,
            headers: { 
                'Content-Type': 'application/json'
              },
              data : data
        }
        return axios.request(config)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}   