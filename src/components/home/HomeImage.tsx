import { Box } from "@material-ui/core";

export const HomeImage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <img src="/static/Yoga.png" width="800px" alt="YogaStatic" />
    </Box>
  );
};
