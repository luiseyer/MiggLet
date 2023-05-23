import { memo } from 'react'
import {Button,TextField, Link, Grid}from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Container maxWidth="xs">
      <Box
        sx={{  
          alignItems: "center",
          flexDirection: "column",
          marginTop: 6,
          display: "flex", 
        }}
      >
        <Typography component="h1" variant="h4">MiggLet</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            name="email"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
          />
          <TextField
            name="password"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
          />
          <Grid container>
            <Grid item xs>
              <Link href="#" >
                Forgot my password
              </Link>
            </Grid>
            <Grid item>
              <Link href="#">
                {"Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 2, mb: 1 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
 

  
export default memo(LoginPage)