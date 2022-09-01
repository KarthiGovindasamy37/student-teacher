import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Portal from './Portal';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login';
import Students from './Students';
import AddStudent from './AddStudent';
import ViewStudent from './ViewStudent';
import EditStudent from './EditStudent';
import Teacher1 from './Teacher1';
import { Provider } from './Context';
import Teacher2 from './Teacher2';

function App() {
  return (
<BrowserRouter>
<Provider>
<Routes>
<Route path="/" element={<Login/>} />
<Route path="/portal" element={<Portal/>}>
<Route path="students" element={<Students/>}/>
<Route path="add-student" element={<AddStudent/>}/>
<Route path="view-student/:id" element={<ViewStudent/>}/>
<Route path="edit-student/:id" element={<EditStudent/>}/>
<Route path="teacher1" element={<Teacher1/>}/>
<Route path="teacher2" element={<Teacher2/>}/>
</Route>

</Routes>
</Provider>

</BrowserRouter>  );
}

export default App;
