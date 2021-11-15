import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import * as s from './Sidebar.styles'

const Sidebar = ({backgroundImage, sidebarHeader, menuItem, Palette }) => {

    const [selected, setSelected] = useState(menuItem[0].name )
    const [subMenuItems, setSubMenuItems] = useState({} )
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    useEffect(() => {
        
    }, [isSidebarOpen])

    const clickHandler =(name, index) => {
        
        setSelected(name);
        
        const submenuCopy = JSON.parse(JSON.stringify(subMenuItems)) 
     //   const submenuCopy1 = submenuCopy.isOpen
        // console.log('index: '+ index );
       // console.log(submenuCopy1);
        if(subMenuItems.hasOwnProperty(index)){
           // console.log("hello");
            submenuCopy[index]['isOpen'] = !subMenuItems[index]['isOpen']
            setSubMenuItems(submenuCopy);
        }
        else{
            for(let i in subMenuItems){
                submenuCopy[i]['isOpen'] = false;
                submenuCopy[i]['selected'] = null;
            }
            setSubMenuItems(submenuCopy)
        }

    }

    const subClickHandler = (index, submenuIndex)=>{
        const submenuCopy = JSON.parse(JSON.stringify(subMenuItems))

        submenuCopy[index]['selected'] = submenuIndex
        setSubMenuItems(submenuCopy)
    }

    useEffect(() => {
        const updateWindowWidth = () =>{
         //   console.log(window.innerWidth)
            if(window.innerWidth<1042){
                setIsSidebarOpen(false)
            }
            else{
                setIsSidebarOpen(true)
            }
        }
      
      window.addEventListener('resize',updateWindowWidth)

      return () => window.removeEventListener('resize',updateWindowWidth)
    }, [isSidebarOpen])
    
     useEffect(() => {
    const newSubmenus = {};

    menuItem.forEach((item, index) => {
      const hasSubmenus = !!item.subMenuItem.length;

      if (hasSubmenus) {
        newSubmenus[index] = {};
        newSubmenus[index]['isOpen'] = false;
        newSubmenus[index]['selected'] = null;
      }
    })
    setSubMenuItems(newSubmenus)
    }, [menuItem])
  // console.log(subMenuItems);
    const item = menuItem.map((item,index)=>{
    const isItemSelected = selected === item.name;
    const hasSubMenu = !!item.subMenuItem.length;
    const subMenu = item.subMenuItem.map((subMenus, subIndex)=>{
    const issubmenuSelected = subMenuItems[index]?.selected === subMenuItems
    //console.log(issubmenuSelected);
        return(
            
            <Link to={`${item.to}${subMenus.to}`} style={{textDecoration: 'none'}} key={subIndex} >
                <s.SubMenuList onClick={()=>subClickHandler(index,subIndex)} selected={issubmenuSelected} Palette={Palette} >{subMenus.name}</s.SubMenuList>
            </Link>
        )
    })
      //  console.log(item.subMenuItem)
     //   console.log(subMenuItems)
        const isOpen = subMenuItems[index]?.isOpen;
  
        // console.log(`${item.name} selected? ${isItemSelected}`)
        return(
            <s.Container key={index}>
                <Link style={{textDecoration:'none'}} to={item.to}>
                <s.Item  selected={isItemSelected} onClick={()=>clickHandler(item.name, index) } isOpen={isOpen} isSidebarOpen={isSidebarOpen} Palette={Palette}>
                    <s.Icon src={item.icon} isSidebarOpen={isSidebarOpen}/>

                    <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
                    {hasSubMenu && isSidebarOpen && (
                        <s.DropdownIcon selected={isItemSelected} isOpen={isOpen} Palette={Palette}  />
                    )}
                </s.Item>
               </Link>
                   {hasSubMenu && isOpen && (
                        <s.subMenuContainer selected={isItemSelected} isSidebarOpen={isSidebarOpen} Palette={Palette}>{subMenu}
                            </s.subMenuContainer>
                   )} 
             
            </s.Container>
        )
    })
  //  console.log(isSidebarOpen)
    return (
        <s.SidebarContainer backgroundImage={backgroundImage} isSidebarOpen={isSidebarOpen} Palette={Palette}>
            <s.Header> {isSidebarOpen ? sidebarHeader.fullName : sidebarHeader.name} </s.Header>
            <s.menuItemContainer>
                {item}
            </s.menuItemContainer>
            <s.ToggleContainer onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
                <s.Toggle />
            </s.ToggleContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar
