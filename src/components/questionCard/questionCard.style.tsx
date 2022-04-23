import styled from "@emotion/styled";

export const QuestionCard = styled.article`
  background-color: white;
  border-radius: 8px;
  width: 70%;
  max-width: 700px;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));

  .question-card__counter-wrapper {
    background-color: #1e293b;
    padding: 18px 40px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .question-card__counter {
    font-weight: 500;
  }

  .question-card__info-emoji {
    font-size: 25px;
    margin-right: 10px;
  }

  .question-card__info-title {
    color: white;
    margin-bottom: 0;
  }

  .question-card__code {
    padding: 30px 42px !important; /* package overwrite */
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
  }

  .question-card__question-wrapper {
    padding: 50px 40px 30px 40px;
  }

  .checkbox__label-wrapper {
    margin-top: 1px;
  }
`;
