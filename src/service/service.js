import axios from "axios";

const API_URL = "http://localhost:8080";

class Service {

    save (destination, record) {
        return axios.post(API_URL + destination + "/save", record);
    }

    getById (destination, id) {
        return axios.get(API_URL + destination + "/" + id);
    }

    delete (destination, id) {
        return axios.get(API_URL + destination + "/delete/" + id);
    }

    update (destination, record) {
        return axios.post(API_URL + destination + "/edit/" + record.id, record);
    }

    getAll (destination, params) {
        return axios.get(API_URL + destination, {params});
    }

    assignToGroup(destination,  id) {
        return axios.post(API_URL + destination + "/save/" + id)
    }

    removeFromGroup(destination, id) {
        return axios.post(API_URL + destination  + "/remove/" + id)
    }

    getFromGroup (destination) {
        return axios.get(API_URL + destination)
    }

    handleChange = (e, setRecord, record) => {
        const value = e.target.value;
        setRecord({...record, [e.target.name]: value});
    }

    dateFormatting (date) {
        let myDate = new Date(date);
        let year = myDate.getFullYear();
        let month = myDate.getMonth() + 1;
        if(month <= 9)
            month = '0'+month;
        let day= myDate.getDate();
        if(day <= 9)
            day = '0'+day;
        return year +'-'+ month +'-'+ day;
    }
}

export default new Service;
