import React, { useState } from 'react'
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import NavBar from "components/Navbar"
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from 'state/api';

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setIsSidebarOpne] = useState(true);
    const userId = useSelector((state) => state.global.userId);
    const { data } = useGetUserQuery(userId);


    return <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
        <Sidebar
            user={data || {}}
            isNonMobile={isNonMobile}
            drawerWidth="250px"
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpne={setIsSidebarOpne}
        />
        <Box flexGrow={1}>
            <NavBar
                user={data || {}}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpne={setIsSidebarOpne} />
            <Outlet />
        </Box>
    </Box>
}

export default Layout