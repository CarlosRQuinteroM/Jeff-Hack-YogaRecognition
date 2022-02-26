import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

export const PracticeHeader = () => {
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
    font-size: "5em";
    &:hover {
      animation: rubberBand 0.8s;
      color: rgb(158, 211, 245);
    }
  `;
  return (
    <Box
      sx={{
        m: 4,
        pt: 1,
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "center",
      }}
    >
      <DivTitle>
        <H1title className="rubber">P</H1title>
        <H1title className="rubber">R</H1title>
        <H1title className="rubber">A</H1title>
        <H1title className="rubber">C</H1title>
        <H1title className="rubber">T</H1title>
        <H1title className="rubber">I</H1title>
        <H1title className="rubber">C</H1title>
        <H1title className="rubber">E</H1title>
      </DivTitle>
    </Box>
  );
};
