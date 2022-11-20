import { Box, Button, Container, Image, Link, space, Spacer, Text } from "@chakra-ui/react";

import truck from "../Assets/truck.png"
import clickCollect from "../Assets/click-collect.png"
import returnTo from "../Assets/return-to-store.png"

import Pop from "../Commons/PopOver";
import External from "../Commons/ShippingBoxes";
export default function Shipping() {

    return (
        <Box bgColor={"black"} paddingLeft={"22em"} display={"flex"} height={"52px"}>
            <Pop src={truck} content={"On All Order Above 999"} />
            <Pop src={clickCollect} content={"Visit To Your Nearest Store"} />
            <Pop src={returnTo} content={<Text>
                Order Online & Collect at a Store Of Your Choice For Free. {'    '}
                <Link isExternal={true} color='teal.500' href='https://www.maxfashion.in/click-and-collect'>
                    Learn more
                </Link>
            </Text>} />
            <Spacer />
            <Spacer />
            <External href={"https://www.maxfashion.in/in/en/apps"} content={"Download Our App"} />
            <Box as="h1" fontSize={"md"} color={"white"} padding={"1em"}>|</Box>
            <External href={"https://www.maxfashion.in/in/en/storelocator"} content={"Store Locator"} />
            <Box as="h1" fontSize={"md"} color={"white"} padding={"1em"}>|</Box>
            <External href={"https://helpin.maxfashion.com/support/home#/en/support/home"} content={"Help"} />
            <Spacer />

        </Box>
    )
}