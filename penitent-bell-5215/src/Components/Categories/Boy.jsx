import { Box } from "@chakra-ui/react";
import SlideShowComponent from "../BodyComponents/SlideShowComponents";
import {slideImageBoys}  from "../../data";
export default function Boy(){

    return (
        <Box>
           <SlideShowComponent list={slideImageBoys} />
        </Box>
    )
}