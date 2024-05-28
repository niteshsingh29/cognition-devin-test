import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
            <main>
                {/* Hero unit */}
                <Box sx={{ backgroundColor: 'background.paper', p: 8, pb: 6 }}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                            Welcome to Home Page
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Something short and leading about the collection below—its contents, the creator and/or users, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.
                        </Typography>
                        <div>
                            <Button variant="contained">
                                <Link to="/dashboard">Go to Dashboard</Link>
                            </Button>
                        </div>
                    </Container>
                </Box>
                {/* End hero unit */}

                <Container sx={{ pt: 8, pb: 8, maxWidth: 'md' }}>
                    {/* Feature Grid */}
                    <Grid container spacing={4}>
                        {[...Array(6)].map((_, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <CardMedia
                                        sx={{ pt: '56.25%' }} // 16:9 aspect ratio
                                        image="https://source.unsplash.com/random"
                                        title={`Image title ${index + 1}`}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            Heading {index + 1}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" component="p">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ backgroundColor: 'background.paper', p: 6 }}>
                <Container maxWidth="lg">
                    <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                        © 2023 Company Name. All rights reserved.
                    </Typography>
                </Container>
            </Box>
        </React.Fragment>
    );
};

export default Home;