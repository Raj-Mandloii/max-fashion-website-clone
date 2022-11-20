import { Box,Image } from "@chakra-ui/react";


export default function SpotlightComponent({spotlightlist}){
    
    return (
        <Box >
            <Box fontSize={"4xl"} textAlign={'center'} marginRight={"28em"} marginBottom={"1em"} marginTop={"1.4em"} >Style Spotlight</Box>
            <Box display={"flex"} justifyContent={"center"} alignSelf={'center'}>
                {spotlightlist.map(item=>(
                   <Image key={item} src={item}/>
                ))}
            </Box>
        </Box>
    )

}