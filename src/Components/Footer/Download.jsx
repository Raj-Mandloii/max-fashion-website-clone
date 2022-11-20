import { Box, Button, Flex, Input, Stack, Text,Image } from "@chakra-ui/react";
import play from "../../Assets/googleplay.png"
import appstore from "../../Assets/appstore.png"

export default function Download() {

    return (
        <Box marginBottom={"3em"} marginTop={"3em"} >
            <Text fontSize={"2xl"} fontWeight={'bold'}>
            Download our apps
            </Text>
            <br />
            <Text color={"gray"}>Shop our products and offers on-the-go.</Text>
            <Flex spacing={18} marginTop={"2em"}>
                <Image m={"1em"} h={"3.5em"} src={appstore}/>
                <Image m={"1em"} h={"3.5em"} src={play}/>
            </Flex>

        </Box>
    )
}