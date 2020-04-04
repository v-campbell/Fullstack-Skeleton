import React from "react";
import NavContainer from './nav/nav_container';
import Modal from "./modal/modal";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <h1>New App</h1>
      <NavContainer />
      <Modal />
    </header>
  </div>
);

export default App;
