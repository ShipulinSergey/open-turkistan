import api from './base';

export default {
    list(next) {
        let url = 'accommodations'
        if (next) {
            url = url + '?page=' + next
        }
        return api.get(url).then(res => {
            return res.data;
        }).catch(err => {
            return err.data;
        });
    }
}