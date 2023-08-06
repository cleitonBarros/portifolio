import { styled } from "styled-components";

export const Container = styled.div`
  width: 25vw;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  label {
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.MODE.DARK};
  }
  input {
    cursor: pointer;
    display: none;
    display: hidden;
    opacity: 0;

    &:hover + label {
      text-decoration: line-through ${({ theme }) => theme.COLORS.MODE.SLASH};
    }
    &:checked + label {
      text-decoration: line-through ${({ theme }) => theme.COLORS.MODE.SLASH};
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1280px) {
    label {
      font-size: 2rem;
    }
  }
`;
export const Line = styled.div`
  width: 15vw;
  height: 1.5px;
  background-color: ${({ theme }) => theme.COLORS.MODE.BAR};
`;
