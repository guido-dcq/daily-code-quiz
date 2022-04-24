import styled from "@emotion/styled";

export const Checkbox = styled.div`
  display: flex;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  padding: 20px 10px;
  border-radius: 8px;
  cursor: pointer;

  &.is-checked {
    background-color: ${({ theme }) => theme.colors.primary.lighter};
    border-color: ${({ theme }) => theme.colors.primary.default};
  }

  input[type="checkbox"]:hover {
    cursor: pointer;
  }

  input[type="checkbox"] {
    appearance: none;
    border-width: 1px;
    border-radius: 0.25rem;
    height: 16px;
    width: 16px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    transform: translate3d(0, 1px, 0);
    margin-right: 8px;
    flex-shrink: 0;
  }

  &.is-checked input[type="checkbox"],
  input[type="checkbox"]:checked {
    border: 1px solid transparent;
    background-color: ${({ theme }) => theme.colors.primary.dark};
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  }
`;
