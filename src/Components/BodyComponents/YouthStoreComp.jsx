import {Box, Image } from "@chakra-ui/react";

export default function YouthStoreComp({img}) {

    return (
        <Box >
            <Box fontSize={"4xl"} textAlign={'center'} marginRight={"29em"} marginBottom={"1em"} marginTop={"1.4em"}  >Youth Store</Box>
            <Box display={"flex"} justifyContent={"center"} alignSelf={'center'} >
                <Image m={"1em"}  src={img} />
               
            </Box>
        </Box>
    )

}