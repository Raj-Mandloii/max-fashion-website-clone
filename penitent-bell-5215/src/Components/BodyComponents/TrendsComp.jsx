import { Container, Box,Image } from "@chakra-ui/react";

export default function TrendsComp ({trendlist}){
    
    return (
        <Box >
            <Box fontSize={"4xl"} textAlign={'center'} marginRight={"28em"} marginBottom={"1em"} marginTop={"1.4em"} >Trends</Box>
            <Box display={"flex"} justifyContent={"center"} alignSelf={'center'}>
            <Image src={trendlist[0]}/>
            <Image src={trendlist[1]}/>
            </Box>
            <hr style={{marginLeft:"20em",marginRight:"18em",marginTop:"5em",}}/>
            <Box display={"flex"} justifyContent={"center"} alignSelf={'center'} marginTop={"5em"}>
            <Image src={trendlist[2]}/>
            <Image src={trendlist[3]}/>
            </Box>
            
            
            {/*  ===============               T O P   S T O R E S           ==================== */}



            <Box fontSize={"4xl"} textAlign={'center'} marginRight={"28em"} marginBottom={"1em"} marginTop={"1.4em"} >Top Stores</Box>
            <Box display={"flex"} justifyContent={"center"} alignSelf={'center'}>
            <Image src={trendlist[4]}/>
            <Image src={trendlist[5]}/>
            </Box>
            <hr style={{marginLeft:"20em",marginRight:"18em",marginTop:"5em",}}/>
            <Box display={"flex"} justifyContent={"center"} alignSelf={'center'} marginTop={"5em"}>
            <Image src={trendlist[6]}/>
            
            </Box>
            <hr style={{marginLeft:"20em",marginRight:"18em",marginTop:"5em",}}/>


            {/*  ===============               G I F T    Z O N E           ==================== */}

            <Box fontSize={"4xl"} textAlign={'center'} marginRight={"28em"} marginBottom={"1em"} marginTop={"1.4em"} >Gift Zone</Box>
            <Box display={"flex"} justifyContent={"center"} alignSelf={'center'} marginTop={"3em"}>
            <Image h={"14.7em"} src={trendlist[7]}/>
            
            </Box>
            <hr style={{marginLeft:"20em",marginRight:"18em",marginTop:"5em",}}/>
             {/*  ===============               C O N N E C T     W I T H      U S            ==================== */}

             <Box fontSize={"4xl"} textAlign={'center'} marginRight={"28em"} marginBottom={"1em"} marginTop={"1.4em"} >Connect With Us</Box>
            <Box display={"flex"} justifyContent={"center"} alignSelf={'center'} marginTop={"3em"}>
            <Image h={"19em"} src={trendlist[8]}/>
            
            </Box>
        </Box>
    )

}