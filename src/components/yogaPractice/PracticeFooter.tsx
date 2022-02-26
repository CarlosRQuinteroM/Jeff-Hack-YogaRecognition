import { Box, Button } from "@material-ui/core";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const PracticeFooter = () => {
  const navigate = useNavigate();

  const HanddlerPage = useCallback(() => {
    navigate("/", { replace: true });
  }, [navigate]);
  return (
    <Box
      sx={{
        pt: 2,
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "center",
      }}
    >
      <Button
        sx={{
          backgroundColor: "rgba(239,128,203,255)",
          color: "black",
          "&:hover": {
            backgroundColor: "rgba(214,95,133,255)",
            color: "black",
          },
        }}
        onClick={HanddlerPage}
      >
        Lets Go back!
      </Button>
    </Box>
  );
};
