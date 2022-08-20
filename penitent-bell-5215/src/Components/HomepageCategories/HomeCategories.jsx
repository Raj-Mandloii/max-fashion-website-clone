import { Box, Button, Image, } from "@chakra-ui/react";
import { useNavigate  } from "react-router-dom";

export default function HomeCategories() {
   
    return (
        <Box>
            <Box display={"flex"} justifyContent={"center"} >
            <ShopButton path={"women"} srcc={"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/pre-landing-Women-18July2022.jpg"} content={"SHOP WOMEN"}/>
            <ShopButton path={"man"} srcc={"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/pre-landing-Men-18July2022.jpg"} content={"SHOP MEN"}/>
            <ShopButton path={"girl"} srcc={"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/pre-landing-Girls-18July2022.jpg"} content={"SHOP GIRLS"}/>
            <ShopButton path={"boys"} srcc={"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/pre-landing-Boys-18July2022.jpg"} content={"SHOP BOYS"}/>
            

        </Box>
        <hr style={{marginTop:"-1.24em"}}/>
        </Box>
    )
}

function ShopButton({path,srcc,content}) {
    const navigate = useNavigate();
    return (
        <Box marginBottom={"8em"} w={'20%'} backgroundSize={"100% 100%"} backgroundRepeat={"no-repeat"} backgroundClip={"border-box"} h={"30em"}  >
            <Image src={srcc} />
            <Button onClick={()=>{
                navigate(`/${path}`)
                console.log('Path Changed',path);
            }} fontSize={"18px"} color={"blue"} marginTop={"-8em"} marginLeft={"2.2em"} p={8} paddingLeft={"5em"} paddingRight={"5em"}>{content}</Button>
        </Box>
    )
}