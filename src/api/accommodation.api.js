import api from './base';

export default {
    list() {
        return api.get('accommodations').then(res => {
            return res.data;
        }).catch(err => {
            return err.data;
        });
    }
}