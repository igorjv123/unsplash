
import { ACCESS_KEY, SECRET_KEY } from "../apiConfig";
import Unsplash, {toJson} from 'unsplash-js';

const unsplash = new Unsplash({
    applicationId: ACCESS_KEY,
    secret: SECRET_KEY
});

class CollectionsService {
    static getPopularCollections = (page = 1, perPage = 10) => {
        return unsplash.collections.listCollections(page, perPage, "popular")
            .then(toJson)
            .then(res => res)
            .catch(err => err.message);
    };
    static getCollectionPhotos = (id, page = 1, perPage = 10, orderBy = 'popular') => {
        return unsplash.collections.getCollectionPhotos(id, page, perPage, orderBy)
            .then(toJson)
            .then(res => res)
            .catch(err => err.message);
    }
}

export default CollectionsService;
