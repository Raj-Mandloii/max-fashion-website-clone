import { Container, Box, Image } from "@chakra-ui/react";

export default function BudgetZoneComp({budgetzonelist}) {

    return (
        <Box >
            <Box fontSize={"4xl"} textAlign={'center'} marginRight={"29em"} marginBottom={"1em"} marginTop={"1.4em"}  >Budget Zone</Box>
            <Box display={"flex"} justifyContent={"center"} alignSelf={'center'} >
                {budgetzonelist.map(item=>(
                    <Image key={item} m={"1em"} h={"12.4em"} src={item} />

                ))}
               
            </Box>
        </Box>
    )

}