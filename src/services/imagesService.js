import { ACCESS_KEY, SECRET_KEY } from "../apiConfig";

const Unsplash = require('unsplash-js').default;

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
}

export default new ImagesService();