import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Form from "./Form";
import Clock from "./Clock";
import Container from "./Container";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header headerContent="suchy kantor" />
        <Clock />
        <Main>
          <Form />
        </Main>
        <Footer footerContent="Copyright &copy; Paweł Suchy 2021" />
      </Container>
    </ThemeProvider>
  );
}

export default App;
