import React from 'react';

import { getColor } from 'utils/colors';
import { randomNum } from 'utils/demos';

import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2';

import Page from 'components/Page';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const genLineData = (moreData = {}, moreData2 = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'Campaign 1',
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
        label: 'Campaign 2',
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
const genLineData2 = (moreData = {}, moreData2 = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'Campaign 1',
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
        label: 'Projections',
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
        data: [randomNum(), randomNum(), randomNum()],
        backgroundColor: [
          getColor('primary'),
          getColor('secondary'),
          getColor('gray')
         
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['Data 1', 'Data 2', 'Data 3'],
  };
};

const OptimizationPage = () => {
  return (
    <Page title="Optimization" breadcrumbs={[{ name: 'Product Optimization', active: true }]}>
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
      </Row> */}

      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>CPM Comparison</CardHeader>
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
                          labelString: 'impressions',
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
            <CardHeader>Campaign Projections</CardHeader>
            <CardBody>
              <Bar data={genLineData2({ type: 'line', fill: false })} />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Optimization Suggestions</CardHeader>
            <CardBody>
              <p className='sugopt'>There are currently no optimization options.</p>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* <Row>
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

export default OptimizationPage;
