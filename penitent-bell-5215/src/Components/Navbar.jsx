import { Box } from "@chakra-ui/react";
import AllRoutes from "./AllRoutes";
import CustomerFav from "./Body/CustomerFav";
import SlideShow from "./Body/SlideShow";
import SpotLight from "./Body/SpotLight";
import Flat from "./Flat";
import Search from "./Search";
import Shipping from "./Shipping";

export default function Navbar(){

    return (
        <Box>
            <Shipping/>
            <Search/>
            <Flat/>
            <SlideShow/>
            <hr style={{marginLeft:"20em",marginRight:"18em",marginTop:"2em",}}/>
            <SpotLight/>
            <hr style={{marginLeft:"20em",marginRight:"18em",marginTop:"2em",}}/>
            <CustomerFav/>
            <hr style={{marginLeft:"20em",marginRight:"18em",marginTop:"2em",}}/>

        </Box>
    )
}