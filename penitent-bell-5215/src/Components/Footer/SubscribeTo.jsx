import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";


export default function SubscribeTo() {
    const [isclicked,setClicked] = useState(false)
    return ( 
        <Box marginBottom={"3em"} marginTop={"3em"} >
            <Text fontSize={"2xl"} fontWeight={'bold'}>
                Subscribe to our awesome emails.
            </Text>
            <br />
            <Text color={"gray"}>Get our latest offers and news straight in your inbox.</Text>
            <Flex spacing={3} marginTop={"3.4em"}>
                <Input onClick={()=>{setClicked(true)}} focusBorderColor="none" w={"18em"} borderRadius={"0px"} placeholder='Please enter an email address' size='lg' />
                <Button paddingLeft={"3em"} paddingRight={"3em"} color={"white"} size={"lg"} bgColor={"black"} borderRadius={"0px"}>Subscribe</Button>

            </Flex>
           {isclicked &&  <Text color={"red"} fontSize={"14px"} m={2}>Enter Your email address</Text>}
        </Box>
    )
}