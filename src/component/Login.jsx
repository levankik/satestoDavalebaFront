import React from "react";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Service from "../service/service";

const Login = () => {

    const location = useLocation().pathname;
    const navigate = useNavigate();

    let initialValues = {
        email: "",
        password: ""
    };

    const [record, setRecord] = useState(initialValues);
    const [error, setError] = useState("");

    const Login = (e) => {
        e.preventDefault();
        Service
            .login(location, record)
            .then((res) => {
                setRecord(initialValues );
                navigate('/');
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
                            <div className="card-header fs-3 text-center text-danger"><h5>{error}</h5></div>
                            <div className="card-header fs-3 text-center">Login</div>
                            <div className="card-body">
                                <form onSubmit={(e) =>
                                    error === "" ? Login(e) : setError("")}>
                                    {Object.entries(record).map(([key, value]) => (
                                            <div className="mb-3" key={key}>
                                                <label>Enter {key}</label>
                                                <input
                                                    type = "text"
                                                    name={key}
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        Service.handleError(e, error, setError);
                                                        Service.handleChange(e, setRecord, record)
                                                    }}
                                                    value={record.value}
                                                />
                                            </div>
                                        )
                                    )}
                                    <button className="btn btn-primary col-md-12">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;