import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../navigation/Navigation';
import { Box } from '@mui/material';

export const SharedLayout = () => {
  return (
    <>
        <Navigation />
        <Box sx={{ mt: { xs: 10, md: 12 } }}>
            <Outlet />
        </Box>
    </>
  )
}
