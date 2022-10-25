import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";

import { Container, Title, Header, Main, Footer } from "./Layout.styled";
import { Grid, Row, Col } from "../Grid";

const Layout = (): ReactElement => (
  <Container>
    <Header>
      <Title>Rick and morty</Title>
    </Header>
    <Main>
      <Outlet />
    </Main>
    <Footer>Derechos reservados - Matias Inchauspe / @minchauspe</Footer>
  </Container>
);

export default Layout;
