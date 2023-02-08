import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Edit from "./components/action/Edit";
import View from "./components/action/View";
import AddStudent from "./components/add";
import Login from "./components/auth/Login";
import Student from "./components/dashboard/Student";
import SideNavbar from "./components/sidenav";
import TopNavbar from "./components/topnav";

const PrivateRoute = ({user})=>{
  if(user){
    return <Outlet />
  }
  else return <Navigate to="/login"/>
}

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="App">
      <TopNavbar />
      <div  className="flex">
        <div className="left"><SideNavbar /></div>
        <div className="right">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute user={user} />} >
            <Route path="/" element={<Student />} />
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/view/:id" element={<View />} />
            <Route path="/edit/:id" element={<Edit />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
