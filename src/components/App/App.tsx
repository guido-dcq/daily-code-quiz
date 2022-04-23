import * as S from "./app.style";

// Components
import QuestionCard from "../questionCard/QuestionCard";
import GlobalStyle from "../style/GlobalStyle";

function App() {
  return (
    <S.App>
      <GlobalStyle />
      <QuestionCard />
    </S.App>
  );
}

export default App;
