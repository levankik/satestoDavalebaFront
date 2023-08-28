import {useLocation, useNavigate} from "react-router-dom";

import Service from "../service/service";
import {useState} from "react";

const AddInGroup = () => {

    const location = useLocation();
    const destination = location.pathname.substring(0, location.pathname.indexOf("/add"));
    console.log(destination);
    const navigate = useNavigate();

    const title = destination.includes("teachers") ? "TEACHER" : "STUDENT";

    let assignmentValues = {
        id: ""
    }

    const [assignmentParams, setAssignmentParams] = useState(assignmentValues);

    const handleChange = (e) => {
        const value = e.target.value;
        setAssignmentParams({...assignmentParams, [e.target.name]: value});
    }

    const Register = (e) => {
        e.preventDefault();
        Service
            .assignToGroup(destination, assignmentParams.id)
            .then((res) => {
                setAssignmentParams(assignmentValues);
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
                            <div className="card-header fs-3 text-center">ADD {title} TO THE GROUP</div>
                            <div className="card-body">
                                <form onSubmit={(e) => Register(e)}>
                                    {Object.entries(assignmentParams).map(([key, value]) => (
                                            <div className="mb-3" key={key}>
                                                <label>Enter {key}</label>
                                                <input
                                                    type="text"
                                                    name={key}
                                                    className="form-control"
                                                    onChange={(e) => handleChange(e)}
                                                    value={assignmentParams.value}
                                                />
                                            </div>
                                        )
                                    )}
                                    <button className="btn btn-primary col-md-12">SUBMIT</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddInGroup;