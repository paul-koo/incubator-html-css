import styled from "styled-components";
type ScreenPictureType = {
    road: string,
}
export const ScreenPicture = styled.img.attrs<ScreenPictureType>((props) => ({
    src: props.road,
}))`
    width: 100%;
    height: 170px;
`

