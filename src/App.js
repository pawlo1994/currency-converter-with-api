import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Form from "./Form";
import Clock from "./Clock";
import Container from "./Container";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

function App() {

  const currencies = [
    {
      id: 1,
      name: "EUR",
      value: 4.47,
    },
    {
      id: 2,
      name: "USD",
      value: 3.68,
    },
    {
      id: 3,
      name: "CHF",
      value: 4.11,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header headerContent="suchy kantor" />
        <Clock />
        <Main>
          <Form currencies={currencies} />
        </Main>
        <Footer footerContent="Copyright &copy; Paweł Suchy 2021" />
      </Container>
    </ThemeProvider>
  );
}

export default App;
