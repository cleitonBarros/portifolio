import { styled, keyframes } from "styled-components";

export const Container = styled.header``;
export const Nav = styled.nav``;

const textIn = keyframes`
  0% {
		 opacity: 0;
	}
	 20% {
		 opacity: 0;
	}
	 100% {
		 opacity: 0.3;
	}
`;
const menuOpen = keyframes`
  0% {
		 height: 0;
		 transform: translatey(-50%);
	}
	 100% {
		 height: 100vh;
		 transform: translatey(0%);
	}
`;
const menuMobile = keyframes`
  0% {
     transform: translateX(200%);
  }
  100% {
    transform: translateX(0%);
  }
`;
const submenu = keyframes`
  0% {
		 transform: translatex(50px) rotate(5-deg);
		 opacity: 0;
	}
	 50% {
		 transform: translatex(50px) rotate(-5deg);
		 opacity: 0;
	}
	 100% {
		 opacity: 1;
		 transform: translatex(0px) rotate(0deg);
	}
`;
const textOut = keyframes`
  0% {
    opacity: 0.3;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }`;
const menuClose = keyframes`
    0% {
		 height: 100vh;
	}
	 100% {
		 height: 0;
	}
`;

export const NavBar = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.COLORS.WHITE[100]};
  box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.3);
  .logo {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.ACQUA_GREEN[900]};
    transition: all 0.4s ease;

    &:hover {
      opacity: 0.5;
    }
  }
  .icons {
    display: flex;

    .icon-menu {
      display: flex;
      width: 30px;
      height: 30px;
      z-index: 2;
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 5px;

      span {
        background-color: ${({ theme }) => theme.COLORS.ACQUA_GREEN[900]};
        width: 30px;
        height: 3px;
        position: absolute;
        display: flex;
        justify-content: flex-end;
        transition: all 0.2s ease;
        right: 0;
        border-radius: 10px;

        &:before,
        &:after {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          background-color: ${({ theme }) => theme.COLORS.ACQUA_GREEN[900]};
          border-radius: 5px;
        }
        &:before {
          transform: translateY(-10px);
          transition: all 0.3s 0.1s ease;
        }
        &:after {
          transform: translateY(10px);
          transition: all 0.3s 0.2s ease;
        }
      }

      &:hover {
        span {
          width: 30px;
        }
        span:before {
          width: 25px;
        }
        span:after {
          width: 20px;
        }
      }

      &.icon-closed {
        justify-content: center;
        span {
          background-color: ${({ theme }) => theme.COLORS.WHITE[100]};
          justify-content: center;
          width: 0px;
          right: initial;
          opacity: 0.5;
          transition: all 0.6s ease;
          &:before,
          &:after {
            width: 30px;
            background-color: ${({ theme }) => theme.COLORS.WHITE[100]};
          }
          &:before {
            transform: rotate(45deg);
          }
          &:after {
            transform: rotate(-45deg);
          }
        }
        &:hover span {
          width: 0;
          opacity: 1;
        }
      }
    }
  }
  @media (max-width: 767px) {
    height: 60px;
    padding: 0 20px;

    .icons .icon-menu.icon-closed:hover span:before {
      transform: rotate(45deg);
    }
    .icons .icon-menu.icon-closed:hover span:after {
      transform: rotate(-45deg);
    }
  }
