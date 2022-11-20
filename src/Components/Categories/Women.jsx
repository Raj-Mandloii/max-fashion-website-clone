import { Box } from "@chakra-ui/react";
import BudgetZoneComp from "../BodyComponents/BudgetZoneComp";
import ShopByCategoryComp from "../BodyComponents/ShopByCategoryComp";
import SlideShowComponent from "../BodyComponents/SlideShowComponents";
import SpotlightComponent from "../BodyComponents/SpotlightComponent";
import TrendsComp from "../BodyComponents/TrendsComp";
import YouthStoreComp from "../BodyComponents/YouthStoreComp";
import Footer from "../Footer/Footer";
import { slideImageWomen, spotlightList, categoryImage, budgetZone, trendList } from "../../data";

const youthImage = "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBytwo1A-Women-18JULY2022.png"
export default function Women() {

    return (
        <Box>
            <SlideShowComponent list={slideImageWomen} />
            <SpotlightComponent spotlightlist={spotlightList} />
            <ShopByCategoryComp cate={categoryImage} />
            <BudgetZoneComp budgetzonelist={budgetZone} />
            <YouthStoreComp img={youthImage} />

            <TrendsComp trendlist={trendList} />
            <Footer />

        </Box>
    )
}