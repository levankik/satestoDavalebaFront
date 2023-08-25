import React, {useEffect, useState} from "react";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import Service from "../service/service";

const GroupStructure = () => {

    const navigate = useNavigate();
    const [assignedTeachers, setAssignedTeachers] = useState([]);

    async function loadAssignedTeachers(groupNumber) {
        const res =
            await Service.getAssignedTeachers(destination, groupNumber);
        console.log("Res :", res);
        setAssignedTeachers(res.data);
    }

    useEffect(() => {
        loadAssignedTeachers().catch(console.error)
    }, []);

    const removeRecordFromGroup = (groupNumber, id) => {
        Service
            .removeAssignedTeacher(destination, groupNumber, id)
            .then((res) => {
                loadAssignedTeachers().catch((error) => console.log(error));
            });
    };

    const location = useLocation();
    const destination = location.pathname;
    console.log(destination);

    const initialValues = {
        name: "",
        lastName: "",
        idNumber: "",
        mail: "",
        birthDate: ""
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-9 offset-md-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                Group {destination.includes("teachers") ? "Teachers" : "Students"}
                            </div>
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
                                                            ADD
                                                            {/*{buttonTitle}*/}
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
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {assignedTeachers.map((teacher, num) => (
                                        <tr key={teacher.id}>
                                            <td>{num + 1}</td>
                                            {Object.entries(teacher).slice(1, teacher.length).map(([key, value]) => (
                                                <td key={teacher.key}>
                                                    {value}
                                                </td>
                                            ))}
                                            <td>
                                                <button onClick={() => removeRecordFromGroup(teacher.id)}
                                                        className="btn btn-sm btn-danger ms-1">
                                                    Delete
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

export default GroupStructure;