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

    assignTeacher(destination,  id) {
        return axios.post(API_URL + destination + "/save/" + id)
    }

    removeAssignedTeacher(destination, id) {
        return axios.post(API_URL + destination  + "/remove/" + id)
    }

    assignStudent(destination,  id) {
        return axios.post(API_URL + destination +  "/save_student/" + id)
    }

    removeAssignedStudent(destination, groupId, id) {
        return axios.post(API_URL + destination + groupId + "/remove_student/" + id)
    }

    getAssignedTeachers (destination) {
        return axios.get(API_URL + destination)
    }

    getAssignedStudents (destination) {
        return axios.get(API_URL + destination)
    }
}

export default new Service;
