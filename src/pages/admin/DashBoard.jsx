import { AdminPanelSettings as AdminPanelSettingsIcon, Group as GroupIcon, Message, Notifications, Person as PersonIcon } from '@mui/icons-material';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { CurveButton, SearchField } from '../../components/Styles/StyledComponents';
import { bgGradient } from '../../constants/color';
import { DoughnutChart, LineChart } from '../../components/specific/Chart';

function DashBoard() {
  const Appbar = (
    <Paper elevation={4} sx={{ padding: '2rem', margin: '2rem 0', borderRadius: '1rem' }}>
      <Stack direction={'row'} alignItems={'center'} spacing={'1rem'}>
        <AdminPanelSettingsIcon sx={{ fontSize: '3rem' }} />
        <SearchField placeholder='Search...' />
        <CurveButton>Search</CurveButton>
        <Box flexGrow={1} />
        <Typography display={{ xs: 'none', lg: 'block' }} color={'rgba(0,0,0,0.7)'} textAlign={'center'}>
          {moment().format('dddd, D MMMM YYYY')}
        </Typography>
        <Notifications />
      </Stack>
    </Paper>
  );

  const Widgets = (
    <Stack
      direction={{
        xs: 'column',
        sm: 'row',
      }}
      spacing={'2rem'}
      justifyContent={'space-between'}
      alignItems={'center'}
      margin={'2rem 0'}
    >
      <Widget title={'Users'} value={33} Icon={<PersonIcon />} />
      <Widget title={'Chats'} value={34} Icon={<GroupIcon />} />
      <Widget title={'Messages'} value={35} Icon={<Message />} />
    </Stack>
  );

  return (
    <div>
      <AdminLayout>
        <Container component={'main'}>
          {Appbar}

          <Stack direction={{
            xs: 'column', lg: 'row'
          }}flexWrap={'wrap'} justifyContent={'center'} alignItems={{
            xs: 'center',
            lg: 'stretch'
          }}
          sx={{gap: '2rem'}} >
            <Paper
              elevation={4}
              sx={{
                padding: '2rem 3.5rem',
                borderRadius: '1rem', // corrected from "boarderRadius"
                width: '100%',
                maxWidth: '40rem',
              }}
            >
              <Typography>Last Messages</Typography>
              <LineChart value={[1,2,21,3,4,9,0,11,7]}/>
            </Paper>

            <Paper
              elevation={4}
              sx={{
                padding: '1rem',
                borderRadius: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '100%', sm: '50%' },
                position: 'relative',
                maxWidth: '24rem',
              }}
            >
              <DoughnutChart labels={['Single Chats', 'Group Chats']} value={[23,66]}/>
              <Stack position={'absolute'} direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={'0.5rem'} width={'100%'} height={'100%'}>
                <GroupIcon />
                <Typography>Vs</Typography>
                <PersonIcon />
              </Stack>
            </Paper>
          </Stack>

          {Widgets}
        </Container>
      </AdminLayout>
    </div>
  );
}

const Widget = ({ title, value, Icon }) => (
  <Paper elevation={4}
    sx={{
      padding: '2rem',
      margin: '2rem 0',
      borderRadius: '1.2rem',
      width: '20rem',
    }}
  >
    <Stack alignItems={'center'} spacing={'1rem'}>
      <Typography
        sx={{
          color: 'rgba(0,0,0,0.7)',
          borderRadius: '50%',
          border: `5px solid rgba(0,0,0,0.9)`,
          width: '5rem',
          height: '5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {value}
      </Typography>
      <Stack direction={'row'} spacing={'1rem'} alignItems={'center'}>
        {Icon}
        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
);

export default DashBoard;
