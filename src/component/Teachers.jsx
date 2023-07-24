import React from "react";
import {NavLink} from "react-router-dom";
import teacherService from "../service/teacher.service";

const Teachers = ({data = [], onSearch}) => {

    const deleteTeacher = (id) => {
        teacherService
            .deleteTeacher(id)
            .then((res) => {
                onSearch();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th colSpan="8" className="text-center">
                                            <div className="container-fluid">
                                                <div className="row  justify-content-center">
                                                    <NavLink to={'addTeacher/'}>
                                                        <button className="btn btn-primary col-md-3 fs-5 mb-2 me-3 btn-success">ADD TEACHER</button>
                                                    </NavLink>
                                                 </div>
                                            </div>
                                        </th>
                                    </tr>
                                    </thead>
                                    <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>LastName</th>
                                        <th>IdNumber</th>
                                        <th>Mail</th>
                                        <th>Birth Date</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.map((t,  num) => (
                                        <tr key={t.teacherId}>
                                            <td>{num + 1}</td>
                                            <td>{t.name}</td>
                                            <td>{t.lastName}</td>
                                            <td>{t.idNumber}</td>
                                            <td>{t.mail}</td>
                                            <td>{t.birthDate}</td>
                                            <td>
                                                <NavLink to={'editTeacher/' + t.teacherId}  className="btn btn-sm btn-primary">
                                                    Edit
                                                </NavLink>
                                            </td>
                                            <td>
                                                <button onClick={() => deleteTeacher(t.teacherId)}
                                                        className="btn btn-sm btn-danger ms-1">Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teachers;