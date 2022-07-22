import { Box } from "@chakra-ui/react";
import Footer from "./Footer/Footer";
import HomeCategories from "./HomepageCategories/HomeCategories";


export default function Home(){

    return (
        <Box>
            <HomeCategories/>
            <Footer/>

        </Box>
    )
}