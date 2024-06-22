import {fetchWithRetry} from '@/utils/fetchWithRetry';
import {ProductType} from '@/types/product';

export const fetchProducts = async (productIds: number[]): Promise<ProductType[]> => {
    try {
        const response = await fetchWithRetry(`/api/products?productIds=${productIds.join(',')}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
