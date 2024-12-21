import React from "react";
import { Box, Typography, Button, Chip } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// Mock assets
const mockLogo = "https://via.placeholder.com/150"; // Replace with the actual logo
const mockIcon = "https://via.placeholder.com/20"; // Replace with the actual arrow or other icons

const App = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", padding: "16px" }}>
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "24px",
        }}
      >
        <Box
          sx={{
            borderRadius: "12px",
            padding: "16px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            AI to Detect & Autofix Bad Code
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "16px", marginBottom: "16px" }}>
            <Chip
              label="Aman Subudhi"
              sx={{
                backgroundColor: "#E9F5E9",
                color: "#0D7330",
                fontWeight: "bold",
              }}
            />
          </Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            30+ <span style={{ fontSize: "14px" }}>Language Support</span>
          </Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            10K+ <span style={{ fontSize: "14px" }}>Developers</span>
          </Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            100K+ <span style={{ fontSize: "14px" }}>Hours Saved</span>
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "24px",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "400px",
          }}
        >
          <Typography sx={{ fontWeight: "bold", marginBottom: "8px" }}>
            Issues Fixed
          </Typography>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            500K+
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center", color: "#0D7330" }}>
            <ArrowUpwardIcon fontSize="small" /> 14%
            <span style={{ marginLeft: "4px", fontSize: "12px" }}>This week</span>
          </Typography>
        </Box>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderLeft: "2px solid #E9E9E9",
          padding: "24px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <img src={mockLogo} alt="Logo" style={{ marginBottom: "16px" }} />
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "24px" }}>
            Welcome to CodeAnt AI
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "8px",
              border: "1px solid #E0E0E0",
              marginBottom: "24px",
            }}
          >
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#1570EF",
                color: "#FFFFFF",
                borderRadius: "0",
                "&:hover": { backgroundColor: "#0F58C1" },
              }}
            >
              SAAS
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                border: "none",
                borderLeft: "1px solid #E0E0E0",
                color: "#757575",
              }}
            >
              Self Hosted
            </Button>
          </Box>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#333333",
              color: "#FFFFFF",
              marginBottom: "8px",
              "&:hover": { backgroundColor: "#1F1F1F" },
            }}
          >
            Sign in with Github
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#0052CC",
              color: "#FFFFFF",
              marginBottom: "8px",
              "&:hover": { backgroundColor: "#003D99" },
            }}
          >
            Sign in with Bitbucket
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#007ACC",
              color: "#FFFFFF",
              marginBottom: "8px",
              "&:hover": { backgroundColor: "#005FA3" },
            }}
          >
            Sign in with Azure Devops
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#FCA121",
              color: "#FFFFFF",
              "&:hover": { backgroundColor: "#C67E18" },
            }}
          >
            Sign in with GitLab
          </Button>
          <Typography
            sx={{
              marginTop: "16px",
              fontSize: "12px",
              color: "#757575",
              textAlign: "center",
            }}
          >
            By signing up you agree to the{" "}
            <span style={{ color: "#1570EF", textDecoration: "underline" }}>
              Privacy Policy
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
