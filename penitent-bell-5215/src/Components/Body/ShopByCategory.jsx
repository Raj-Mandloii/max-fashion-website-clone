import { Container, Box,Image } from "@chakra-ui/react";

export default function ShopByCategory (){
    
    return (
        <Box >
            <Box fontSize={"4xl"} textAlign={'center'} marginRight={"28em"} marginBottom={"1em"} marginTop={"1.4em"} >Style Spotlight</Box>
            <Box display={"flex"} justifyContent={"center"} alignSelf={'center'}>
            <Image src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock7-oneBythree-A-Men-18JULY2022.png"/>
            <Image src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock7-oneBythree-B-Menn-18JULY2022.png"/>
            </Box>
        </Box>
    )

}