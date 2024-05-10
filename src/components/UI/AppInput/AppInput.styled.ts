import { css, styled } from "styled-components";

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin-bottom: 10px;
`;

interface IStyledInputProps {
  $isError: boolean;
}

export const SCAppInput = styled.input<IStyledInputProps>`
	outline: 0;
	font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
	padding: 12px 15px;
	background-color: ${props => props.theme.colors.bgc};
	border: 2px solid ${props => props.theme.colors.disabledBgc};
	width: 100%;

	${props =>
		props.$isError &&
		css`
			border-color: ${props => props.theme.colors.red};
		`}

	transition: 200ms;

	&:is(:hover, :focus) {
		border-color: ${props => props.theme.colors.primecolor};
	}
`
