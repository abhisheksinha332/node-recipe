import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
    width : ${props => props.isSidebarOpen ? '18%' : '7%'};
    max-width: 288px;
    min-width : 80px;
    background :yellow;
    
    height:100%;
    position: fixed;
    z-index: 1;
    overflow-y: auto;
    will-change: transform;
    backface-visibility: hidden;

    background-image: linear-gradient(315deg, 
    ${props=>props.Palette.bgColor1} 0%, 
    ${props=>props.Palette.bgColor2} 74%),
    url(${props=>props.backgroundImage} );
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color:${props=>props.Palette.fontColorSelected};
  
    transition: 0.2s ease-in all;
`
export const Header = styled.div`
    display:flex;
    justify-content: center;
    padding:20px 0 ;
    padding-bottom: 20px;
    font-size:42px;
    letter-spacing: 3px;
    font-family: 'Sassy Frass', cursive;
`
export const menuItemContainer = styled.div`
    
`
export const Container = styled.div`
    
`
export const subMenuContainer = styled.div`
color: ${props => props.selected ?  props.Palette.fontColorSelected :props.Palette.fontColor };
font-size:14px;
transition: 0.4s ease-in all;

${props =>props.isSidebarOpen && `padding-left:15%`}
${props =>!props.isSidebarOpen && `text-align:center`}
`
export const SubMenuList = styled.p`
    color:${props => props.selected ? 'rgb(255,255,255)' :'rgb(19,15,64)'};

    &:hover{
        color:  ${props => props.Palette.fontColorSelected}
    }
`

export const Item = styled.div`
    ${props=> !props.isSidebarOpen ? `
    text-align:center; background-color: ${props.Palette.selectedBackgroundCollapsedMode} ` :``
    

    }
    position: relative;
    padding: 6px 20px;
    font-weight : 600;
    color: ${props => props.selected ? props.Palette.fontColorSelected :props.Palette.fontColor };
    white-space: nowrap;
    &:hover{
        color:  ${props => props.Palette.fontColorSelected};
        transition: 0.1s ease-in all;
    }
    &:after{
        content:'';
        border: 1px solid ${props => props.selected ? props.Palette.fontColorSelected :props.Palette.dividerColor };
        margin: 8px 0 4px 2px;
        display:block;${props => props.isOpen ? 'none' : 'block'}
        transition: 0.1s ease-in all; 
       
    }

    ${props=> !props.selected && `
        &:hover{
            &:after{
                border : 1px solid rgba(255,255,255,0.2);
            }
            transition: 0.1s ease-in all; 
        }
    `}
`



export const Icon = styled.img`
    padding-right:${props=> props.isSidebarOpen ? '16px' : '0px'};
    height:16px;
    width:${props=> props.isSidebarOpen ? '16px' : '16px'};
    color:white;
    transition: 0.2s ease-in all; 
`

export const Text = styled.p`
    display: ${props=> props.isSidebarOpen ? 'inline' : 'none'};
    transition: 0.2s ease-in all; 
`


export const ToggleContainer = styled.div`
    position: absolute;
    width: 30%;
    margin : 0 auto;
    left: 0;
    right : 0;
    bottom: 10%;
`
export const Toggle = styled.div`
    height: 40px;
    cursor: pointer;
    position:relative;
    &:after {
        content:'';
        position:absolute;
        left:0;
        top:0.25em;
        width:100%;
        height:0.1em;
        background:white;
        box-shadow: 0 0.75em 0 0 white, 0 1.5em 0 0 white
    }
`

export const DropdownIcon = styled.span`
    position: absolute;
    top:${props => props.isOpen ? '16px' :'12px' } ;
    right: 24px;
    border: solid  ${props => props.selected ?  props.Palette.fontColorSelected :props.Palette.fontColor };
    border-width: 0 1px 1px 0;
    padding : 3px;
    transform:${props => props.isOpen ? 'rotate(-135deg)' :'rotate(45deg)' } ;
    transition:0.4s;
    &:hover{
        border: solid  rgb(255,255,255);
        border-width: 0 1px 1px 0;
        transition: 0.1s ease-in all;
    }
`