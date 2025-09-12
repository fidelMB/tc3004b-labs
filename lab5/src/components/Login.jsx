import { Button, TextField, Box, Typography, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({setIsAuthenticated}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (email === "fidel@tec.mx" && password === "123") {
            setIsAuthenticated(true);
            navigate("/home");
        }
        else {
            alert("CONTRASEÑA INVÁLIDA!");
        }
    }

    return (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
    >
        <Paper sx={{minWidth: "300px", p: "32px"}}>
            <Typography variant="h4" textAlign="center">
                Login
            </Typography>
            <form onSubmit={handleSubmit}>            
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />            
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    fullWidth
                    type="submit"                       
                    variant="contained"
                    sx={{mt:"16px"}}
                >
                    SIGN IN
                </Button>   
            </form>
        </Paper>
    </Box>
    )
}

export default Login;
