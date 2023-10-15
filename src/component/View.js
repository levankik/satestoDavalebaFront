import Records from "./Records";
import {Stack} from "react-bootstrap";
import SearchForm from "./SearchForm";
import {useEffect, useState} from "react";
import Service from "../service/service";
import {useLocation} from "react-router-dom";
import Pagination from "./Pagination";

function View() {

    const [recordList, setRecordList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);

    const location = useLocation();
    const destination = location.pathname;

    useEffect(() => {
        search().catch(console.error);
    }, [destination]);

    const search = async (params) => {
        const res =
            await Service.getAll(destination, params);
        setRecordList(res.data);
    }

    const lastRecordIndex = currentPage * recordsPerPage;
    const firstRecordIndex = lastRecordIndex - recordsPerPage;
    const currentRecords = recordList.slice(firstRecordIndex, lastRecordIndex);

    const paginate = currentPage => setCurrentPage(currentPage);
    const nextPage = () => setCurrentPage(prev => prev + 1);
    const prevPage = () => setCurrentPage(prev => prev - 1);


    return (
        <Stack gap={2}>
            <SearchForm onSearch={search}/>
            <Records data={currentRecords} onSearch={search}/>
            <div className="container mt-3">
                <Pagination
                    recordsPerPage={recordsPerPage}
                    totalRecords={recordList.length}
                    paginate={paginate}
                />
                <button className="btn btn-primary" onClick={prevPage}>Prev Page</button>
                <button className="btn btn-primary ms-2" onClick={nextPage}>Next Page</button>
            </div>

        </Stack>
    )
}

export default View;