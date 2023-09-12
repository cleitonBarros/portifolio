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
    color: ${({ theme }) => theme.COLORS.HEADER.MODE.DARK};
  }
  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;

    &:hover + label {
      text-decoration: line-through
        ${({ theme }) => theme.COLORS.HEADER.MODE.SLASH};
    }
    &:checked + label {
      text-decoration: line-through
        ${({ theme }) => theme.COLORS.HEADER.MODE.SLASH};
      pointer-events: none;
    }
    &:focus + label {
      outline: 1px solid ${({ theme }) => theme.COLORS.HEADER.MODE.SLASH};
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    label {
      font-size: 2rem;
    }
  }
  @media (min-width: 1280px) {
    label {
      font-size: 2.4rem;
    }
  }
`;
export const Line = styled.div`
  width: 15vw;
  height: 1.5px;
  background-color: ${({ theme }) => theme.COLORS.HEADER.MODE.BAR};
`;
