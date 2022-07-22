import { Box, Image, Text } from "@chakra-ui/react";
import call from "../../Assets/phone-call.png"
import help from "../../Assets/faq.png"
import email from "../../Assets/email.png"
import fb from "../../Assets/facebook.png"
import insta from "../../Assets/instagram.png"
import twitter from "../../Assets/twitter.png"
// import Stuff from "../"
export default function Talk() {

    return (
        <Box display={"flex"}>
            <Box display={"flex"} marginLeft={"12.5em"} w={"60%"}>
                <Con img={call} text1={"Talk to us"} text2={"1800-123-1444"} />
                <Con img={help} text1={"Helpcentre"} text2={"help.maxfashion.com"} />
                <Con img={email} text1={"Write to us"} text2={"help.in@maxfashion.com"} />
            </Box>

            <Box w={"15%"} display={"flex"} justifyContent={"space-evenly"} marginTop={"1.7em"}>
                <Image h={"2em"} src={fb} />
                <Image h={"2em"} src={insta} />
                <Image h={"2em"} src={twitter} />
            </Box>
        </Box>
    )
}


function Con({ img, text1, text2 }) {
    return (
        <Box display={"flex"} marginRight={"4em"}>
            <Image m={3} marginTop={"1.3em"} h={"2.5em"} src={img} />
            <Box marginLeft={"0.4em"}>
                <Text marginTop={"0.7em"} color={"gray"}>{text1}</Text>
                <Text>{text2}</Text>
            </Box>
        </Box>
    )
}