import React from "react";
import { Layout } from "antd";
import { Box } from "@chakra-ui/core";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "./App.css";
import Wallet from "./components/Wallet";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        padding={30}
      >
        <Wallet />
      </Box>
    </ThemeProvider>
  );
}

export default App;
