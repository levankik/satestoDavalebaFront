import './App.css';
import Navbar from "./component/Navbar";
import {Routes, Route} from "react-router-dom";
import Add from "./component/Add";
import Edit from "./component/Edit";
import SearchForm from "./component/SearchForm";
import View from "./component/View";


function App() {
  return (
      <>
          <Navbar/>
          <Routes>
             <Route path='/teachers' element={<View/>}></Route>
             <Route path='/students' element={<View/>}></Route>
             <Route path='/groups' element={<View/>}></Route>
             <Route path='/teachers/add' element={<Add/>}></Route>
             <Route path='/students/add' element={<Add/>}></Route>
             <Route path='/groups/add' element={<Add/>}></Route>
             <Route path='/teachers/edit/:id' element={<Edit/>}> </Route>
             <Route path='/students/edit/:id' element={<Edit/>}> </Route>
             <Route path='/groups/edit/:id' element={<Edit/>}> </Route>
             <Route path='/teachers/search' element={<SearchForm/>}> </Route>
          </Routes>
      </>
  );
}

export default App;