`;
export const Menu = styled.ul`
  display: none;

  &.open {
    display: flex;
    z-index: 3;
    overflow: hidden;

    li.menu-link {
      width: 25%;
      height: 100vh;
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      transition: all 0.4s ease-in-out;
      animation: ${menuOpen} 0.6s ease forwards;

      &:nth-child(1) {
        background-color: ${({ theme }) => theme.COLORS.ACQUA_GREEN[900]};
        animation-duration: 0.6s;
      }
      &:nth-child(2) {
        background-color: ${({ theme }) => theme.COLORS.ACQUA_GREEN[800]};
        animation-duration: 0.8s;
      }
      &:nth-child(3) {
        background-color: ${({ theme }) => theme.COLORS.ACQUA_GREEN[700]};
        animation-duration: 1s;
      }
      &:nth-child(4) {
        background-color: ${({ theme }) => theme.COLORS.ACQUA_GREEN[600]};
        animation-duration: 1.2s;
      }
      &:nth-child(5) {
        background-color: ${({ theme }) => theme.COLORS.ACQUA_GREEN[500]};
        animation-duration: 1.4s;
      }
      &:hover {
        width: 50%;
        transition: all 0.4s ease-in-out;

        .text-item {
          color: ${({ theme }) => theme.COLORS.WHITE[100]};
          font-size: 30px;
          height: 50%;
          transform: rotate(0deg);
          opacity: 1;
          letter-spacing: 10px;

          .icon {
            opacity: 1;
            transform: translateY(40px);
            transition: all 0.3s 0.4s ease-in-out;
          }
        }
      }
      &:hover.active {
        .text-item {
          transform: rotate(0deg) translateX(0px) translateY(-50%);
          transform-origin: center center;
          transition: all 0.6s ease-in-out;

          .icon {
            transition: all 0.3s ease-in-out;
            transform: translateY(40px) rotate(-180deg);
          }
        }
        .submenu {
          transform: translateY(0);
          height: 50%;
          z-index: 1;
          opacity: 1;
          bottom: 0;

          .sub-item {
            display: flex;
            animation: ${submenu} 1s ease forwards;
            z-index: 2;

            &:nth-child(1) {
              animation-duration: 1s;
            }
            &:nth-child(2) {
              animation-duration: 1.2s;
            }
            &:nth-child(3) {
              animation-duration: 1.4s;
            }
          }
        }
      }

      .text-item {
        color: ${({ theme }) => theme.COLORS.WHITE[100]};
        text-transform: uppercase;
        font-weight: 800;
        font-size: 40px;
        opacity: 0.3;
        width: 100%;
        height: 20%;
        letter-spacing: 5px;
        transform: rotate(-90deg) translateX(0px);
        transition:
          all 0.4s 0.2s ease-in-out,
          letter-spacing 0.2s ease-in,
          opacity 0.2s ease-in;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transform-origin: center;
        animation: ${textIn} 0.6s ease;
        position: absolute;
        .icon {
          position: absolute;
          display: flex;
          width: 30px;
          height: 30px;
          opacity: 0;
          transform: translateY(0px);
          transition: all 0.4s ease-in-out;
        }
      }
      .submenu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 40px;
        box-sizing: border-box;
        opacity: 0;
        z-index: -1;
        transition: all 0.6s ease-in-out;
        height: 0%;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.1);
        bottom: 0;
        transform: translateY(50%);
        position: absolute;

        .sub-item {
          display: none;
          margin: 10px 0;
          color: ${({ theme }) => theme.COLORS.WHITE[100]};
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 20px;
          font-weight: 600;
          position: relative;
          width: fit-content;
          cursor: pointer;
          padding: 5px 15px;

          &:after {
            content: "";
            height: 0%;
            width: 3px;
            background-color: ${({ theme }) => theme.COLORS.WHITE[100]};
            opacity: 0.3;
            position: absolute;
            top: 0;
            left: 0;
            transition:
              height 0.4s 0.3s ease,
              width 0.4s ease;
          }
          &:hover:after {
            width: 100%;
            height: 100%;
            transition:
              height 0.4s ease,
              width 0.4s 0.3s ease;
          }
        }
      }
    }
  }
  &.close li.menu-link {
    animation: ${menuClose} 1s ease forwards;
  }

  &.close li.menu-link .text-item {
    animation: ${textOut} 0.6s ease forwards;
  }

  @media screen and (max-width: 768px) {
    &.open {
      height: 100vh;
      flex-direction: column;
    }
    &.close li.menu-link {
      animation: ${menuClose} 0.5s ease forwards !important;
    }
    &.open li.menu-link {
      width: 100%;
      height: 25%;
      animation: ${menuMobile} 0.5s ease forwards;
      transform: translateY(0);
      right: 0;

      &:hover {
        width: 100%;
      }
      &:hover .text-item {
        color: ${({ theme }) => theme.COLORS.WHITE[100]};
        width: 100%;
        font-size: 30px;
        letter-spacing: 5px;
      }
      .text-item {
        transform: rotate(0deg);
        font-size: 30px;
      }
    }
  }
`;
