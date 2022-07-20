import { Box, Container, Image } from '@chakra-ui/react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
// import axios from 'axios'


const img1 = `https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner1-desktop-Men-19JULY2022.png`;
const img2 = `https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner5-desktop-Men-18JULY2022.png`
const img3 = `https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner6-D-Men-20JULY2022.png`

export default function SlideShow() {

    return (
        <Box  marginLeft={"20em"}>
         <Box  objectFit={"fill"} marginTop={"2em"}  >
            <AliceCarousel autoPlay autoPlayInterval="2000" infinite disableDotsControls disableButtonsControls > 
                <Image  src={img1} className="sliderimg" />
                <Image src={img2} className="sliderimg" />
                <Image src={img3} className="sliderimg" />
                
            </AliceCarousel>
            <Box marginTop={"2em"}>
                <Image src='https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBytwo1A-FREESHIPCOMMON-20JULY2022A.png'></Image>
            </Box>
            
        </Box>
       </Box>

    )
}

