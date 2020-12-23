import React from 'react';


import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Page from 'components/Page';
import { NumberWidget, IconWidget } from 'components/Widget';

import { iconWidgetsData, numberWidgetsData } from 'demos/widgetPage';

const WidgetPage = () => {
  return (
    <Page
      className="WidgetPage"
      title="Delivered Orders"
      breadcrumbs={[{ name: 'Orders', active: true }]}
    >
     
     <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>Deliveries</CardHeader>
            <CardBody>
              <p className='sugopt'>There are currently no deliveries available.</p>
            </CardBody>
          </Card>
        </Col>
      {/* <Row>
        {iconWidgetsData.map(
          ({ bgColor, icon, title, subtitle, ...restProps }, index) => (
            <Col key={index} lg={4} md={6} sm={6} xs={12} className="mb-3">
              <IconWidget
                bgColor={bgColor}
                icon={icon}
                title={title}
                subtitle={subtitle}
                {...restProps}
              />
            </Col>
          )
        )}
      </Row> */}
    </Page>
  );
};

export default WidgetPage;
