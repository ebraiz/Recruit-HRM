import React from "react";
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
import MainContent from './components/layouts/MainContent';
import Footer from './components/layouts/Footer';
import Dashboard from './components/pages/Dashboard';
import JobCategories from './components/pages/JobCategories';
import CandidateDatabase from './components/pages/CandidateDatabase';
import Companies from './components/pages/Companies';
import InterviewSchedule from './components/pages/InterviewSchedule';
import JobApplications from './components/pages/JobApplications';
import JobLocations from './components/pages/JobLocations';
import JobOnBoard from './components/pages/JobOnBoard';
import Jobs from './components/pages/Jobs';
import Report from './components/pages/Report';
import Skills from './components/pages/Skills';
import Team from './components/pages/Team';
import Todos from './components/pages/Todos';

const App = () => {
  return (
    <>
      <div className="mainContainer">
        <Header />
        <Sidebar />
        <MainContent />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/candidatedatabase" component={CandidateDatabase} />
          <Route path="/companies" component={Companies} />
          <Route path="/interviewschedule" component={InterviewSchedule} />
          <Route path="/jobapplications" component={JobApplications} />
          <Route path="/jobcategories" component={JobCategories} />
          <Route path="/joblocations" component={JobLocations} />
          <Route path="/jobonboard" component={JobOnBoard} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/report" component={Report} />
          <Route path="/skills" component={Skills} />
          <Route path="/team" component={Team} />
          <Route path="/todos" component={Todos} />
          <Redirect to="/" />
        </Switch>
 
        <Footer />
      </div>
    </>
  );
}

export default App;
