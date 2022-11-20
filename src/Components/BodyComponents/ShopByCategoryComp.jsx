import { Container, Box, Image } from "@chakra-ui/react";

export default function ShopByCategoryComp({cate}) {

    return (
        <Box >
            <Box fontSize={"4xl"} textAlign={'center'} marginRight={"28em"} marginBottom={"1em"} marginTop={"1.4em"} marginLeft={"1.5em"} >Shop By Category</Box>
            <Box display={"flex"} justifyContent={"center"} alignSelf={'center'} >
               {cate.map(item=>(
                 <Image key={item} m={"0.4em"} h={"12.4em"} src={item} />
               ))}
               
            </Box>
        </Box>
    )

}