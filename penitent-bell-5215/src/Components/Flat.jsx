import { Box } from "@chakra-ui/react";


export default function Flat(){

    return (
        <Box fontSize={"15px"} fontWeight={"bold"} color={"white"} textAlign={"center"} bgColor={"#303ab2"} w={"100%"} h={"40px"} display={'flex'} justifyContent={"center"} paddingTop={"0.5em"}>
            Free shipping on ALL orders + Flat ₹200 off on ₹1999. Code: MAX200 {'>'}
        </Box>
    )
}
