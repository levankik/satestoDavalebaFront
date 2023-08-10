import React from "react";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Service from "../service/service";


const Add = () => {

    const location = useLocation();
    const destination = location.pathname.substring(0, location.pathname.indexOf("/add"));
    const navigate = useNavigate();

    let initialValues = {};

    (destination === "/groups") ?
        initialValues = {
            name: "",
            groupNumber: ""
        } : initialValues = {
            name: "",
            lastName: "",
            idNumber: "",
            mail: "",
            birthDate: ""
        }

    const [record, setRecord] = useState(initialValues);

    const handleChange = (e) => {
        const value = e.target.value;
        setRecord({...record, [e.target.name]: value});
    }

    const Register = (e) => {
        e.preventDefault();
        Service
            .save(destination, record)
            .then((res) => {
                setRecord(initialValues );
                navigate(destination);
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
                            <div className="card-header fs-3 text-center">Add Record</div>
                            <div className="card-body">
                                <form onSubmit={(e) => Register(e)}>
                                    {Object.entries(record).map(([key, value]) => (
                                            <div className="mb-3" key={key}>
                                                <label>Enter {key}</label>
                                                <input
                                                    type="text"
                                                    name={key}
                                                    className="form-control"
                                                    onChange={(e) => handleChange(e)}
                                                    value={record.value}
                                                />
                                            </div>
                                        )
                                    )}
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