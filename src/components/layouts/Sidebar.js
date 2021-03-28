import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Sidebar = () => {
  return (
    <>
        <div className="menuSection">
          <div className="navigationLogo">
            <img src={logo} className="img-fluid" alt="img" />
          </div>
          <div className="navigation">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                <i className="fa fa-tachometer"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobcategories" activeClassName="active">
                <i className="fa fa-th"></i>
                <p>Job Categories</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" activeClassName="active">
                <i className="fa fa-th"></i>
                <p>Skills</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/companies" activeClassName="active">
                <i className="fa fa-film"></i>
                <p>Companies</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/joblocations" activeClassName="active">
                <i className="fa fa-map-marker"></i>
                <p>Job Locations</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobs" activeClassName="active">
                <i className="fa fa-id-badge"></i>
                <p>Jobs</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobapplications" activeClassName="active">
                <i className="fa fa-user"></i>
                <p>Job Applications</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/candidatedatabase" activeClassName="active">
                <i className="fa fa-bars"></i>
                <p>Candidate Database</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobonboard" activeClassName="active">
                <i className="fa fa-user"></i>
                <p>Job OnBoard</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/interviewschedule" activeClassName="active">
                <i className="fa fa-calendar"></i>
                <p>Interview Schedule</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" activeClassName="active">
                <i className="fa fa-users"></i>
                <p>Team</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/todos" activeClassName="active">
                <i className="fa fa-laptop"></i>
                <p>ToDos</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/report" activeClassName="active">
                <i className="fa fa-bar-chart"></i>
                <p>Report</p>
              </NavLink>
            </li>
            <li>
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <i className="fa fa-cog"></i>Settings
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <NavLink to="/myprofile" activeClassName="active">
                      <i className="fa fa-circle-o"></i>
                      <p> My Profile</p>
                    </NavLink>
                    <NavLink to="/businesssettings" activeClassName="active">
                      <i className="fa fa-circle-o"></i>
                      <p> Business Settings</p>
                    </NavLink>
                    <NavLink to="/applicationsettings" activeClassName="active">
                      <i className="fa fa-circle-o"></i>
                      <p> Application Settings</p>
                    </NavLink>
                    <NavLink to="/rolespermissions" activeClassName="active">
                      <i className="fa fa-circle-o"></i>
                      <p> Roles &amp; Permissions</p>
                    </NavLink>
                    <NavLink to="/languagesettings" activeClassName="active">
                      <i className="fa fa-circle-o"></i>
                      <p> Language Settings</p>
                    </NavLink>
                    <NavLink to="/footernavlinks" activeClassName="active">
                      <i className="fa fa-circle-o"></i>
                      <p> Footer NavLinks</p>
                    </NavLink>
                    <NavLink to="/themesettings" activeClassName="active">
                      <i className="fa fa-circle-o"></i>
                      <p> Theme Settings</p>
                    </NavLink>
                    <NavLink to="/emailsettings" activeClassName="active">
                      <i className="fa fa-circle-o"></i>
                      <p> Email Settings</p>
                    </NavLink>
                    <NavLink to="/smssettings" activeClassName="active">
                      <i className="fa fa-circle-o"></i>
                      <p> SMS Settings</p>
                    </NavLink>
                    <NavLink to="/navlinkedinsettings" activeClassName="active">
                      <i className="fa fa-circle-o"></i>
                      <p> Nav Linkedin Settings</p>
                    </NavLink>
                    <NavLink to="/updateapplication" activeClassName="active">
                      <i className="fa fa-circle-o"></i>
                      <p> Update Application</p>
                    </NavLink>
                    <NavLink to="/help" activeClassName="active">
                      <i className="fa fa-circle-o"></i>
                      <p> Help</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-heading">MISCELLANEOUS</li>
            <li>
              <NavLink to="/frontwebsite" activeClassName="active">
                <i className="fa fa-external-Navlink"></i>
                <p>Front Website</p>
              </NavLink>
            </li>
          </ul>
          </div>
        </div>
    </>
  );
}

export default Sidebar;
