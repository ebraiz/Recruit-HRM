import React from "react";
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
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
import MyProfile from './components/pages/MyProfile';
import BusinessSettings from './components/pages/BusinessSettings';
import ApplicationSettings from './components/pages/ApplicationSettings';
import RolesPermissions from './components/pages/RolesPermissions';
import LanguageSettings from './components/pages/LanguageSettings';
import FooterNavLinks from './components/pages/FooterNavLinks';
import ThemeSettings from './components/pages/ThemeSettings';
import EmailSettings from './components/pages/EmailSettings';
import SMSSettings from './components/pages/SMSSettings';
import NavLinkedinSettings from './components/pages/NavLinkedinSettings';
import UpdateApplication from './components/pages/UpdateApplication';
import Help from './components/pages/Help';
import FrontWebsite from './components/pages/FrontWebsite';

const App = () => {
  return (
    <>
      <div className="mainContainer">
        <Header />
        <Sidebar />

        <div className="mainSection">
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
            <Route path="/myprofile" component={MyProfile} />
            <Route path="/businesssettings" component={BusinessSettings} />
            <Route path="/applicationsettings" component={ApplicationSettings} />
            <Route path="/rolespermissions" component={RolesPermissions} />
            <Route path="/languagesettings" component={LanguageSettings} />
            <Route path="/footernavlinks" component={FooterNavLinks} />
            <Route path="/themesettings" component={ThemeSettings} />
            <Route path="/emailsettings" component={EmailSettings} />
            <Route path="/smssettings" component={SMSSettings} />
            <Route path="/navlinkedinsettings" component={NavLinkedinSettings} />
            <Route path="/updateapplication" component={UpdateApplication} />
            <Route path="/help" component={Help} />
            <Route path="/frontwebsite" component={FrontWebsite} />
            <Redirect to="/" />
          </Switch>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
