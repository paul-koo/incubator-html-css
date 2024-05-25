import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const Paragraph = styled.p`
    font-size: ${myTheme.fontSize.small};
    color: ${myTheme.color.second};
    font-weight: ${myTheme.fontWeight.thin};
    line-height: 20px;
    margin: 20px 10px 0px;
`