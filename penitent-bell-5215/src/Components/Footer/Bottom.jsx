import { Box, Image,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Bottom() {

    return (
        <Box m={"3em"} marginLeft={"14em"} display={"flex"} w={"50%"}  >
            <Link to="/">
                <Image marginTop={"0.73em"} padding={"0.6em"} w={"120px"} src="https://i1.lmsin.net/website_images/in/logos/header/logo-max.svg" />
            </Link>
            <Box marginLeft={"1em"} marginTop={"0.4em"}>
                <Text fontSize={"13px"} marginTop={"0.7em"} color={"gray"}>© 2022 Retail World Limited.</Text>
                <Text fontSize={"13px"} color={"gray"}>Terms & Conditions - Privacy Policy</Text>
            </Box>
        </Box>
    )
}