import styled, { css } from "styled-components";

const StyledContainer =  styled.div`
font-family: "Roboto", "Arial";
background-color:  'transparent';
${props =>
  props.padding &&
  css`
    padding:${props.padding};
  `}
  ${props =>
  props.margin &&
  css`
    margin:${props.margin};
  `}
  
  ${props =>
    props.backgroundColor &&
    css`
    background-color:${props.backgroundColor};
    `}
  
      
`;
export { StyledContainer };
