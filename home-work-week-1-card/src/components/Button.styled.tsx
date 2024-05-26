import styled, { css } from "styled-components";
import { myTheme } from "../styles/Theme.styled";

type ButtonPropsType = {
    status: "active" | "inactive";
}
export const Button = styled.button<ButtonPropsType>`
    width: 86px;
    height: 30px;
    font-size: 10px;
    font-weight: ${myTheme.fontWeight.bold};
    border: none;
    border-radius: 5px;

    ${props => props.status === "active" && css<ButtonPropsType>`
        background-color: ${myTheme.color.button};
        color: ${myTheme.backgroundColor.main};

        &:hover {
            cursor: pointer;
            background-color: ${myTheme.backgroundColor.main};
            color: ${myTheme.color.button};
            border: 2px solid ${myTheme.color.button};
        }

    `} 

    ${props => props.status === "inactive" && css<ButtonPropsType>`
        background-color: ${myTheme.backgroundColor.main};
        color: ${myTheme.color.button};
        border: 2px solid ${myTheme.color.button};

        &:hover {
            cursor: pointer;
            background-color: ${myTheme.color.button};
            color: ${myTheme.backgroundColor.main};
        }

    `}
    
    /* &:hover {
        background-color: ${(props) => props.status === "inactive" ? `${myTheme.color.button}` : `${myTheme.backgroundColor.main}`};
        color: ${props => props.status === "inactive" ? `${myTheme.backgroundColor.main}` : `${myTheme.color.button}`};
    }; */
`