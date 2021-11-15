import styled from "@emotion/styled";

export const container = styled.div`

background-image: linear-gradient(315deg, 
   red 0%, 
    blue 74%),
    url(${props=>props.backgroundImage} );
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    max-width: 288px;
    min-width : 80px;
`