import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portal from './Portal';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Students from './Students';
import AddStudent from './AddStudent';
import ViewStudent from './ViewStudent';
import EditStudent from './EditStudent';
import Teachers from './Teachers';
import AddTeacher from './AddTeacher';
import ViewTeacher from './ViewTeacher';
import EditTeacher from './EditTeacher';


function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Portal/>}>
<Route index element={<Students/>}/>
<Route path="add-student" element={<AddStudent/>}/>
<Route path="view-student/:id" element={<ViewStudent/>}/>
<Route path="edit-student/:id" element={<EditStudent/>}/>
<Route path="teachers" element={<Teachers/>}/>
<Route path="add-teacher" element={<AddTeacher/>}/>
<Route path="view-teacher/:id" element={<ViewTeacher/>}/>
<Route path="edit-teacher/:id" element={<EditTeacher/>}/>
</Route>

</Routes>
</BrowserRouter>  );
}

export default App;
