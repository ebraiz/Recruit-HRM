import React from "react";
import { Doughnut, Bar, Pie, Line } from 'react-chartjs-2';

const stateBar = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const stateLine = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const MainContent = (props) => {
  return (
    <>
        <div className="mainSection">
            <div className="contentHeader">
              <h3>{props.heading}</h3>
            </div>  
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="dashboardGraph">
                  <h3>This is Bar Chart</h3>
                  <Bar
                    data={stateBar}
                    options={{
                      title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                      },
                      legend:{
                        display:true,
                        position:'right'
                      }
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="dashboardGraph">
                <h3>This is Line Chart</h3>
                <Line
                  data={stateLine}
                  options={{
                    title:{
                      display:true,
                      text:'Average Rainfall per month',
                      fontSize:20
                    },
                    legend:{
                      display:true,
                      position:'right'
                    }
                  }}
                />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="dashboardGraph">
                <h3>This is Pie Chart</h3>
                  <Pie
                    data={state}
                    options={{
                      title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                      },
                      legend:{
                        display:true,
                        position:'right'
                      }
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="dashboardGraph">
                <h3>This is Doughnut Chart</h3>
                  <Doughnut
                    data={state}
                    options={{
                      title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                      },
                      legend:{
                        display:true,
                        position:'right'
                      }
                    }}
                  />
                </div>
              </div>
            </div>
        </div> 
    </>
  );
}

export default MainContent;
