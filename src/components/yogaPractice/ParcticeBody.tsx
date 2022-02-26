import { Box, Grid } from "@material-ui/core";

export const ParcticeBody = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={6} lg={6} md={6}>
          Hola
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} lg={6} md={6}>
          Hola2
        </Grid>
      </Grid>
    </Box>
  );
};
