import styled from "@emotion/styled";

export const QuestionCard = styled.article`
  background-color: white;
  border-radius: 8px;
  width: 70%;
  max-width: 700px;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  margin: 40px 0;

  .question-card__counter-wrapper {
    background-color: ${({ theme }) => theme.colors.gray[800]};
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
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0;
  }

  .question-card__code {
    padding: 30px 42px !important; /* package overwrite */
    background: #222437 !important; /* package overwrite */
    border: none !important; /* package overwrite */
    border-radius: 0 !important; /* package overwrite */
  }

  .question-card__question-wrapper {
    padding: 50px 40px 30px 40px;
  }

  .checkbox__label-wrapper {
    margin-top: 1px;
  }

  .question-card__button-wrapper {
    padding: 13px 40px 50px 40px;
    display: flex;
    justify-content: flex-end;
  }
`;
