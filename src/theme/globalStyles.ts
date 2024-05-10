import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-width: 530px;
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  background-color: var(--bgc);
  color: var(--text-color);
}

button,
input {
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;
}

a {
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: underline;
    color: var(--dblue);
  }

  &:visited {
    color: var(--blue);
  }
}

._no-select {
  -webkit-touch-callout: none; //? iOS Safari
  -webkit-user-select: none; //? Safari
  -khtml-user-select: none; //? Konqueror HTML
  -moz-user-select: none; //? Old versions of Firefox
  -ms-user-select: none; //? Internet Explorer/Edge
  user-select: none; //? Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox
}

button {
  cursor: pointer;
  padding: 10px 16px;
  font-size: inherit;
  background-color: var(--prime-color);
  color: white;
  margin-top: 10px;
  transition: 200ms;

  &:disabled {
    background-color: var(--disabled-bgc);
  }

  &.primary {
    background-color: var(--prime-color);
    color: white;
  }

  &.secondary {
    background-color: var(--light-gray);
    color: var(--placeholder-color);
  }

  &:disabled:hover {
    cursor: default;
    opacity: 0.5;
  }

  &:hover {
    background-color: #0053a6;
  }

  &:active {
    transition: 100ms;
    translate: 0 0;
    box-shadow: none;
  }
}

input {
  margin: 0px 10px 10px 0px;
  padding: 12px 15px;
  background-color: var(--bgc);
  border: 1px solid transparent;

  transition: 200ms;

  &:is(:hover, :focus) {
    border-color: var(--blue);
  } 
}

@media (max-width: 730px) {
  input, button {
    padding: 10px 12px;
  }
}
`