import styled from "@emotion/styled";

export const QuestionCard = styled.article`
  background-color: white;
  border-radius: 8px;

  .question-card__info-wrapper {
    background-color: #1e293b;
    padding: 10px 40px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    color: white;
  }

  .question-card__info-emoji {
    font-size: 25px;
  }

  .question-card__question-wrapper {
    padding: 60px 40px;
  }
`;
