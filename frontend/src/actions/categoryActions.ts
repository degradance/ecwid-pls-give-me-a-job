import axios from "axios";

export const fetchChildrenCategories = async (categoryId: Number) => {
    try {
        const response = await axios.get(`/api/categories?parentId=${ categoryId }`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

export const fetchCategory = async (categoryId: Number) => {
    try {
        const response = await axios.get(`/api/category?categoryId=${ categoryId }`);
        return response.data;
    } catch (error) {
        console.error('Error fetching category details:', error);
    }
};
