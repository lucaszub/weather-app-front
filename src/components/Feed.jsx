import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import Map from "./Map"
import Dashboard_Temperature from "./LineChart"

function Feed() {
  return (
    <Box flex={6} p={{ xs: 0, md: 2 }} sx={{ backgroundColor: '#FAFAFB' }}>
        <Stack spacing={1}>
          <Typography variant="h3" component="h2" sx={{ height: 100 }}>
            Les Température par mois
          </Typography>
          <Card sx={{ minWidth: 600, height: '50vh' }}>
          <CardContent sx={{ height: '100%', overflow: 'auto' }}>
              <Dashboard_Temperature />
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 600, height: 'è0vh' }}>
          <Typography variant="h3" component="h2" sx={{ height: 100 }}>
            Les station météorologique
          </Typography>
          <Divider/>
          <CardContent sx={{ height: '100%', overflow: 'auto' }}>
              <Map />
            </CardContent>
          </Card>
          <Divider/>
          
        </Stack>
    </Box>
  );
};

export default Feed;