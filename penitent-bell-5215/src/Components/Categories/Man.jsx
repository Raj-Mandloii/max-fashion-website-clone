import { Box } from "@chakra-ui/react";
import BudgetZone from "../Body/BudgetZone";
import CustomerFav from "../Body/CustomerFav";
import ShopByCategory from "../Body/ShopByCategory";
import SlideShow from "../Body/SlideShow";
import SpotLight from "../Body/SpotLight";
import Trends from "../Body/Trends";
import YouthStore from "../Body/YouthStore";
import Footer from "../Footer/Footer";

export default function Man(){

    return (
        <Box>
           <SlideShow/>
            <hr style={{marginLeft:"20em",marginRight:"18em",marginTop:"2em",}}/>
            <SpotLight/>
            <hr style={{marginLeft:"20em",marginRight:"18em",marginTop:"2em",}}/>
            <CustomerFav/>
            <hr style={{marginLeft:"20em",marginRight:"18em",marginTop:"2em",}}/>
            <ShopByCategory/>
            <hr style={{marginLeft:"20em",marginRight:"18em",marginTop:"2em",}}/>
            <BudgetZone/>
            <hr style={{marginLeft:"20em",marginRight:"18em",marginTop:"2em",}}/>
            <YouthStore/>
            <hr style={{marginLeft:"20em",marginRight:"18em",marginTop:"2em",}}/>
            <Trends/>
            <hr style={{marginTop:"2em",}}/>
            <Footer/>
        </Box>
    )
}