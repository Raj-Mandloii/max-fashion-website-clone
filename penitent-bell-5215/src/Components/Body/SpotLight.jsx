import { Box,Image } from "@chakra-ui/react";
import SpotlightComponent from "../BodyComponents/SpotlightComponent";

const list = [
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock7-oneBythree-A-Men-18JULY2022.png",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock7-oneBythree-B-Menn-18JULY2022.png"
]
export default function SpotLight (){
    
    return (
        <SpotlightComponent spotlightlist={list}/>
        
    )

}