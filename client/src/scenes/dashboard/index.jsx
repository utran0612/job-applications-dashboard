import React from 'react';
import { Box, useTheme } from '@mui/material';
import { useGetEntitiesQuery } from 'state/api';
import Header from "components/Header";
import { DataGrid } from '@mui/x-data-grid';

const Dashboard = () => {
    const { data, isLoading } = useGetEntitiesQuery();
    console.log("entities data", data);

    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 1,
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
        },
        {
            field: "title",
            headerName: "Title",
            flex: 1,
        },
        {
            field: "status",
            headerName: "Status",
            flex: 1,
        },
        {
            field: "createdAt",
            headerName: "Created at",
            flex: 1,
        }
    ]
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="DASHBOARD" subtitle="List of Applications" />
            <Box mt="40px" height="75vh">
                <DataGrid
                    loading={isLoading || !data}
                    getRowId={(row) => row._id}
                    rows={data || []}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Dashboard;