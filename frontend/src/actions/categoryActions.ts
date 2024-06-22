import {fetchWithRetry} from '@/utils/fetchWithRetry';
import {Category} from '@/types/category';

export const fetchChildrenCategories = async (categoryId: number): Promise<Category[]> => {
    try {
        const response = await fetchWithRetry(`/api/categories?parentId=${categoryId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const fetchCategory = async (categoryId: number): Promise<Category> => {
    try {
        const response = await fetchWithRetry(`/api/category?categoryId=${categoryId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching category details:', error);
        throw error;
    }
};
