import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import { client } from "./api";

import { GlobalStyle } from "./globalStyle";
import theme from "./theme";

import { Home, Character } from "./pages";
import { Layout } from "./components";

const App = () => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="character/:id" element={<Character />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ApolloProvider>
  </ThemeProvider>
);

export default App;
