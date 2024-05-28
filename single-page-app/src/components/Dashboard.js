import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box'; // Import Box for layout

const Dashboard = () => {
    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    <Box sx={{ flexGrow: 1, textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1">
                            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                        </Typography>
                        <Typography variant="body1">
                            <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link>
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4, backgroundColor: '#f5f5f5' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to the Dashboard
                </Typography>
                <Typography variant="body1" component="p">
                    Here you can find all the tools and features you need to manage your tasks, view analytics, and much more.
                </Typography>
            </Container>
        </>
    );
};

export default Dashboard;