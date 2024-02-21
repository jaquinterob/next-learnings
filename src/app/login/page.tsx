"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
interface Login {
  user: string;
  pass: string;
}
const login = () => {
  const router = useRouter();
  const initialLogin: Login = {
    user: "",
    pass: "",
  };
  const [login, setLogin] = useState<Login>(initialLogin);
  const [open, setOpen] = useState(false);
  const verifyLogin = () => {
    if (
      login.user.toLocaleLowerCase() === "john" &&
      login.pass.toLocaleLowerCase() === "123"
    ) {
        router.push('/home')
    } else {
      setOpen(true);
    }
  };
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Card sx={{ width: 400, margin: "auto", marginTop: 5, padding: 1 }}>
      <CardContent className=" flex flex-col gap-4">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Iniciar sesión
        </Typography>
        <TextField
          id="user"
          label="Usuario"
          className="w-full"
          autoFocus
          value={login.user}
          onChange={(e) => setLogin({ ...login, user: e.target.value })}
        />
        <TextField
          id="pass"
          label="Contraseña"
          className="w-full"
          type="password"
          value={login.pass}
          onChange={(e) => setLogin({ ...login, pass: e.target.value })}
        />
      </CardContent>
      <CardActions className="flex flex-col gap-3">
        <Button onClick={verifyLogin} className="w-full" variant="contained">
          Iniciar sesión
        </Button>
        <Button className="w-full" size="small">
          crear nuevo usuario
        </Button>
      </CardActions>
      <pre>{JSON.stringify(login, null, 2)}</pre>
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="This Snackbar will be dismissed in 5 seconds."
      >
        <Alert
          onClose={handleClose}
          severity="warning"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Credenciales inválidas
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default login;
