import React from "react";
import { useState } from "react";
import teacherService from "../service/teacher.service";
import {useNavigate} from "react-router-dom";


const Add = () => {

    const [teacher, setTeacher] = useState ({
        name: "",
        lastName: "",
        idNumber: "",
        mail: "",
        birthDate: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setTeacher ({...teacher, [e.target.name]: value});
    }

    const TeacherRegister = (e) => {
        e.preventDefault();
        teacherService
            .saveTeacher(teacher)
            .then((res) => {
                setTeacher({
                    name: "",
                    lastName: "",
                    idNumber: "",
                    mail: "",
                    birthDate: ""
                });
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center">Add Teacher</div>

                            <div className="card-body">
                                <form onSubmit={(e) => TeacherRegister(e)}>
                                    <div className="mb-3">
                                        <label>Enter Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value = {teacher.name}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value = {teacher.lastName}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter IdNumber</label>
                                        <input
                                            type="text"
                                            name="idNumber"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value = {teacher.idNumber}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter Mail</label>
                                        <input
                                            type="text"
                                            name="mail"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value = {teacher.mail}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter BirtH Date</label>
                                        <input
                                            type="text"
                                            name="birthDate"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value = {teacher.birthDate}
                                        />
                                    </div>
                                    <button className="btn btn-primary col-md-12">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add;