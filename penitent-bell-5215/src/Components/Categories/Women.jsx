import { Box } from "@chakra-ui/react";
import BudgetZoneComp from "../BodyComponents/BudgetZoneComp";
import ShopByCategoryComp from "../BodyComponents/ShopByCategoryComp";
import SlideShowComponent from "../BodyComponents/SlideShowComponents";
import SpotlightComponent from "../BodyComponents/SpotlightComponent";
import TrendsComp from "../BodyComponents/TrendsComp";
import YouthStoreComp from "../BodyComponents/YouthStoreComp";
import Footer from "../Footer/Footer";
const slideImage = [
    `https://lmsin.net/cdn-cgi/image/w=1232,q=85,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner1-desktop-Women-14JULY2022.png`,
    `https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner5-desktop-Women-14JULY2022.png`,
    `https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner4-desktop-Women-14JULY2022.png`
];

const spotlightList = [
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock17One-Women-29JUNE2022.png",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock17Two-Women-29JUNE2022.png"
];

const cate = [
    "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-1-Desktop-Women-18JULY2022.png",
    "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-2-Desktop-Women-18JULY2022.png",
    "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-3-Desktop-Women-18JULY2022.png",
    "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-4-Desktop-Women-18JULY2022.png",
    "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-5-Desktop-Women-18JULY2022.png",
    "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-6-Desktop-Women-18JULY2022.png"
];

const budgetZone = [
    "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock19One-Women-18JULY2022.png",
    "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock19Two-Women-18JULY2022.png",
    "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock19Three-Women-18JULY2022.png"
]


const trendList = [
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock7-oneBythree-A-Women-18JULY2022.png",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock7-oneBythree-B-Womenn-18JULY2022.png",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-Women-modularblock8-oneBythree-A-Women-18JULY2022.png",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock8-oneBythree-B-Women-18JULY2022.png",
    "https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock15One-Women-02JUNE2022.png",
    "https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock15Two-Women-02JUNE2022.png",
    "https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-9modularblock-oneBythree-A-Women-18JULY2022.png",
    "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock14One-Women-26Oct2021.jpg",
    "https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock8-oneBythree-A-Women-21Oct2020.jpg"
    
]
const youthImage = "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBytwo1A-Women-18JULY2022.png"
export default function Women(){

    return (
        <Box>
            <SlideShowComponent list={slideImage } />
            <SpotlightComponent spotlightlist={spotlightList}/>
            <ShopByCategoryComp cate={cate}/>
            <BudgetZoneComp budgetzonelist={budgetZone}/>
            <YouthStoreComp img={youthImage}/>

            <TrendsComp trendlist={trendList} />
            <Footer/>

        </Box>
    )
}