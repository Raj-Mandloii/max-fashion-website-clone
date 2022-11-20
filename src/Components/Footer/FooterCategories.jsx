import { Box, Spacer, Text } from "@chakra-ui/react";


export default function FooterCategories() {

    return (
        <Box>
             <Box marginLeft={"2em"} marginRight={"10em"} marginTop={"2em"} display={"flex"} justifyContent={"space-evenly"}>
            <Box>
                <Text m={"0.6em"} fontWeight={"bold"}>Women</Text>
                <Stuff text={"Tops"} />
                <Stuff text={"Dresses & Jumpsuits"} />
                <Stuff text={"Sportswear"} />
                <Stuff text={"Bottoms"} />
                <Stuff text={"Winterwear"} />
                <Stuff text={"Ethnicwear"} />
                <Stuff text={"Lingerie"} />
                <Stuff text={"Sleepwear"} />
                <Stuff text={"Accessories"} />
                <Stuff text={"Shoes"} />
                <Text m={"0.6em"} marginTop={"3em"} fontWeight={"bold"}>About</Text>
                <Stuff text={"About us"} />
                <Stuff text={"Write to us"} />
                <Stuff text={"Careers"} />
                <Stuff text={"Take a Tour"} />
                <Stuff text={"Blog"} />
                <Stuff text={"Store Locator"} />
                <Stuff text={"Landmark Cares"} />
                
            </Box>
            <Box>
                <Text m={"0.6em"} fontWeight={"bold"}>Men</Text>
                <Stuff text={"Tops"} />
                <Stuff text={"Bottoms"} />
                <Stuff text={"Sportswear"} />
                <Stuff text={"Winterwear"} />
                <Stuff text={"Accessories"} />
                <Stuff text={"Shoes"} />


                <Text m={"0.6em"} marginTop={"10.5em"} fontWeight={"bold"}>Help</Text>
                
                <Stuff text={"Contact us"} />
                <Stuff text={"Shipping"} />
                <Stuff text={"Returns Process"} />
                <Stuff text={"Returns Policy"} />
                <Stuff text={"Help Centre"} />
                
            </Box>
            <Box>
                <Text m={"0.6em"} fontWeight={"bold"}>Boys</Text>
                <Stuff text={"Tops"} />
                <Stuff text={"Bottoms"} />
                <Stuff text={"Indian Wear"} />
                <Stuff text={"Winter Wear"} />
                <Stuff text={"Essentials"} />
                <Stuff text={"Accessories"} />
                <Stuff text={"Shoes"} />
            </Box>
            <Box>
                <Text m={"0.6em"} fontWeight={"bold"}>Girls</Text>
                <Stuff text={"Tops"} />
                <Stuff text={"Bottoms"} />
                <Stuff text={"Indian Wear"} />
                <Stuff text={"Winter Wear"} />
                <Stuff text={"Essentials"} />
                <Stuff text={"Accessories"} />
                <Stuff text={"Shoes"} />
            </Box>
            <Box>
                <Text m={"0.6em"} fontWeight={"bold"}>Explore</Text>
                <Stuff text={"Offers"} />
                <Stuff text={"Magazine"} />
            </Box>
        </Box>

        {/* <Box marginLeft={"2em"} marginRight={"10em"} marginTop={"2em"} display={"flex"} justifyContent={"start"}>
            <Box marginLeft={"11em"}>
                <Text m={"0.6em"} fontWeight={"bold"}>Women</Text>
                <Stuff text={"Tops"} />
                <Stuff text={"Dresses & Jumpsuits"} />
                <Stuff text={"Sportswear"} />
                <Stuff text={"Bottoms"} />
                <Stuff text={"Winterwear"} />
                <Stuff text={"Ethnicwear"} />
                <Stuff text={"Lingerie"} />
                <Stuff text={"Sleepwear"} />
                <Stuff text={"Accessories"} />
                <Stuff text={"Shoes"} />
            </Box>
            <Box marginLeft={"11em"}>
                <Text m={"0.6em"} fontWeight={"bold"}>Men</Text>
                <Stuff text={"Tops"} />
                <Stuff text={"Bottoms"} />
                <Stuff text={"Sportswear"} />
                <Stuff text={"Winterwear"} />
                <Stuff text={"Accessories"} />
                <Stuff text={"Shoes"} />
            </Box>
           
        </Box> */}
        </Box>
       
    )
}


function Stuff({ text }) {

    return (
        <Text m={"0.6em"} fontSize={"14px"} color={"gray"}>{text}</Text>
    )
}