// Style
import * as S from "./questionCard.style";

function QuestionCard() {
  return (
    <S.QuestionCard>
      <div className="question-card__info-wrapper">
        <span
          role="img"
          aria-label="hand waving"
          className="question-card__info-emoji"
        >
          👋
        </span>
        <span>Daily Code Quiz - {Date.now()}</span>
      </div>
      <div className="question-card__question-wrapper">
        <h1>Card</h1>
        <p>
          {
            "What does the following expression return? typeof(3) === typeof(4.32);"
          }
        </p>
      </div>
    </S.QuestionCard>
  );
}

export default QuestionCard;
