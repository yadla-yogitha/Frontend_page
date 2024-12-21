import React, { useState } from 'react';
import icon from'./assets/chevron-down.png';
import {
  Box,
  Button,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  Drawer,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HomeIcon from './assets/home.png';
import CodeIcon from './assets/arrow.png';
import CloudIcon from './assets/cloud.png';
import BookIcon from './assets/security.png';
import SettingsIcon from './assets/setting.png';
import SupportIcon from './assets/frame.png';
import DatabaseIcon from './assets/database.png';
import logo from './assets/logo.png';
import LogoutIcon from './assets/sign-out.png';
import RefreshIcon from './assets/refresh.png';

// Sample repositories
const repositories = [
  {
    name: 'design-system',
    visibility: 'Public',
    language: 'React',
    size: '7320 KB',
    updated: '1 day ago',
  },
  {
    name: 'codeant-ci-app',
    visibility: 'Private',
    language: 'Javascript',
    size: '5871 KB',
    updated: '2 days ago',
  },
  {
    name: 'analytics-dashboard',
    visibility: 'Private',
    language: 'Python',
    size: '4521 KB',
    updated: '5 days ago',
  },
  {
    name: 'mobile-app',
    visibility: 'Public',
    language: 'Swift',
    size: '3096 KB',
    updated: '3 days ago',
  },
  {
    name: 'e-commerce-platform',
    visibility: 'Private',
    language: 'Java',
    size: '6210 KB',
    updated: '6 days ago',
  },
  {
    name: 'Blog-Website',
    visibility: 'Public',
    language: 'HTML/CSS',
    size: '1876 KB',
    updated: '4 days ago',
  },
  {
    name: 'Social-netwrok',
    visibility: 'Private',
    language: 'PHP',
    size: '5432 KB',
    updated: '7 days ago',
  },
];

// Sidebar content with custom icons
const SidebarContent = () => (
  <Box
    sx={{
      width: '250px',
      bgcolor: '#f5f5f5',
      height: '100vh',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          alt="CodeAnt AI"
          style={{ marginRight: '8px', verticalAlign: 'middle' }}
        />
        CodeAnt AI
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
      <Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '4px 8px',
    marginTop: '16px',
    marginLeft: '20px',
  }}
>
  <Typography variant="body1" sx={{ marginRight: '8px' }}>
    UtkarshDhairyaPa..
  </Typography>
  <img
    src={icon} // Replace with the actual path to your dropdown arrow image
    alt="Dropdown Arrow"
    style={{ width: '10px', height: '7px' }} // Adjust the size as needed
  />
</Box>
      </Box>
      <List>
        <Button
          variant="contained"
          startIcon={<img src={HomeIcon} alt="Home" style={{ width: '24px' }} />}
          sx={{
            width: '100%',
            justifyContent: 'flex-start',
            backgroundColor: '#007bff',
            color: '#fff',
            textTransform: 'none',
            padding: '8px 16px',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          Repositories
        </Button>
        <ListItem button>
          <img src={CodeIcon} alt="Code" style={{ width: '24px', marginRight: '8px' }} />
          <ListItemText primary="Code" />
        </ListItem>
        <ListItem button>
          <img src={CloudIcon} alt="Cloud" style={{ width: '24px', marginRight: '8px' }} />
          <ListItemText primary="Cloud Security" />
        </ListItem>
        <ListItem button>
          <img src={BookIcon} alt="Documentation" style={{ width: '24px', marginRight: '8px' }} />
          <ListItemText primary="Documentation" />
        </ListItem>
        <ListItem button>
          <img src={SettingsIcon} alt="Settings" style={{ width: '24px', marginRight: '8px' }} />
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
    <Box>
      <List sx={{ marginBottom: '-75px' }}>
      <ListItem button>
          <img src={SupportIcon} alt="Settings" style={{ width: '24px', marginRight: '8px' }} />
          <ListItemText primary="Support" />
        </ListItem>
        <ListItem button>
          <img src={LogoutIcon} alt="Settings" style={{ width: '24px', marginRight: '8px' }} />
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  </Box>
);

// Sidebar component
const Sidebar = ({ isOpen, onClose }) => (
  <Drawer
    open={isOpen}
    onClose={onClose}
    sx={{
      display: { xs: 'block', md: 'none' },
      '& .MuiDrawer-paper': { width: '250px', bgcolor: '#f5f5f5' },
    }}
  >
    <SidebarContent />
  </Drawer>
);

// Repository list
const RepositoryList = () => (
  <Box sx={{ flexGrow: 1, padding: '40px', marginLeft: '20px' }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', sm: 'center' },
        gap: '16px',
        marginBottom: '16px',
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ fontWeight:'bold',marginBottom: { xs: '8px', sm: '0' } }}>
          Repositories
        </Typography>
        <Typography variant="body2">33 total repositories</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: { xs: 'flex-start', sm: 'flex-end' },
          gap: '8px',
        }}
      >
       <Button
  variant="outlined"
  startIcon={
    <img
      src={RefreshIcon}// Replace with the actual image path
      alt="Refresh Icon"
      style={{ width: '20px', height: '20px' }} // Adjust the size as needed
    />
  }
  sx={{
    color: '#000',
    borderColor: '#ccc',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      borderColor: '#bbb',
    },
  }}
>
  Refresh All
</Button>
        <Button variant="contained" startIcon={<AddIcon />}>
          Add Repository
        </Button>
      </Box>
    </Box>
    <TextField
      placeholder="Search Repositories"
      variant="outlined"
      size="small"
      sx={{ marginBottom: '16px', width: '100%' }}
    />
    <List sx={{ marginLeft: '-15px' }}>
      {repositories.map((repo, index) => (
        <React.Fragment key={index}>
          <ListItem sx={{ fontSize:'10rem'}}>
            <ListItemText
              primary={
                <Typography variant="subtitle1" sx={{marginTop: '-13px' ,fontSize:'1.3rem'}}>
                  {repo.name}
                  <Chip label={repo.visibility} size="small" sx={{ marginLeft: '8px', fontSize: '0.75rem', color: '#175CD3', // Text color
      border: '1px solid #175CD3',
      backgroundColor: 'transparent',  }} />
                </Typography>
              }
              secondary={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px',fontSize: '1.5rem' }}>
                  <Typography sx={{ fontSize: '1rem' }}>
                    {repo.language}
                    <Typography component="span" sx={{ color: '#1570EF', fontSize: '2rem', top: '6px',position: 'relative', }}>
                      •
                    </Typography>
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px',marginTop:'11px' }}>
                    <img
                      src={DatabaseIcon}
                      alt="icon"
                      style={{ width: '10px', height: '10px' }}
                    />
                    <Typography>{repo.size}</Typography>
                  </Box>
                  <Typography sx={{ marginLeft: '8px',marginTop:'11px' }}>Updated {repo.updated}</Typography>
                </Box>
              }
            />
          </ListItem>
          {index < repositories.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  </Box>
);
const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        onClick={() => setSidebarOpen(true)}
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'fixed',
          top: '16px',
          right: '16px',
        }}
      >
        <MenuIcon />
      </IconButton>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Box sx={{ display: { xs: 'none', md: 'block' }, width: '250px' }}>
        <SidebarContent />
      </Box>
      <RepositoryList />
    </Box>
  );
};

export default App;
