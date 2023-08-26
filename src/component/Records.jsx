import React, {useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import Service from "../service/service";

const Records = ({data = [], onSearch}) => {

    const location = useLocation();
    const destination = location.pathname;

    const buttonTitle = destination.slice(1).toUpperCase();

    let initialValues = {};

    if (destination === "/groups") {
        initialValues = {
            name: "",
            groupNumber: "",
            assignedTeachers: {},
            assignedStudents: {}
        };
    } else {
        initialValues = {
            name: "",
            lastName: "",
            idNumber: "",
            mail: "",
            birthDate: ""
        };
     }

    const deleteRecord = (id) => {
        Service
            .delete(destination, id)
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
                                                    <NavLink to={'add/'}>
                                                        <button
                                                            className="btn btn-primary col-md-3 fs-5 mb-2 me-3 btn-success">
                                                            ADD {buttonTitle}
                                                        </button>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    </thead>
                                    <thead>
                                    <tr>
                                        <th>No</th>
                                        {Object.entries(initialValues).map(([key, value]) => (
                                            <th key={key}>
                                                {key}
                                            </th>
                                        ))}
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {data.map((record, num) => (
                                        <tr key={record.id}>
                                            <td>{num + 1}</td>
                                            {Object.entries(record).slice(1, record.length).map(([key, value]) => (
                                                key === "assignedTeachers" || key === "assignedStudents" ? (
                                                    <td key={record.key}>
                                                        <NavLink to={'' +  record.groupNumber + '/teachers'}
                                                                 className="btn btn-sm btn-primary">
                                                           Open {key}
                                                        </NavLink>
                                                    </td>
                                                ) : (
                                                    <td key={record.key}>
                                                        {value}
                                                    </td>
                                                )
                                            ))}
                                            <td>
                                                <NavLink to={'edit/' + record.id} className="btn btn-sm btn-primary">
                                                    EDIT
                                                </NavLink>
                                            </td>
                                            <td>
                                                <button onClick={() => deleteRecord(record.id)}
                                                        className="btn btn-sm btn-danger ms-1">
                                                    DELETE
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

export default Records;