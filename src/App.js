import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import {Routes, Route} from "react-router-dom";
import Teachers from "./component/Teachers";
import Add from "./component/Add";
import Edit from "./component/Edit";
import SearchForm from "./component/SearchForm";
import TeachersVIew from "./component/TeachersVIew";

function App() {
  return (
      <>
          <Navbar/>
          <Routes>
             <Route path='/' element={<TeachersVIew/>}></Route>
             <Route path='/addTeacher' element={<Add/>}></Route>
             <Route path='/editTeacher/:id' element={<Edit/>}> </Route>
             <Route path='/searchTeacher' element={<SearchForm/>}> </Route>
          </Routes>
      </>
  );
}

export default App;
