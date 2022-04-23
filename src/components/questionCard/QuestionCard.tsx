// Style
import * as S from "./questionCard.style";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import Checkbox from "../inputs/checkbox/Checkbox";

const code = `const woah = fun => fun + 1;
const dude = woah(2) + 3;
function thisIsAFunction() {
  return [1,2,3].map(n => n + 1).filter(n !== 3);
}
console.log('making up fake code is really hard');

function itIs() {
  return 'no seriously really it is';
}`;

function QuestionCard() {
  return (
    <S.QuestionCard>
      <div className="question-card__counter-wrapper">
        <p className="question-card__counter">2 of 4</p>
      </div>
      <div className="question-card__question-wrapper">
        <h2>
          <span
            role="img"
            aria-label="hand waving"
            className="question-card__info-emoji"
          >
            👋
          </span>
          What is a callback function?
        </h2>
      </div>
      <SyntaxHighlighter
        language="javascript"
        className="question-card__code"
        style={materialLight}
      >
        {code}
      </SyntaxHighlighter>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      ></form>
      <div className="question-card__question-wrapper">
        <Checkbox
          id="question-1"
          name="question-1"
          onChange={(e) => console.log(e.target.value)}
          label="Function that is called on first render"
        />
        <Checkbox
          id="question-2"
          name="question-2"
          onChange={(e) => console.log(e.target.value)}
          label="Function that is called on first render"
        />
        <Checkbox
          id="question-3"
          name="question-3"
          onChange={(e) => console.log(e.target.value)}
          label="Function that is called on first render"
        />
        <Checkbox
          id="question-4"
          name="question-4"
          onChange={(e) => console.log(e.target.value)}
          label="Function that is called on first render"
        />
      </div>
    </S.QuestionCard>
  );
}

export default QuestionCard;
