import { Box, Container } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { HomeHeader, HomeImage } from "src/components/home";
import YogaButton from "src/components/home/YogaButtom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Yoga | Home</title>
      </Helmet>
      <Box
        sx={{
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <HomeHeader />
          <YogaButton />
          <HomeImage />
        </Container>
      </Box>
    </>
  );
};

export default Home;
