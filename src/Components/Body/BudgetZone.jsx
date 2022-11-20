import { Container, Box, Image } from "@chakra-ui/react";
import BudgetZoneComp from "../BodyComponents/BudgetZoneComp";
const list = [
    "https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock19One-Men-18JULY2022.png",
    "https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktopp-modularblock19Two-Men-18JULY2022.png",
    "https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock19Three-Men-18JULY2022.png"
]
export default function BudgetZone() {

    return (
        <BudgetZoneComp budgetzonelist={list}/>
        // <Box >
        //     <Box fontSize={"4xl"} textAlign={'center'} marginRight={"29em"} marginBottom={"1em"} marginTop={"1.4em"}  >Budget Zone</Box>
        //     <Box display={"flex"} justifyContent={"center"} alignSelf={'center'} >
        //         <Image m={"1em"} h={"12.4em"} src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock19One-Men-18JULY2022.png" />
        //         <Image m={"1em"} h={"12.4em"} src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktopp-modularblock19Two-Men-18JULY2022.png" />
        //         <Image m={"1em"} h={"12.4em"} src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock19Three-Men-18JULY2022.png" />
               
        //     </Box>
        // </Box>
    )

}