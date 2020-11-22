import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//components
import HomePage from "./home";
import RegisterStudent from "./register/registerStudent";
import RegisterInstitute from "./register/registerInstitute";
import Recording from "./recording";
import JitsiPage from "./jitsi";
import Header from "./Header";
import Dashboard from "./dashboard";
import Classes from "./class";
import Note from "./notes";
import Recordings from "./recordings";

//main app starts
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Header />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/class/:classid" exact component={Classes} />
        <Route path="/note/:noteid" exact component={Note} />
        <Route path="/recordings/:recordid" exact component={Recordings} />
        <Route path="/register/institute" exact component={RegisterInstitute} />
        <Route path="/register/student" exact component={RegisterStudent} />
        <Route path="/recording" exact component={Recording} />
        <Route path="/jitsi" exact component={JitsiPage} />
      </BrowserRouter>
    </>
  );
};

export default App;
