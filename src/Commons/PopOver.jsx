import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,Image
} from '@chakra-ui/react'
export default function Pop ({src,content,}){

    return (
        <Popover trigger="hover">
                <PopoverTrigger>
                <Image src={src} w="165px" h="44px" paddingTop={"0.5em"}/>
                </PopoverTrigger>
                <PopoverContent >
                    <PopoverArrow />
                    {/* <PopoverCloseButton /> */}
                    {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
                    <PopoverBody fontSize={"sm"} padding={"1em"} paddingLeft={"3em"}>{content}</PopoverBody>
                </PopoverContent>
            </Popover>
    )
}