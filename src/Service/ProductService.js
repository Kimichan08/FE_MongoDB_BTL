import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/v1/product";

class ProductService {
    getAllProduct() {
        let config = {
            method: 'get',
            url: PRODUCT_API_BASE_URL,
            // Không cần truyền data vì đây là yêu cầu GET và không có dữ liệu được gửi cùng với yêu cầu
        };

        return axios.request(config)
            .then(response => response.data) // Trả về dữ liệu từ phản hồi
            .catch((error) => {
                console.log(error);
                throw error; // Ném lỗi để xử lý trong thành phần gọi
            });
    }
    searchProduct(query) {
        return axios.get(PRODUCT_API_BASE_URL + "/search", {
            params: {
                query: query,
            },
        });
    }
}

export default new ProductService();
