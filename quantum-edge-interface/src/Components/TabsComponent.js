import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box, Paper, Typography } from '@mui/material';
import TableComponent from './TableComponent';
import SecondTableComponent from './SecondTableComponent';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
};

const TabsComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab
            label="Table 1"
            sx={{ backgroundColor: value === 0 ? '#3f51b5' : '', color: value === 0 ? 'white' : '' }}
          />
          <Tab
            label="Table 2"
            sx={{ backgroundColor: value === 1 ? '#3f51b5' : '', color: value === 1 ? 'white' : '' }}
          />
        </Tabs>
      </AppBar>
      <Box sx={{ height: 'calc(100vh - 64px)', display: 'flex' }}>
        <Box sx={{ flex: 1, height: '100%' }}>
          <TabPanel value={value} index={0}>
            <Paper elevation={3} sx={{ padding: '10px', height: '100%' }}>
              <Typography variant="h6">Table 1</Typography>
              <TableComponent />
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Paper elevation={3} sx={{ padding: '10px', height: '100%' }}>
              <Typography variant="h6">Table 2</Typography>
              <SecondTableComponent />
            </Paper>
          </TabPanel>
        </Box>
      </Box>
    </div>
  );
};

export default TabsComponent;
