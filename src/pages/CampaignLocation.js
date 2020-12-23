import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import { IconWidget, NumberWidget } from 'components/Widget';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2';
import { randomNum } from 'utils/demos';
import {
  avatarsData,
  chartjs,
  productsData,
  supportTicketsData,
  todosData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React from 'react';

import {
  MdBubbleChart,
  MdInsertChart,
  MdPersonPin,
  MdPieChart,
  MdRateReview,
  MdShare,
  MdShowChart,
  MdThumbUp,
} from 'react-icons/md';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { getColor } from 'utils/colors';
import {ManageOrders} from '../components/Layout/ManageOrders';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);
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

class CampaignLocation extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
      className="DashboardPage"
      title="Campaign Locations"
      breadcrumbs={[{ name: 'Campaign Locations', active: true }]}
      >
        <div className='mapcontainer'>
        
            <Card inverse className="bg-gradient-primary">
              <CardHeader className="bg-gradient-primary">
                Active Campaigns
              </CardHeader>
              <CardBody>
                <MapWithBubbles />
              </CardBody>
            </Card>
            <Card inverse className="bg-gradient-primary">
            <CardHeader className="bg-gradient-primary">
              Map filter
            </CardHeader>
            <CardBody>

            </CardBody>
            </Card>
            <Card inverse className="bg-gradient-primary">
            <CardHeader className="bg-gradient-primary">
              Analytics
            </CardHeader>
            <Row>
            <Col xl={6} lg={12} md={12}>
            <CardBody>
            <Card>
            <CardHeader className='locationcharts'>Regional statistics</CardHeader>
            <CardBody>
              <Polar data={genPieData()} />
            </CardBody>
          </Card>
            </CardBody>
            </Col>
            <Col xl={6} lg={12} md={12}>
            <CardBody>
            <Card>
            <CardHeader className='locationcharts'>Impression demographics</CardHeader>
            <CardBody>
              <Doughnut data={genPieData()} />
            </CardBody>
          </Card>
            </CardBody>
            </Col>
            </Row>
            </Card>
            </div>
        
     
      </Page>
    );
  }
}

export default CampaignLocation;