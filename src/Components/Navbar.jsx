import { Box, Image, Input, InputGroup, InputLeftElement, Spacer, Stack, useDisclosure } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import External from "../Commons/ShippingBoxes";
import heart from "../Assets/heart.png"
import bag from "../Assets/shopping-bag.png"
import searchIcon from "../Assets/search.png"
import LoginModal from "./Modals/Login-signup";
import Shipping from "./Shipping";
import Flat from "./Flat";


const links = [
    {
        to: "/",
        title: ""
    },
    {
        to: "/women",
        title: "Women"
    },
    {
        to: "/man",
        title: "Men"
    },
    
    {
        to: "/girl",
        title: "Girls"
    },
    {
        to: "/boys",
        title: "Boys"
    },

];
const baseStyle = {
    fontSize: "13.5px",
    bgColor: "red",
    padding: "1.6em 1.2em",
};

const activeStyle = {
    fontSize: "13.5px",
    padding: "1.6em 1.2em",
    
    backgroundColor:"white",
    color:"blue",
    // border:"1px solid red"
};


function Search() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <Shipping/>
            <Box w={"100%"} bgColor={"#f7f8f7"} display={"flex"} justifyContent={"space-evenly"} h={"65px"} >
                <Spacer />

                <Link to="/">
                    <Image marginTop={"0.73em"} padding={"0.6em"} w={"100px"} src="https://i1.lmsin.net/website_images/in/logos/header/logo-max.svg" />
                </Link>
                {links.map((item) => (
                    <NavLink
                        style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                        to={item.to}
                        key={item.to}>
                        {item.title}
                    </NavLink>
                ))}
                <Stack spacing={1} >
                    <InputGroup >
                        <InputLeftElement
                            pointerEvents='none'
                            m="0.8em"
                            children={
                                <Image w="1em" src={searchIcon} />
                            }
                        />
                        <Input bgColor={"#ecedeb"} focusBorderColor="none" m="0.8em" w="20em" paddingLeft={"3em"} placeholder={"What are you looking for?"} />
                    </InputGroup>


                </Stack>

                <Spacer />
                <External href={"https://www.maxfashion.in/in/en/apps"} content={"More"} color={"black"} />
                <Box paddingTop={"0.8em"}>|</Box>
                <LoginModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
                <Image padding={"0.6em"} w={"40px"} h={"40px"} src={heart} marginTop={"0.5em"} />
                <Image padding={"0.6em"} w={"50px"} h={"50px"} src={bag} marginTop={"0.25em"} />
                <Spacer />
            </Box>
            <Flat/>
            {/* <HomeCategories/>
            <Footer/> */}
        </Box>

    )
}

export default Search;



