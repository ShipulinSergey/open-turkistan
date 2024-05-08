import api from './base';

export default {
    list() {
        return api.get('destinations').then(res => {
            return res.data;
        }).catch(err => {
            return err.data;
        });
    },
    item(id, lang) {
        return api.get(`destinations/${id}?lang=${lang}`).then(res => {
            return res.data;
        }).catch(err => {
            return err.data;
        });
    }
}