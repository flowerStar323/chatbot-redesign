import React from "react";
import styled, { keyframes } from "styled-components";
// import { themeGet } from '@styled-system/theme-get';
import css from "@styled-system/css";
import { compose, variant, border, space, layout } from "styled-system";
import theme from "../../theme";

export const StyledButton = styled.button(
  (props) =>
    css({
      // px: "20px",
      py: "0",

      fontSize: ["base"],
      fontWeight: "bold",
      cursor: props.disabled ? "not-allowed" : "pointer",
      transition: "all 0.3s ease",
      width: props.width,
    }),
  {
    appearance: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    textAlign: "center",
    textDecoration: "none",
    fontFamily: "inherit",
    lineHeight: "1",
    height: "30px",
    borderRadius: "10px",

    "&:focus": {
      outline: "none",
    },
  },
  variant({
    variants: {
      blue: {
        color: theme.textBlue,
        bg: theme.bgBlue,
        border: "none",
        "&:hover": { bg: theme.bgBlueHover },
      },
      lightBlue: {
        color: theme.colorWhite,
        bg: theme.bgLightBlue,
        border: "none",
        "&:hover": { bg: theme.bgLightBlueHover },
      },
      white: {
        color: "black",
        bg: "white",
        border: "none",
        "&:hover": { bg: theme.colorWhite },
      },
      transparent: {
        color: theme.colorBlack,
        bg: theme.transparent,
        border: `1px solid ${theme.colorBlack}`,
        "&:hover": {
          borderColor: theme.colorBlackHover,
        },
      },
      outlinedGray: {
        color: "gray.750",
        bg: "white",
        border: "1px solid",
        borderColor: "gray.750",
        "&:hover": {
          borderColor: "orange.regular",
          color: "orange.regular",
        },
      },
      lightOrange: {
        color: theme.colorWhite,
        bg: theme.bgOrange,
        border: theme.bgOrange,
        "&:hover": { bg: theme.bgOrangeHover },
      },
      lightRed: {
        color: theme.colorWhite,
        bg: theme.bgLightRed,
        border: theme.bgLightRed,
        "&:hover": { bg: theme.bgLightRedHover },
      },
      royalBlue: {
        color: theme.colorWhite,
        bg: theme.bgRoyalBlue,
        border: theme.bgRoyalBlue,
        "&:hover": { bg: theme.bgRoyalBlueHover },
      },
      orchid: {
        color: theme.colorWhite,
        bg: theme.bgOrchid,
        border: theme.bgOrchid,
        "&:hover": { bg: theme.bgOrchidHover },
      },
      grey: {
        color: theme.colorWhite,
        bg: theme.bgGrey,
        border: theme.bgGrey,
        "&:hover": { bg: theme.bgGreyHover },
      },
      yellow: {
        color: theme.colorWhite,
        bg: theme.bgYellow,
        border: theme.bgYellow,
        "&:hover": { bg: theme.bgYellowHover },
      },
      lime: {
        color: theme.colorWhite,
        bg: theme.bgLime,
        border: theme.bgLime,
        "&:hover": { bg: theme.bgLimeHover },
      },
      blueViolet: {
        color: theme.colorWhite,
        bg: theme.bgBlueViolet,
        border: theme.bgBlueViolet,
        "&:hover": { bg: theme.bgBlueVioletHover },
      },
      pink: {
        color: theme.colorWhite,
        bg: theme.pink,
        border: theme.pink,
        "&:hover": { bg: theme.bgBlueVioletHover },
      },
    },
  }),
  variant({
    prop: "size",
    variants: {
      medium: {
        height: "48px",
        borderRadius: "48px",
        fontSize: 16,
        px: 21,
        py: 21,
      },
      noRadius: {
        height: "23px",
        borderRadius: " 0 0 0 0px",
        fontSize: 9,
        px: 26,
        py: 12,
      },
      small: {
        height: "23px",
        borderRadius: "25px",
        fontSize: 9,
        px: 26,
        py: 12,
      },
      leftRadius: {
        height: "23px",
        borderRadius: " 0 0 0 9px",
        fontSize: 9,
        px: 26,
        py: 12,
      },
      rightRadius: {
        height: "23px",
        borderRadius: " 0 0 9px 0",
        fontSize: 9,
        px: 26,
        py: 12,
      },
    },
  }),
  compose(border, space, layout)
);
export const StyledDropdown = styled.button(
  (props) =>
    css({
      // px: "20px",
      py: "0",

      fontSize: ["base"],
      cursor: props.disabled ? "not-allowed" : "pointer",
      transition: "all 0.3s ease",
      width: props.width,
    }),
  {
    appearance: "none",
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // flexShrink: 0,
    textAlign: "center",
    textDecoration: "none",
    fontFamily: "inherit",
    lineHeight: "1",
    height: "44px",
    borderRadius: "10px",

    "&:focus": {
      outline: "none",
    },
  },
  variant({
    variants: {
      blue: {
        color: theme.textBlue,
        bg: theme.bgBlue,
        border: "none",
        "&:hover": { bg: theme.bgBlueHover },
      },
      lightBlue: {
        color: theme.colorWhite,
        bg: theme.bgLightBlue,
        border: "none",
        "&:hover": { bg: theme.bgLightBlueHover },
      },
      white: {
        color: "black",
        bg: "white",
        border: "none",
        "&:hover": { bg: theme.colorWhite },
      },
      transparent: {
        color: theme.colorBlack,
        bg: theme.transparent,
        border: `1px solid ${theme.colorBlack}`,
        "&:hover": {
          borderColor: theme.colorBlackHover,
        },
      },
      outlinedGray: {
        color: "gray.750",
        bg: "white",
        border: "1px solid",
        borderColor: "gray.750",
        "&:hover": {
          borderColor: "orange.regular",
          color: "orange.regular",
        },
      },
      lightOrange: {
        color: theme.colorWhite,
        bg: theme.bgOrange,
        border: theme.bgOrange,
        "&:hover": { bg: theme.bgOrangeHover },
      },
      lightRed: {
        color: theme.colorWhite,
        bg: theme.bgLightRed,
        border: theme.bgLightRed,
        "&:hover": { bg: theme.bgLightRedHover },
      },
      royalBlue: {
        color: theme.colorWhite,
        bg: theme.bgRoyalBlue,
        border: theme.bgRoyalBlue,
        "&:hover": { bg: theme.bgRoyalBlueHover },
      },
      orchid: {
        color: theme.colorWhite,
        bg: theme.bgOrchid,
        border: theme.bgOrchid,
        "&:hover": { bg: theme.bgOrchidHover },
      },
      grey: {
        color: theme.colorWhite,
        bg: theme.bgGrey,
        border: theme.bgGrey,
        "&:hover": { bg: theme.bgGreyHover },
      },
      yellow: {
        color: theme.colorWhite,
        bg: theme.bgYellow,
        border: theme.bgYellow,
        "&:hover": { bg: theme.bgYellowHover },
      },
      lime: {
        color: theme.colorWhite,
        bg: theme.bgLime,
        border: theme.bgLime,
        "&:hover": { bg: theme.bgLimeHover },
      },
      blueViolet: {
        color: theme.colorWhite,
        bg: theme.bgBlueViolet,
        border: theme.bgBlueViolet,
        "&:hover": { bg: theme.bgBlueVioletHover },
      },
      pink: {
        color: theme.colorWhite,
        bg: theme.pink,
        border: theme.pink,
        "&:hover": { bg: theme.bgBlueVioletHover },
      },
    },
  }),
  variant({
    prop: "size",
    variants: {
      medium: {
        height: "48px",
        borderRadius: "48px",
        fontSize: 16,
        px: 21,
        py: 21,
      },
      noRadius: {
        height: "23px",
        borderRadius: " 0 0 0 0px",
        fontSize: 9,
        px: 26,
        py: 12,
      },
      small: {
        height: "23px",
        borderRadius: "25px",
        fontSize: 9,
        px: 26,
        py: 12,
      },
      leftRadius: {
        height: "23px",
        borderRadius: " 0 0 0 9px",
        fontSize: 9,
        px: 26,
        py: 12,
      },
      rightRadius: {
        height: "23px",
        borderRadius: " 0 0 9px 0",
        fontSize: 9,
        px: 26,
        py: 12,
      },
    },
  }),
  compose(border, space, layout)
);
const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const Spinner = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 10px;
  border: 3px solid #ffffff;
  border-top: 3px solid ${theme.bgPrimary};
  border-radius: 50%;
  transition-property: transform;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export const Button = ({
  children,
  disabled = false,
  loading = false,
  width = "auto",
  ...props
}) => (
  <StyledButton {...props} disabled={disabled} width={width}>
    {children}
    {loading && <Spinner />}
  </StyledButton>
);
