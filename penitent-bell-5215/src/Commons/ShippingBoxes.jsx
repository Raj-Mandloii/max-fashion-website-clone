import { Box, Link,Text} from "@chakra-ui/react";

export default function External({href,content,color}) {

    return (
        <Link  isExternal={true} color='teal.500' href={href}>
            <Box size={"md"} fontSize={"md"} color={"white"} padding={"1em"}>
            <Text color={color} marginBottom={"2em"} fontSize='sm'>{content}</Text>
                </Box>
            
        </Link>
    )
}