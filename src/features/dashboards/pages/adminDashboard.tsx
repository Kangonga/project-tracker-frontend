import { PageContainer } from '@app/layouts/pageContainer/pageContainer';
import Sidebar from '@app/layouts/sidebar/sidebar';
import Topbar from '@app/layouts/topbar/topbar';
import { Divider } from '@mui/material';

export default function AdminDashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <PageContainer>
        <Topbar />
        <Divider />
      </PageContainer>
    </div>
  );
}
