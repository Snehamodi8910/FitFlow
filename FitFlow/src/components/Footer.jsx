import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/FitFlow.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img
          src={Logo}
          alt="logo"
          style={{ objectFit: "cover", width: "400px", height: "120px" }}
        />
        <Typography variant="h5" pb="40px" mt="20px">
          Made by Sneha Modi ♥
        </Typography>
      </Stack>
    </Box>
  );
};
export default Footer;
