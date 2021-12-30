import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "../../reducers/dashboardReducer/actionCreators";
import { RootState } from "../../store";
import { IDashboardState } from "../../reducers/dashboardReducer/types";
import { Avatar, Divider, Grid, Paper, Typography } from "@mui/material";

export const DashboardScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { contributors, count } = useSelector<RootState, IDashboardState>(
    (state) => state.dashboard
  );
  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);
  return (
    <>
      <Typography variant="h2">Dashboard</Typography>
      <Divider />
      <Grid container spacing={2} sx={{ p: 4 }}>
        <Grid item md={6}>
          <Paper
            elevation={2}
            sx={{
              p: 4,
              mt: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h3">{count}</Typography>
            <Typography variant="h6">Contributors</Typography>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper
            elevation={2}
            sx={{
              p: 4,
              mt: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h3">facebook/react</Typography>
            <Typography variant="h6">Github Project</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {contributors?.map((contributor) => (
          <Grid item md={4} key={contributor.login}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                mt: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                alt={contributor.login}
                src={contributor.avatar_url}
                sx={{ width: 56, height: 56 }}
              />
              <Typography variant="body1">{contributor.login}</Typography>
              <Typography variant="h4">{contributor.contributions}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
