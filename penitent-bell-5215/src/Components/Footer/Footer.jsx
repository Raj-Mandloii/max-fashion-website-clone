import { Box } from "@chakra-ui/react";
import Download from "./Download";
import SubscribeTo from "./SubscribeTo";


export default function Footer(){

    return (
       <Box>
         <Box display={"flex"} gap={10} justifyContent={"center"}>
            <SubscribeTo/>
            <Download/>
        </Box>
        <hr style={{marginLeft:"20em",marginRight:"18em",marginTop:"2em",}}/>
       </Box>
    )
}