import React, {useEffect} from "react";
import {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import Service from "../service/service";

function SearchForm({onSearch}) {

    const location = useLocation();
    const destination = location.pathname;

    let initialValues = {};

    (destination != "/groups") ?
        initialValues = {
            name: "",
            lastName: "",
            idNumber: "",
            birthDate: ""
        } : initialValues = {
            name: "",
            groupNumber: ""
        }

    const [values, setValues] = useState({});

    useEffect(() => {
        setValues(initialValues);
    }, [destination]);

    const reset = () => {
        setValues(initialValues)
    }

    const searcher = async (event) => {
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

    return (
        <div className="container mt-3">
            <Form onSubmit={searcher} onReset={reset}>
                <Row>
                    {Object.entries(values).slice(0, values.length).map(([key, value]) => (
                            <Col lg={3} key={key}>
                                <Form.Group className="mb-3">
                                    <Form.Label>{key}</Form.Label>
                                    <Form.Control
                                        placeholder={key}
                                        type="text"
                                        name={key}
                                        className="form-control"
                                        onChange={(e) =>
                                            Service.handleChange(e, setValues, values)}
                                        value={values.value}
                                    />
                                </Form.Group>
                            </Col>
                        )
                    )}
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