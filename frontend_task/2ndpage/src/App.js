import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import gitlab from './assests/gitlb.png';
import icon from './assests/icon.png';
import undo from './assests/undo.png';
import image from './assests/image.png';
import logo from './assests/logo.png';
import eclipse from './assests/eclipse.png';
import key from './assests/key.png';
import GithubIcon  from './assests/github.png';
const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#F5F5F5",
        padding: "20px",
        gap: "20px",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
          marginBottom:"250px"
        }}
      >
        {/* Top Container */}
        <Box
          sx={{
            bgcolor: "#F9FAFB",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "12px",
            width: "100%",
            maxWidth: "450px",
            gap: "16px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
            marginLeft:"120px",
          }}
        >
          {/* Logo and Heading */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Box
              component="img"
              src={logo}// Replace with your image path
              alt="Logo"
              sx={{
                width: "32px",
                height: "32px",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: "600",
                color: "#101828",
                fontSize: "20px",
              }}
            >
              AI to Detect & Autofix Bad Code
            </Typography>
          </Box>

          {/* Statistics */}
          <Box
  sx={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap",
  }}
>
  <Typography
    variant="body1"
    sx={{
      fontSize: "16px",
      color: "#081735",
    }}
  >
    <strong>30+</strong>
    <div>Language Support</div>
  </Typography>
  <Typography
    variant="body1"
    sx={{
      fontSize: "16px",
      color: "#081735",
    }}
  >
    <strong>10K+</strong>
    <div >Developers</div>
  </Typography>
  <Typography
    variant="body1"
    sx={{
      fontSize: "16px",
      color: "#081735",
    }}
  >
    <strong>100K+</strong>
    <div>Hours Saved</div>
  </Typography>
</Box>
</Box>

        {/* Bottom Container */}
        <Box
          sx={{
            bgcolor: "white",
            padding: "20px",
            borderRadius: "12px",
            width: "100%",
            maxWidth: "220px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
            border: "1px solidrgb(244, 244, 244)",
            position: "absolute", 
            right: "100px", // Align it with the top container
            top: "calc(100% - 10px)", // This ensures it overlaps the bottom slightly
            zIndex: 2, 
            marginLeft:'220px'  // Ensure it's on top of the first container
            
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#1570EF",
              fontWeight: "bold",
              marginBottom: "8px",
              marginLeft:"160px",
              fontSize:"0.9rem",
            }}
          >
            <strong>↑ 14%</strong>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "100",
              marginBottom: "9px",
              marginLeft:"160px",
              fontSize:'0.7rem'
            }}
          >
            This Week
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#667085",
              marginBottom: "-20px",
              marginRight:"130px",
              marginTop:"50px",
            }}
          >
            Issues Fixed
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "700",
              color: "#101828",
              marginTop:"20px",
              marginRight:"150px",

            }}
          >
            500K+
          </Typography>

          {/* Image in Bottom Container */}
          <Box
            component="img"
            src={eclipse}// Replace with your image path
            alt="Bottom Container Illustration"
            sx={{
              width: "60px",
              height: "60px",
              position: "absolute",
              bottom: "10px",
              right: "180px",
              marginBottom:"80px",
            }}
          />
        </Box>

        {/* Image below left section */}
        <Box
          component="img"
          src={image}
          alt="Decorative Graphic"
          sx={{
            position: "absolute",
            bottom: "-400px",
            left: "20px",
            width: "300px",
            height: "auto",
            left: "-10px",

          }}
        />
      </Box>

      {/* Vertical Divider */}
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          borderWidth: "1px",
          bgcolor: "#E5E7EB",
          display: { xs: "none", md: "block" },
          marginRight:"120px",
        }}
      />

      {/* Right Section */}
      <Box
        sx={{
          flex: 2,
          maxWidth: "500px",
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginRight:"40px"
        }}
      >
        <Typography
  variant="h4"
  sx={{
    fontWeight: "700",
    color: "#101828",
    marginBottom: "16px",
    display: "flex", // Align the text and image horizontally
    alignItems: "center", // Vertically center the content
    gap: "10px", // Add space between the text and the image
  }}
>
  <Box
    component="img"
    src={logo} // Replace with your image path
    alt="Logo"
    sx={{
      width: "32px", // Adjust the size of the image
      height: "32px",
    }}
  />
  CodeAnt AI
