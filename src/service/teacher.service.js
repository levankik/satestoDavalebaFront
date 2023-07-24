import axios from "axios";

const API_URL = "http://localhost:8080/teachers";

class TeacherService {

    saveTeacher(teacher) {
        return axios.post(API_URL + "/save", teacher);
    }

    getTeacherById (id) {
        return axios.get(API_URL + "/" + id);
    }

    deleteTeacher (id) {
        return axios.get(API_URL + "/delete/" + id);
    }

    updateTeacher (teacher) {
        return axios.post(API_URL + "/edit/" + teacher.teacherId, teacher);
    }

    getAllTeacher (params) {
        console.log(params);
        return axios.get(API_URL, params);
    }
}

export default new TeacherService;