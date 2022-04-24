import * as S from "./app.style";
import { useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { db, getQuestions } from "../../firebase";

// Components
import QuestionCard from "../questionCard/QuestionCard";
import GlobalStyle from "../style/GlobalStyle";
import theme from "../style/theme";

function App() {
  useEffect(() => {
    const getData = async () => {
      const questions = await getQuestions(db);
      console.log({ questions });
    };

    getData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <S.App>
        <GlobalStyle />
        <QuestionCard />
      </S.App>
    </ThemeProvider>
  );
}

export default App;
