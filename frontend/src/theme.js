import { createTheme } from "@mui/material/styles";

const theme = createTheme({
   palette: {
      mode: "dark",
      primary: {
         main: "hsl(0, 0%, 100%)",
         // main: "hsl(220, 13%, 18%)",
         light: "hsl(220, 13%, 18%)",
         // light: "hsl(0, 0%, 100%)",
      },
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 600,
         md: 800,
         lg: 1200,
         xl: 1536,
      },
   },
});

export default theme;
