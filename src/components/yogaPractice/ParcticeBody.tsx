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
          <Box
            sx={{
              width: 500,
              height: 500,
              border: "red 1px solid",
            }}
          >
            Hola
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} lg={6} md={6}>
          <Box
            sx={{
              width: 500,
              height: 500,
              border: "red 1px solid",
            }}
          >
            Hola2
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
