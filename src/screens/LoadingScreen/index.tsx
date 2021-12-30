import { CircularProgress, Box } from "@mui/material";

export const LoadingScreen: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
