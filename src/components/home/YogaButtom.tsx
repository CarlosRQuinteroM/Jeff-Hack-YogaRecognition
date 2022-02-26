import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const YogaButton = () => {
  const navigate = useNavigate();

  const HanddlerPage = useCallback(() => {
    navigate("/yoga-practice", { replace: true });
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
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
        Lets get started!
      </Button>
    </Box>
  );
};
export default YogaButton;
