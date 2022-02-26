import { Box, Container } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { ParcticeBody } from "src/components/yogaPractice/ParcticeBody";
import { PracticeFooter } from "src/components/yogaPractice/PracticeFooter";
import { PracticeHeader } from "src/components/yogaPractice/PracticeHeader";

const YogaPractice = () => {
  return (
    <>
      <Helmet>
        <title>Yoga | Practice</title>
      </Helmet>
      <Box
        sx={{
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <PracticeHeader />
          <ParcticeBody />
          <PracticeFooter />
        </Container>
      </Box>
    </>
  );
};

export default YogaPractice;
