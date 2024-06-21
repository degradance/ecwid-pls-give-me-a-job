import axios from "axios";

export const fetchProducts = async (productIds: Array<number>) => {
    try {
        const response = await axios.get(`/api/products?productIds=${ productIds.join(',') }`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};
