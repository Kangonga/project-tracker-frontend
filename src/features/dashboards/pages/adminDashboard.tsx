import { CardContainer } from '@app/features/dashboards/components/dashboardCard/cardContainer';
import DashboardCard from '@app/features/dashboards/components/dashboardCard/dashboardCard';
import { PageContainer } from '@app/layouts/pageContainer/pageContainer';
import Sidebar from '@app/layouts/sidebar/sidebar';
import Topbar from '@app/layouts/topbar/topbar';
import { BallotOutlined, BugReportOutlined, EngineeringOutlined, FeaturedPlayListOutlined } from '@mui/icons-material';
import { Divider } from '@mui/material';

export default function AdminDashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <PageContainer>
        <Topbar />
        <Divider />
        <CardContainer>
          <DashboardCard smallText="Projects" bigText="5" icon={<BallotOutlined />} />
          <DashboardCard smallText="Developers" bigText="3" icon={<EngineeringOutlined />} />
          <DashboardCard smallText="Issues" bigText="10" icon={<BugReportOutlined />} />
          <DashboardCard smallText="Features in progress" bigText="5" icon={<FeaturedPlayListOutlined />} />
        </CardContainer>
      </PageContainer>
    </div>
  );
}
