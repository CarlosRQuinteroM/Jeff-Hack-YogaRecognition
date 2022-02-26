import { Box, Container } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { HomeHeader, HomeImage } from "src/components/home";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Yoga | Home</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "rgb(232, 218, 230)",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <HomeHeader />
          <HomeImage />
        </Container>
      </Box>
    </>
  );
};

export default Home;
