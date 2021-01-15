import logo from "./logo.svg";
import "./App.css";
import Agendaapp from "./Component/Agendaapp";
import Login from "./Component/Login";
import Dashbord from "./Component/Dashbord";
import "./index.css";

import { BrowserRouter as Router,HashRouter, Route,NavLink,Redirect } from "react-router-dom";


function App(props) {
  return (
    <div>
      <Router>
           <Route exact strict component={Dashbord} path={'/Dashbord'} history={props.history} />

           <Route exact strict component={Login} path={'/Login'} history={props.history} />
      </Router>
    </div>
  );
}

export default App;
