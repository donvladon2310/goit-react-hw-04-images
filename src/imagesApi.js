import axios from 'axios';
import { notificationServerError } from './notification';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function imagesApi({ search, page }) {
    try {
        const response = await axios.get('', {
            params: {
                key: '32104554-0b4517e2ee89627b97f0728dd',
                q: search,
                image_type: 'photo',
                orientation: 'horizontal',
                per_page: '12',
                page: page,
            },
        });
        if (response.status !== 200) {
            notificationServerError();
            return;
        }
        return response;
    } catch (error) {
        notificationServerError();
        return;
    }
}