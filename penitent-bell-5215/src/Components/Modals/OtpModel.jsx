import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Stack,
    InputLeftAddon,
    Flex,
    HStack,
    PinInput,
    PinInputField,
} from '@chakra-ui/react'
import React from "react";
import External from '../../Commons/ShippingBoxes';
import Timer from '../Timer/timer';
export default function OtpModel({ No, isOpen, onOpen, onClose }) {


    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [show, setShow] = React.useState(true);
    const [timeUp,setTimeUp] = React.useState(false)
    return (
        <>
            <Button onClick={onOpen} colorScheme='#303ab2' bgColor={'#303ab2'} mr={8} p={7} paddingLeft={12} paddingRight={12} >
                Continue
            </Button>
            
            <Modal isCentered size={"2xl"}
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton m={'2em'} size={"2xl"} />
                    <ModalBody pb={22}>
                        <FormControl>
                            <FormLabel><Text m={"1em"} fontSize={"2em"}>Sign up or Sign in</Text></FormLabel>
                            <Text marginLeft={"1.9em"} color={"gray"}>Enjoy the convenience of a single account across all participating brands</Text>
                            <Text marginTop={"1em"} marginLeft={"2em"} >Varify with OTP</Text>
                            <Text color={"gray"} marginLeft={"2em"} marginBottom={"1em"} marginTop={"0.3em"} >sent to : {No}</Text>

                            <HStack>
                                <PinInput placeholder='' size={"md"} type='numeric' mask   defaultValue='' onComplete={()=>{
                                    console.log('DONE');
                                    onClose()
                                }}>
                                    <PinInputField  marginLeft={"2em"}/>
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField marginRight={"2em"}/>
                                </PinInput>
                            </HStack>
                        </FormControl>

                        <Text>We've sent your code.</Text>
                        <Text>If you did not the code Please Try After Some Time</Text>
                        {/* {show && <Timer timeUp={timeUp} setTimeUp={setTimeUp}/>} */}
                        {/* <button onClick={() => setShow(!show)}>Toggle</button> */}
                        <hr style={{ marginLeft: "2em", marginRight: "1em", marginTop: "0.2em", height: "0.2px", backgroundColor: "#ababab" }} />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='#303ab2' bgColor={'#303ab2'} mr={8} p={7} paddingLeft={12} paddingRight={12} >
                            Continue
                        </Button>
                        {/* <Button onClick={onClose}>Cancel</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


