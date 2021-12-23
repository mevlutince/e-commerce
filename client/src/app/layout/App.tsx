import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

import { createTheme } from "@mui/system";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paleteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      //mode:paleteType
      mode: "dark",
    },
  });
function handleThemeChange(){
  setDarkMode(!darkMode);
}

  return (
    <>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>

      <Container>
        <Catalog />
      </Container>
    </>
  );
}

export default App;
