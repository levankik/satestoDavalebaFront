import React from "react";
import {useState, useEffect} from "react";
import Service from "../service/service";
import {useLocation, useNavigate, useParams} from 'react-router-dom';

const Edit = () => {

    const location = useLocation();
    const destination = location.pathname.substring(0, location.pathname.indexOf("/edit"));
    const navigate = useNavigate();
    const title = destination.includes("teachers") ? "TEACHER" : destination.includes("students") ? "STUDENT" : "GROUP";

    const [record, setRecord] = useState({});
    const [error, setError] = useState("");

    const {id} = useParams();

    useEffect(() => {
        Service
            .getById(destination, id)
            .then((res) => {
                setRecord(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const Update = (e) => {
        e.preventDefault();
        Service
            .update(destination, record)
            .then((res) => {
                setRecord({});
                navigate(destination);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center">{error}</div>
                            <div className="card-header fs-3 text-center">EDIT {title}</div>
                            <div className="card-body">
                                <form onSubmit={(e) => Update(e)}>
                                    {Object.entries(record).slice(1, destination.includes("groups") ? 3 : record.length)
                                        // record.length - 2 არ იმუშავა
                                        .map(([key, value]) => (
                                                <div className="mb-3" key={key}>
                                                    <label>Enter {key}</label>
                                                    <input
                                                        type = {key === "birthDate" ? "date" : key === "mail" ? "email": "text"}
                                                        name={key}
                                                        className="form-control"
                                                        onChange={(e) => {
                                                            Service.handleError(e, error, setError);
                                                            Service.handleChange(e, setRecord, record)
                                                        }}
                                                        value={value}
                                                    />
                                                </div>
                                            )
                                        )}
                                    <button className="btn btn-primary col-md-12">UPDATE</button>
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
