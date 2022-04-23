import * as S from "./app.style";
import { db, getQuestions } from "../../firebase";

// Components
import QuestionCard from "../questionCard/QuestionCard";
import GlobalStyle from "../style/GlobalStyle";
import { useEffect } from "react";
import { child, get, onValue, ref } from "firebase/database";

function App() {
  useEffect(() => {
    const getData = async () => {
      const questions = await getQuestions(db);
      console.log({ questions });
    };

    getData();
  }, []);

  return (
    <S.App>
      <GlobalStyle />
      <QuestionCard />
    </S.App>
  );
}

export default App;
