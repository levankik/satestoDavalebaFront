import React from "react";
import { useState, useEffect } from "react";
import teacherService from "../service/teacher.service";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Edit = () => {
    const [teacher, setTeacher] = useState ({
        name: "",
        lastName: "",
        idNumber: "",
        mail: "",
        birthDate: ""
    });

    const navigate = useNavigate();

    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        teacherService
            .getTeacherById(id)
            .then((res) => {
                setTeacher(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setTeacher ({...teacher, [e.target.name]: value});
    }

    const Update = (e) => {
        e.preventDefault();

        teacherService
            .updateTeacher(teacher)
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
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center">Edit Teacher</div>

                            <div className="card-body">
                                <form onSubmit={(e) => Update(e)}>
                                    <div className="mb-3">
                                        <label>Enter Teacher Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value = {teacher.name}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter lastname</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value = {teacher.lastName}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter idNumber</label>
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
                                        <label>Enter birth date</label>
                                        <input
                                            type="text"
                                            name="birthDate"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value = {teacher.birthDate}
                                        />
                                    </div>
                                    <button className="btn btn-primary col-md-12">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Edit;