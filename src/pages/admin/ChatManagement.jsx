import { Avatar, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import AvatarCard from "../../components/shared/AvatarCard";
import Table from '../../components/shared/Table';
import { dashboardData } from '../../constants/sampleData';
import { TransformImage } from '../../lib/featues';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    headerClassName: 'table-header',
    width: 150,
  },
  {
    field: 'avatar',
    headerName: 'Avatar',
    headerClassName: 'table-header',
    width: 150,
    renderCell:(params)=>(<AvatarCard avatar={params.row.avatar}/>)
  },
  {
    field: 'name',
    headerName: 'Name',
    headerClassName: 'table-header',
    width: 200,
  },
  {
    field: 'totalMembers',
    headerName: 'Total Members',
    headerClassName: 'table-header',
    width: 200,
  },
  {
    field: 'members',
    headerName: 'Members',
    headerClassName: 'table-header',
    width: 400,
    renderCell: (params) => <AvatarCard max={100} avatar={params.row.members}/>
  },
  {
    field: 'totalMessages',
    headerName: 'Total Messages',
    headerClassName: 'table-header',
    width: 200,
  },
  {
    field: 'creator',
    headerName: 'Created By',
    headerClassName: 'table-header',
    width: 250,
    renderCell: (params) => (
      <Stack direction="row" alignItems="center" spacing={'1rem'}>
        <Avatar alt={params.row.creator.name} src={params.row.creator.avatar}/>
        <span>{params.row.creator.name}</span>
      </Stack>
    )
  },
];
function ChatManagement() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(dashboardData.chats.map((chat) => ({
      ...chat, 
      id: chat._id, 
      avatar: Array.isArray(chat.avatar) ? chat.avatar.map((av) => TransformImage(av, 50)) : [],
      members: Array.isArray(chat.members) ? chat.members.map((member) => TransformImage(member.avatar)) : []
    })))
  }, [dashboardData.chats])


  return (
    <AdminLayout>
      <Table heading={'All Chats'} columns={columns} rows={rows}/>
    </AdminLayout>
  )
}


export default ChatManagement
