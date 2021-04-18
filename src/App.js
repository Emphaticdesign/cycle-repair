import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';
import Book from './Components/Booking/Book/Book';
import Services from './Components/Home/Services/Services';
import Login from './Components/Home/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Home/PrivateRoute/PrivateRoute';
import Review from './Components/Booking/Review/Review';
import Admin from './Components/Booking/Admin/Admin';
import ServiceManager from './Components/Booking/ServiceManager/ServiceManager';
import AddService from './Components/Booking/AddService/AddService';
import YourOrder from './Components/Booking/YourOrder/YourOrder';
import AllOrderService from './Components/Booking/AllOrderService/AllOrderService';
import Testimonials from './Components/Home/Testimonials/Testimonials';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h3>Name: {loggedInUser.name}</h3>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="home">
            <Home></Home>
          </Route>
          <Route path="/testimonials">
            <Testimonials></Testimonials>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/book/:title">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/serviceManager">
            <ServiceManager></ServiceManager>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/yourOrder">
            <YourOrder></YourOrder>
          </PrivateRoute>
          <PrivateRoute path="/allOrderService">
            <AllOrderService></AllOrderService>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
