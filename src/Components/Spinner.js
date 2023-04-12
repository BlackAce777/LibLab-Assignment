import { Paper, CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Paper
      sx={{
        height: "100%",
        width: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        backgroundColor: "transparent",
      }}
    >
      <CircularProgress color="primary"></CircularProgress>
    </Paper>
  );
};

export default Spinner;
