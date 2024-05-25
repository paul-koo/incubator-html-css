import styled from "styled-components";
type ScreenPictureType = {
    roads: string,
}
export const ScreenPicture = styled.img.attrs<ScreenPictureType>((props) => ({
    src: props.roads,

}))`
    
`

