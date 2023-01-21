import React from 'react'
import { Flex } from '@chakra-ui/react';
import {DataGrid,GridToolbar} from '@mui/x-data-grid'
import { Box } from '@mui/system';
import './UserOverview.css'
import { userDataDummy } from './../../data/userDataDummy';
import { useMemo } from 'react';
import { Button,Stack,Typography  } from '@mui/material';
import {MdDelete} from 'react-icons/md'
import {HiOutlinePlusSm} from 'react-icons/hi'


const UserOverview = () => {
  const yellow='yellow'
  const rows = useMemo(
    () => userDataDummy.map((row, index) => ({ ...row, id: row._id })),
    [userDataDummy]
  );
  const columns = useMemo(()=>[
  { 
    field: "_id",
    headerName: "ID",

    flex:1,
  },
  {
    field: "first_name",
    headerName: "Name",

    flex:1,
  },
  {
    field: "email",
    headerName: "Email",

    flex:1,
  },
  {
    field: "timestamp",
    headerName: "Last Login",

    flex:1,
  },
  {
    field: "phone",
    headerName: "Phone Number",

    flex:1,
  },
  {
    field: "gender",
    headerName: "",

    flex:1,
    renderCell: ({ row }) =>
      <Button size="small" variant="contained" onClick={() => console.log(row)} startIcon={<MdDelete />} color="error" sx={{borderRadius: 8}}>
        Delete
      </Button>,
  },],[])
  return (
    <>
    <Box  m="20px">
    <Stack direction="row" justifyContent='space-between'>
      <Stack>
      <Typography fontWeight='bold' color='white' variant='h4'>User Overview</Typography>
      <Typography my='5px' mt='5px' color='#7D7D7D' variant='h6' sx={{fontSize:'0.8rem'}}>This data is directly fetching from database perform cautiously</Typography>
      </Stack>
      <div style={{display:'flex',alignItems:'center'}}>
      </div>
    </Stack>
    <Box
        m="30px 0 0 0"
        // height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            color:'white'
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: '#3d4a70',
            borderBottom: "none",
            color:'white'
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: '#343842',
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: '#3d4a70',
            color:'white'
          },
          "& .MuiCheckbox-root": {
            color: `white !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `white !important`,
          },"& .MuiTablePagination-root":{color:"white"},
          "& .MuiSvgIcon-root":{color:"white"}
        }}
      >
        <DataGrid rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }} autoHeight getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        } className='datagridstyle' pageSize={5} />
        </Box>
    </Box>
    </>
  )
}

export default UserOverview