</Typography>


        <Typography
          variant="h6"
          sx={{
            color: "#101828",
            fontSize: "18px",
            fontWeight: "500",
            marginBottom: "24px",
          }}
        >
          Welcome to CodeAnt AI
        </Typography>
      
        <Tabs
  value={activeTab}
  onChange={handleTabChange}
  centered
  sx={{
    marginBottom: "16px",
    "& .MuiTab-root": {
      fontWeight: "500",
      textTransform: "none",
      borderRadius: "8px",
      padding: "16px 90px",
      fontSize: "16px",
      border: "2px solid transparent", // Transparent border when not selected
      transition: "border 0.3s ease", // Smooth transition for the border change
      color: "#101828", // Default color for unselected tabs (dark text)
    },
    "& .Mui-selected": {
      backgroundColor: "#1570EF", // Keep the background blue when selected
      color: "#FFFFFF", // White text when selected
    },
    "& .MuiTabs-indicator": {
      display: "none", // Hide the default indicator
    },
    // Apply transparent border and colored border for "Self Hosted"
    "& .MuiTab-root:nth-of-type(2)": {
      border: "2px solid transparent", // Transparent border for "Self Hosted" tab when not selected
    },
    "& .MuiTab-root.Mui-selected:nth-of-type(2)": {
      border: "2px solid #1570EF", // Colored border for "Self Hosted" tab when selected
      backgroundColor: "#1570EF", // Ensure selected tab has the blue background
      color: "#FFFFFF", // Ensure text is white when selected
    },
    "& .MuiTab-root.Mui-selected:nth-of-type(1)": {
      color: "#FFFFFF", // Ensuring that the default selected tab (SAAS) is white
    },
  }}
>
  <Tab label="SAAS" />
  <Tab label="Self Hosted" />
</Tabs>


        {activeTab === 0 && (
          <Box>
            <Button
              variant="outlined"
              fullWidth
              startIcon={ <Box component="img" src={GithubIcon}  alt="GitHub" sx={{ width: "24px", height: "24px",marginLeft:"0px" }} />
            }
              sx={buttonStyles}
            >
              Sign in with GitHub
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={ <Box component="img" src={undo}  alt="GitHub" sx={{ width: "24px", height: "24px",marginLeft:"160px" }} />
            }
              sx={buttonStyles}
            >
              Sign in with Bitbucket
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={ <Box component="img" src={icon} alt="GitHub" sx={{ width: "24px", height: "24px",marginLeft:"160px"  }} />
            }
              sx={buttonStyles}
            >
              Sign in with Azure DevOps
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={ <Box component="img" src={gitlab} alt="GitHub" sx={{ width: "24px", height: "24px",marginLeft:"160px"  }} />
            }
              sx={buttonStyles}
            >
              Sign in with GitLab
            </Button>
          </Box>
        )}

        {activeTab === 1 && (
          <Box>
            <Button
              variant="outlined"
              fullWidth
              startIcon = { <Box component="img" src={gitlab}  alt="GitHub" sx={{ width: "24px", height: "24px",marginLeft:"160px"  }} />
      }
              sx={buttonStyles}
            >
              Self Hosted GitLab
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={ <Box component="img" src={key} alt="GitHub" sx={{ width: "24px", height: "24px",marginLeft:"160px"  }} />
            }
              sx={buttonStyles}
            >
              Sign in with SSO
            </Button>
          </Box>
        )}

        <Divider sx={{ margin: "24px 0" }} />
        <Typography
          variant="body2"
          sx={{ color: "#667085", fontSize: "14px", textAlign: "center" }}
        >
          By signing up you agree to the{" "}
          <span style={{ color: "#1570EF", fontWeight: "500" }}>
            Privacy Policy
          </span>
          .
        </Typography>
      </Box>
    </Box>
  );
};

const buttonStyles = {
  marginBottom: "12px",
  padding: "12px",
  justifyContent: "flex-start",
  textTransform: "none",
  fontWeight: "500",
  borderColor: "#E5E7EB",
  color: "#101828",
  "&:hover": {
    backgroundColor: "#F9FAFB",
    borderColor: "#D1D5DB",
  },
};

export default App;
