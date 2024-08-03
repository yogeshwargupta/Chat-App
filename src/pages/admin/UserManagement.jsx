import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
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
    renderCell:(params)=>(<Avatar alt={params.row.name} src={params.row.avatar}/>)
  },
  {
    field: 'name',
    headerName: 'Name',
    headerClassName: 'table-header',
    width: 150,
  },
  {
    field: 'username',
    headerName: 'UserName',
    headerClassName: 'table-header',
    width: 150,
  },
  {
    field: 'friends',
    headerName: 'Friends',
    headerClassName: 'table-header',
    width: 150,
  },
  {
    field: 'groups',
    headerName: 'Groups',
    headerClassName: 'table-header',
    width: 150,
  },
];
function UserManagement() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(dashboardData.users.map((i) => ({...i, id: i._id, avatar: TransformImage(i.avatar, 50)})))
  },[])
  return (
    <AdminLayout>
      <Table heading={'All Users'} columns={columns} rows={rows}/>
    </AdminLayout>
  )
}

export default UserManagement
