import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    const validEmail = "user@example.com";
    const validPassword = "1Password";

    console.log(email, password);

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (trimmedEmail === "" || trimmedPassword === "") {
      toast.error("Fields cannot be empty!");
      setIsLoading(false);
      return;
    }
    if (trimmedEmail !== validEmail || trimmedPassword !== validPassword) {
      toast.error("Incorrect Credentials");
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    toast.success("Login Successful");
    navigate("/homepage");
  };
  return (
    <>
      <ToastContainer />
      <Container
        maxWidth="lg"
        sx={{
          bgcolor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "fit-content",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "3rem",
            borderRadius: "10px",
            height: "50vh",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: "2rem" }}
          >
            Slack Gallery{" "}
          </Typography>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginBottom: "2rem" }}
          >
            Login
          </Typography>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                marginTop: "1rem",
                marginBottom: "2rem",
              }}
            >
              <input
                type="text"
                placeholder="Email"
                style={{ width: "300px", padding: "1rem" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                style={{ padding: "1rem", width: "300px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Button
              sx={{
                margin: "auto",
                bgcolor: "red",
                color: "#fff",
                display: "flex",
                "&:hover": {
                  bgcolor: "darkred",
                },
              }}
              onClick={handleLogin}
            >
              {isLoading ? (
                <Typography>Loading...</Typography>
              ) : (
                <Typography>Login</Typography>
              )}
            </Button>
          </Box>
        </div>
      </Container>
    </>
  );
};

export default Login;
