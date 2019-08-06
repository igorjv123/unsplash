import { ACCESS_KEY, SECRET_KEY } from "../apiConfig";
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
    applicationId: ACCESS_KEY,
    secret: SECRET_KEY
});

class ImagesService {
    getImages = (query, page = 1) => {
        return unsplash.search.photos(query, page)
            .then(res => res.json())
            .catch(err => err.message);
    }
    getPopularImages = (page) => {
        return unsplash.collections.listCollections(page, 10, 'popular')
            .then(res => res.json())
            .catch(err => err.message);
    }
}

export default new ImagesService();