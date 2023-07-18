import { StyledBadge } from '@app/layouts/sidebar/components/sidebarContainer';
import { PersonalDetails } from '@app/layouts/topbar/components/personalDetails';
import { Searchbar } from '@app/layouts/topbar/components/searchbar';
import { TopbarContainer } from '@app/layouts/topbar/components/topbarContainer';
import { Avatar, Typography } from '@mui/material';

export default function Topbar() {
  return (
    <TopbarContainer>
      <Typography fontSize="1.6rem">Dashboard</Typography>
      <Searchbar placeholder="Search any project..."></Searchbar>
      <PersonalDetails>
        <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
          <Avatar alt="user" />
        </StyledBadge>
        <div className="names">
          <span className="name">John Doe</span>
          <span className="email">j@mail.com</span>
        </div>
      </PersonalDetails>
    </TopbarContainer>
  );
}
