import React from 'react';

import { getColor } from 'utils/colors';
import { randomNum } from 'utils/demos';

import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { NumberWidget, IconWidget } from 'components/Widget';
import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2';

import Page from 'components/Page';
import SmallNumberW from '../components/Widget/SmallNumberW';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const genLineData = (moreData = {}, moreData2 = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: getColor('primary'),
        borderColor: getColor('primary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData,
      },
      {
        label: 'Dataset 2',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData2,
      },
    ],
  };
};

const genPieData = () => {
  return {
    datasets: [
      {
        data: [randomNum(), randomNum(), randomNum(), randomNum(), randomNum()],
        backgroundColor: [
          getColor('primary'),
          getColor('secondary'),
          getColor('success'),
          getColor('info'),
          getColor('danger'),
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
  };
};

const ChartPage = () => {
  return (
    <Page title="Team Operations" breadcrumbs={[{ name: 'Team Operations', active: true }]}>
       <Row>
        
        <Col key={1} lg={4} md={6} sm={6} xs={12} className="mb-3">
          <NumberWidget
            title="Completed projects"
            subtitle="Operations finished"
            number="5"
            color={"success"}
            progress={{
              value: 50,
              label: 'current month',
            }}
          />
        </Col>
        <Col key={2} lg={4} md={6} sm={6} xs={12} className="mb-3">
          <NumberWidget
            title="Tasks in progress"
            subtitle="Current Operations"
            number="3"
            color={"warning"}
            progress={{
              value: 30,
              label: 'current month',
            }}
          />
        </Col>
        <Col key={3} lg={4} md={6} sm={6} xs={12} className="mb-3">
          <NumberWidget
            title="Tasks not started"
            subtitle="Operations yet to begin"
            number="2"
            color={"danger"}
            progress={{
              value: 20,
              label: 'current month',
            }}
          />
        </Col>
     
    </Row>
    <div className='taskinfo'>
      <div className='tasknum'>
      <h2>Project #:</h2>
      <p>Project 1</p>
      <p>Project 2</p>
      <p>Project 3</p>
      <p>Project 4</p>
      <p>Project 5</p>
      <p>Project 6</p>
      <p>Project 7</p>
      <p>project 8</p>
      <p>Project 9</p>
      <p>Project 10</p>
      </div>
      <div className='Assignedtask'>
        <h2>Assigned to:</h2>
        <p>Name Here</p>
        <p>Name Here</p>
        <p>Name Here</p>
        <p>Name Here</p>
        <p>Name Here</p>
        <p>Name Here</p>
        <p>Name Here</p>
        <p>Name Here</p>
        <p>Name Here</p>
        <p>Name Here</p>
      </div>
      <div className='priority'>
        <h2>Priority:</h2>
        <div className='pri-sub'>
        <p>High</p>
        <span style={{color:'red'}}>♦</span>
        </div>
        <div className='pri-sub'>
        <p>High</p>
        <span style={{color:'red'}}>♦</span>
        </div>
        <div className='pri-sub'>
        <p>High</p>
        <span style={{color:'red'}}>♦</span>
        </div>
        <div className='pri-sub'>
        <p>Normal</p>
        <span style={{color:'#ffd700'}}>♦</span>
        </div>
        <div className='pri-sub'>
        <p>Normal</p>
        <span style={{color:'#ffd700'}}>♦</span>
        </div>
        <div className='pri-sub'>
        <p>Normal</p>
        <span style={{color:'#ffd700'}}>♦</span>
        </div>
        <div className='pri-sub'>
        <p>Normal</p>
        <span style={{color:'#ffd700'}}>♦</span>
        </div>
        <div className='pri-sub'>
        <p>Normal</p>
        <span style={{color:'#ffd700'}}>♦</span>
        </div>
        <div className='pri-sub'>
        <p>Low</p>
        <span style={{color:'green'}}>♦</span>
        </div>
        <div className='pri-sub'>
        <p>Low</p>
        <span style={{color:'green'}}>♦</span>
        </div>
      </div>
      <div className='Status'>
        <h2>Status:</h2>
        <div className='pri-sub'>
        <p>Completed</p>
        <span style={{color:'green'}}>○</span>
        </div>
        <div className='pri-sub'>
        <p>Completed</p>
        <span style={{color:'green'}}>○</span>
        </div>
        <div className='pri-sub'>
        <p>Completed</p>
        <span style={{color:'green'}}>○</span>
        </div>
        <div className='pri-sub'>
        <p>Completed</p>
        <span style={{color:'green'}}>○</span>
        </div>
        <div className='pri-sub'>
        <p>Completed</p>
        <span style={{color:'green'}}>○</span>
        </div>
        <div className='pri-sub'>
        <p>In progress</p>
        <span style={{color:'#ffd700'}}>○</span>
        </div>
        <div className='pri-sub'>
        <p>In progress</p>
        <span style={{color:'#ffd700'}}>○</span>
        </div>
        <div className='pri-sub'>
        <p>In progress</p>
        <span style={{color:'#ffd700'}}>○</span>
        </div>
        <div className='pri-sub'>
        <p>Not Started</p>
        <span style={{color:'red'}}>○</span>
        </div>
        <div className='pri-sub'>
        <p>Not Started</p>
        <span style={{color:'red'}}>○</span>
        </div>
      </div>
      <div className='completedgauge'>
        <h2>Complete:</h2>
        <SmallNumberW  color={'success'} progress={{
          value: 100,
          label:'progress'
        }}/>
        <SmallNumberW  color={'success'} progress={{
          value: 100,
          label:'progress'
        }}/>
        <SmallNumberW  color={'success'} progress={{
          value: 100,
          label:'progress'
        }}/>
        <SmallNumberW  color={'success'} progress={{
          value: 100,
          label:'progress'
        }}/>
        <SmallNumberW  color={'success'} progress={{
          value: 100,
          label:'progress'
        }}/>
        <SmallNumberW  color={'warning'} progress={{
          value: 50,
          label:'progress'
        }}/>
        <SmallNumberW  color={'warning'} progress={{
          value: 30,
          label:'progress'
        }}/>
        <SmallNumberW  color={'warning'} progress={{
          value: 35,
          label:'progress'
        }}/>
        <SmallNumberW  color={'danger'} progress={{
          value: 1,
          label:'progress'
        }}/>
        <SmallNumberW  color={'danger'} progress={{
          value: 1,
          label:'progress'
        }}/>
         
        
      </div>
     
    </div> 
    <button className='createaudio'>Create Audio</button>
      {/* <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Bar</CardHeader>
            <CardBody>
              <Bar data={genLineData()} />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Line</CardHeader>
            <CardBody>
              <Line data={genLineData({ fill: false }, { fill: false })} />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={11} lg={} md={10}>
          <Card>
            <CardHeader>Stacked Line</CardHeader>
            <CardBody>
              <Line
                data={genLineData()}
                options={{
                  scales: {
                    xAxes: [
                      {
                        scaleLabel: {
                          display: true,
                          labelString: 'Month',
                        },
                      },
                    ],
                    yAxes: [
                      {
                        stacked: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'Value',
                        },
                      },
                    ],
                  },
                }}
              />
            </CardBody>
          </Card>
        </Col>

        
      </Row>

      <Row>
      <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Combo Bar / Line</CardHeader>
            <CardBody>
              <Bar data={genLineData({ type: 'line', fill: false })} />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Doughnut</CardHeader>
            <CardBody>
              <Doughnut data={genPieData()} />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Polar</CardHeader>
            <CardBody>
              <Polar data={genPieData()} />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Radar</CardHeader>
            <CardBody>
              <Radar data={genLineData()} />
            </CardBody>
          </Card>
        </Col>
      </Row> */}
    </Page>
  );
};

export default ChartPage;
