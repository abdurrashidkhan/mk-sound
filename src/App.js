
import './App.css';
import { Routes, Route } from "react-router-dom";
import DashBoard from './components/DashBoard/DashBoard';
import Overview from './components/DashBoard/Overview/Overview';
// import RequireAuth from './components/Auth/RequireAuth';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/CreateAccout/NewAccount';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<DashBoard />} >
          <Route index element={
            <Overview></Overview>
          }></Route>
          {/* <Route path='add-news' element={
            <AddNews></AddNews>
          }></Route> */}
          {/* <Route path='manage-news' element={
            <ManageNews></ManageNews>
          }></Route> */}

        </Route>
        <Route path='/login' element={
          <Login></Login>
        }></Route>
        <Route path='/signup' element={
          <SignUp></SignUp>
        }></Route>
      </Routes>
    </>
  );
}

export default App;
// <RequireAuth><Update></Update></RequireAuth>
// git push -u origin main