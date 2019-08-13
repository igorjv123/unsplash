
import { ACCESS_KEY, SECRET_KEY } from "../apiConfig";
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
    applicationId: ACCESS_KEY,
    secret: SECRET_KEY
});
class CollectionsService {
    static getPopularCollections = (page = 1, perPage = 10) => {
        return unsplash.collections.listCollections(page, perPage, "popular")
            .then(res => res.json())
            .then(json => json);
    };
}

export default CollectionsService;
