import React, {useEffect, useState} from "react";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import Service from "../service/service";

const GroupStructure = () => {

    const [assignedPersons, setAssignedPersons] = useState([]);
    const location = useLocation();
    const destination = location.pathname;
    const title = destination.includes("teachers") ? "TEACHER" : "STUDENT";

    const initialValues = {
        name: "",
        lastName: "",
        idNumber: "",
        mail: "",
        birthDate: ""
    };

    async function loadAssignedPersons() {
        const res =
            await Service.getFromGroup(destination);
        console.log("Res :", res);
        setAssignedPersons(res.data);
    }

    useEffect(() => {
        loadAssignedPersons().catch(console.error)
    }, []);

    const removePersonsFromGroup = (groupNumber, id) => {
        Service.removeFromGroup(destination, groupNumber, id)
            .then((res) => {
                loadAssignedPersons().catch((error) => console.log(error));
            });
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header fs-3 text-center"> GROUP {title} </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th colSpan="8" className="text-center">
                                            <div className="row justify-content-center container-fluid">
                                                <NavLink to={'add/'}
                                                         className="btn btn-primary col-md-4 fs-5 mb-2 me-3 btn-success">
                                                    ADD {title}
                                                </NavLink>
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
                                    {assignedPersons.map((person, num) => (
                                        <tr key={person.id}>
                                            <td>{num + 1}</td>
                                            {Object.entries(person).slice(1, person.length).map(([key, value]) => (
                                                <td key={person.key}>
                                                    {value}
                                                </td>
                                            ))}
                                            <td>
                                                <button onClick={() => removePersonsFromGroup(person.id)}
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

export default GroupStructure;