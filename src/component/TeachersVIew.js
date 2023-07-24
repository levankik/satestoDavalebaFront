import Teachers from "./Teachers";
import {Stack} from "react-bootstrap";
import SearchForm from "./SearchForm";
import {useEffect, useState} from "react";
import teacherService from "../service/teacher.service";


function TeachersVIew () {
    const [teacherList, setTeacherList] = useState([]);

    useEffect(() => {
        search().catch(console.error);
    }, []);

    const search =  async (params) =>  {
        console.log(params);
        const res = await teacherService.getAllTeacher(params);
        console.log(res.data);
        setTeacherList(res.data);
    }

    return (
        <Stack gap={2}>
            <SearchForm onSearch={search}/>
            <Teachers data={teacherList} onSearch={search}/>
        </Stack>
    )
}



export default TeachersVIew;


