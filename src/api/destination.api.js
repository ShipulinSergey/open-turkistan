import api from './base';

export default {
    list() {
        return api.get('destinations').then(res => {
            return res.data;
        }).catch(err => {
            return err.data;
        });
    },
    item(id) {
        return api.get(`destinations${id}`).then(res => {
            return res.data;
        }).catch(err => {
            return err.data;
        });
    }
}