import { Box } from "@chakra-ui/react";
import Bottom from "./Bottom";
import Download from "./Download";
import FooterCategories from "./FooterCategories";
import SubscribeTo from "./SubscribeTo";
import Talk from "./Talk";


export default function Footer() {

    return (
        <Box>
            <Box display={"flex"} gap={"25em"} justifyContent={"center"}>
                <SubscribeTo />
                <Download />
            </Box>
            <hr style={{ marginLeft: "13em", marginRight: "18em", marginTop: "2em", }} />
            <FooterCategories />
            <hr style={{ marginLeft: "13em", marginRight: "18em", marginTop: "2em", marginBottom: "0.3em", }} />
            <Talk />
            <hr style={{ marginLeft: "13em", marginRight: "18em", marginTop: "0.3em", marginBottom: "2em", }} />
            <Bottom/>

        </Box>
    )
}