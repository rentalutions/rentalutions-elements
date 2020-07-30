import React, { forwardRef } from "react"
import styled, { keyframes, css } from "styled-components"
import {
  color,
  space,
  layout,
  flexbox,
  border,
  typography,
  buttonStyle,
} from "styled-system"
import { motion, AnimatePresence } from "framer-motion"

const spin = keyframes`
  0% {
      transform: rotate(0);
      stroke-dashoffset: 0;
    }
  50% {
    stroke-dashoffset: 1;
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(720deg);
    stroke-dashoffset: 0;
  }
`

const ButtonWrapper = styled.button`
  position: relative;
  appearance: none;
  border-style: solid;
  white-space: nowrap;
  border-color: ${({ theme, color }) => theme.colors[color] || color};
  text-transform: uppercase;
  outline: none;
  transition: 200ms;
  ${color};
  ${space};
  ${layout};
  ${flexbox};
  ${border};
  ${buttonStyle};
  ${typography};
  ${({ loading }) =>
    loading &&
    css`
      pointer-events: none;
    `}
  &:hover {
    color: ${({ theme }) => theme.colors.ui_100};
    background: ${({ color, theme }) => theme.colors[color] || color};
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.ui_300};
    background: ${({ theme }) => theme.colors.ui_500};
    border-color: transparent;
    cursor: not-allowed;
  }
  .spinner {
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .spinner__path {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    animation: ${spin} 3s ease infinite;
    animation-fill-mode: forwards;
    transform-origin: 50% 50%;
  }
`

const variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

function Button({ children, loading, disabled, ...props }, ref) {
  const isLoading = loading && !disabled
  return (
    <ButtonWrapper {...{ ...props, disabled, loading, ref }}>
      <AnimatePresence>
        {isLoading && (
          <motion.svg
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            viewBox="0 0 24 24"
            fill="none"
            className="spinner"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="spinner__path"
              pathLength="1"
            />
          </motion.svg>
        )}
      </AnimatePresence>
      <motion.span
        variants={variants}
        animate={isLoading ? "initial" : "enter"}
      >
        {children}
      </motion.span>
    </ButtonWrapper>
  )
}

ButtonWrapper.defaultProps = {
  py: "1rem",
  px: "2rem",
  borderRadius: "0.25rem",
  borderWidth: "2px",
  bg: "transparent",
  color: "blue_500",
  fontSize: "body",
  fontFamily: "body",
  fontWeight: "black",
}

export default forwardRef(Button)
