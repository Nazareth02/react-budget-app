import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body {
    font-family: 'Inter', sans-serif;
}
input,button{
    border: 0;
}
ul,li{
    list-style: none;
    text-decoration: none;
    
}
`;
