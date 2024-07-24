import React from 'react';
import { Box, Paper } from '@mui/material';

const images = [
  'https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/d135f39a-7d15-458c-a58d-cc35e304f9d4/9-stacked-bar-chart-final-large-opt.png',  // Replace with your image URLs
  'https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/d135f39a-7d15-458c-a58d-cc35e304f9d4/9-stacked-bar-chart-final-large-opt.png',
  'https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/d135f39a-7d15-458c-a58d-cc35e304f9d4/9-stacked-bar-chart-final-large-opt.png'
];

const ImageListComponent = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
      {images.map((url, index) => (
        <Paper key={index} elevation={3} sx={{ flex: 1 }}>
          <img src={url} alt={`Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </Paper>
      ))}
    </Box>
  );
};

export default ImageListComponent;
