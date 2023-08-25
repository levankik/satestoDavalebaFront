import Records from "./Records";
import {Stack} from "react-bootstrap";
import SearchForm from "./SearchForm";
import {useEffect, useState} from "react";
import Service from "../service/service";
import {useLocation} from "react-router-dom";

function View() {

    const [recordList, setRecordList] = useState([]);

    const location = useLocation();
    const destination = location.pathname;

    useEffect(() => {
        search().catch(console.error);
    }, [destination]);

    const search = async (params) => {
        const res =
            await Service.getAll(destination, params);
        setRecordList(res.data.content);
    }

    return (
        <Stack gap={2}>
            <SearchForm onSearch={search}/>
            <Records data={recordList} onSearch={search}/>
        </Stack>
    )
}

export default View;