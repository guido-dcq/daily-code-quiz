import styled from "@emotion/styled";

export const RadioButton = styled.div`
  display: flex;
  margin-bottom: 12px;

  input[type="radio"]:hover {
    cursor: pointer;
  }

  input[type="radio"] {
    appearance: none;
    border-width: 1px;
    border-radius: 100%;
    height: 15px;
    width: 15px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    transform: translate3d(0, 1px, 0);
    margin-right: 10px;
    flex-shrink: 0;
  }

  input[type="radio"]:checked {
    border: 1px solid transparent;
    background-color: ${({ theme }) => theme.colors.primary.default};
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3.5'/%3e%3c/svg%3e");
  }
`;
