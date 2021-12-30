import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

import {
  loginUserPassword,
  loginWithGoogle,
} from "../../reducers/authReducer/actionCreators";
import { useForm } from "../../hooks/useForm";
import { setError } from "../../reducers/uiReducer/actionCreators";
import { RootState } from "../../store";
import { IUiState } from "../../reducers/uiReducer/types";

const initialStateForm = {
  email: "",
  password: "",
};

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [form, handleInputChange] = useForm(initialStateForm);
  const { msgError, loading } = useSelector<RootState, IUiState>(
    (state) => state.ui
  );

  const { email, password } = form;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isFormValid()) {
      !!msgError && dispatch(setError(""));
      dispatch(loginUserPassword(form.email, form.password));
    }
  };

  const handleSignInWithGoogle = () => {
    dispatch(loginWithGoogle());
  };

  const isFormValid = (): boolean => {
    if (email.trim().length === 0 || password.trim().length === 0) {
      dispatch(setError("Email or password is empty"));
      return false;
    }
    return true;
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {!!msgError && (
          <Box
            sx={{
              mt: 1,
              bgcolor: "error.main",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "4px",
            }}
          >
            <Typography>{msgError}</Typography>
          </Box>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={form.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={form.password}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Button
            type="submit"
            color="success"
            fullWidth
            variant="contained"
            className="button--GoogleSignIn"
            onClick={handleSignInWithGoogle}
            disabled={loading}
          >
            <img
              src="https://avatars1.githubusercontent.com/u/7328930?v=4"
              alt="Google's logo"
            />
            Sign in with Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
