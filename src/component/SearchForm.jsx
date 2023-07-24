import React from "react";
import { useState } from "react";
import {Button, Col, Form, Row} from "react-bootstrap";


function SearchForm  ({onSearch})  {

    const initialValues = {
        name: "",
        lastName: "",
        idNumber: "",
        birthDate: ""
    }

    const [values, setValues] = useState(initialValues);
    const reset = () => {setValues(initialValues)}

    const search = async (event) => {
        event.preventDefault();
        const params = removeEmptyValues(values);
        if (typeof onSearch === 'function') {
            try {
                await onSearch(params);
            } catch (e) {
                console.error(e);
            }
        }
    };

    const removeEmptyValues = (values) => {
        return Object.entries(values).reduce((params, [key, value]) => {
            return value ? {...params, [key]: value} : params;
        }, {});
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

        return (
            <div className="container mt-3">
            <Form onSubmit={search} onReset={reset}>
                <Row>
                    <Col lg={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                placeholder="Enter name"
                                value={values.name}
                                name="name"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg={3}>
                        <Form.Label>LastName</Form.Label>
                        <Form.Control
                            placeholder="Enter lastname"
                            value={values.lastName}
                            name="lastName"
                            onChange={handleChange}
                        />
                    </Col>

                    <Col lg={3}>
                        <Form.Label>IdNumber</Form.Label>
                        <Form.Control
                            placeholder="Enter IdNumber"
                            value={values.idNumber}
                            name="idNumber"
                            onChange={handleChange}
                        />
                    </Col>

                    <Col lg={3}>
                        <Form.Label>BirthDate</Form.Label>
                        <Form.Control
                            placeholder="Enter birthdate"
                            value={values.birthDate}
                            name="birthDate"
                            onChange={handleChange}
                        />
                    </Col>
                </Row>

                <div className="d-flex bg-ingo justify-content-end">
                    <Button variant="secondary" type="reset" className="me-2"> Reset </Button>
                    <Button variant="primary" type="submit"> Search </Button>
                </div>
            </Form>
            </div>
        )
}

export default SearchForm;