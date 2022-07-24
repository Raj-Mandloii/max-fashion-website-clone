import { Box } from "@chakra-ui/react";
import {slideImageGirls}  from "../../data";
import SlideShowComponent from "../BodyComponents/SlideShowComponents";
export default function Girl(){

    return (
        <Box>
           <SlideShowComponent list={slideImageGirls} />
        </Box>
    )
}