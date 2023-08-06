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
    &.dark {
      color: ${({ theme }) => theme.COLORS.WHITE[100]};
    }
  }
  input {
    cursor: pointer;
    display: none;
    display: hidden;
    opacity: 0;

    &:hover + label {
      text-decoration: line-through ${({ theme }) => theme.COLORS.PINK[500]};
      &.dark {
        text-decoration: line-through ${({ theme }) => theme.COLORS.GREEM[100]};
      }
    }
    &:checked + label {
      text-decoration: line-through ${({ theme }) => theme.COLORS.PINK[500]};
      &.dark {
        text-decoration: line-through ${({ theme }) => theme.COLORS.GREEM[100]};
      }
    }
  }

  @media ${({ theme }) => theme.DEVICE.tablet} {
    flex-direction: row;
  }
  @media ${({ theme }) => theme.DEVICE.desktop} {
    label {
      font-size: 2rem;
    }
  }
`;
export const Line = styled.div`
  width: 15vw;
  height: 1.5px;
  background-color: ${({ theme }) => theme.COLORS.PURPLE[900]};

  &.dark {
    background-color: ${({ theme }) => theme.COLORS.WHITE[100]};
  }
`;
