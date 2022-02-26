import { Box, Container } from "@material-ui/core";
import styled from "@emotion/styled";

export const HomeHeader = () => {
  const DivTitle = styled.div`
    font-family: "Orbitron", sans-serif, "Franklin Gothic Medium",
      "Arial Narrow", Arial, sans-serif;
    display: flex;
    position: relative;
    align-content: center;
    @keyframes rubberBand {
      0% {
        transform: scale3d(1, 1, 1);
      }
      25% {
        transform: scale3d(1.25, 0.75, 1);
      }
      35% {
        transform: scale3d(1.3, 1, 1.25);
      }
      65% {
        transform: scale3d(0.8, 1.3, 1.1);
      }
      100% {
        transform: scale3d(1, 1, 1);
      }
    }
  `;
  const H1title = styled.h1`
    color: rgb(166, 98, 157);
    font-size: "25em";
    &:hover {
      animation: rubberBand 0.8s;
      color: rgb(158, 211, 245);
    }
  `;

  return (
    <Container>
      <Box
        sx={{
          m: 5,
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <DivTitle>
          <H1title className="rubber">T</H1title>
          <H1title className="rubber">h</H1title>
          <H1title className="rubber">e</H1title>
        </DivTitle>
        &nbsp; &nbsp;
        <DivTitle>
          <H1title className="rubber">B</H1title>
          <H1title className="rubber">e</H1title>
          <H1title className="rubber">s</H1title>
          <H1title className="rubber">t</H1title>
          &nbsp; &nbsp;
          <H1title className="rubber">A</H1title>
          <H1title className="rubber">n</H1title>
          <H1title className="rubber">d</H1title>
          &nbsp; &nbsp;
          <H1title className="rubber">S</H1title>
          <H1title className="rubber">a</H1title>
          <H1title className="rubber">f</H1title>
          <H1title className="rubber">e</H1title>
          <H1title className="rubber">s</H1title>
          <H1title className="rubber">t</H1title>
        </DivTitle>
        &nbsp; &nbsp;
        <DivTitle>
          <H1title className="rubber">YOGA</H1title>
          &nbsp; &nbsp;
          <H1title className="rubber">P</H1title>
          <H1title className="rubber">a</H1title>
          <H1title className="rubber">r</H1title>
          <H1title className="rubber">t</H1title>
          <H1title className="rubber">n</H1title>
          <H1title className="rubber">e</H1title>
          <H1title className="rubber">r</H1title>
        </DivTitle>
      </Box>
    </Container>
  );
};
