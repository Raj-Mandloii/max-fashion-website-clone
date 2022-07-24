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
    useDisclosure,
    Wrap,
    Box,
} from '@chakra-ui/react'
import React, { useState } from "react";
import External from '../../Commons/ShippingBoxes';
import OtpModel from './OtpModel';
export default function LoginModal({ isOpen, onOpen, onClose }) {
    const { isOpen: isSecondModalOpen, onOpen: onSecondModalOpen, onClose: onSecondModalClose } = useDisclosure()
    const [value, setValue] = React.useState('');
    const handleChange = (event) => setValue(event.target.value)
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <>
            <External  onClick={onOpen} content={"Sign Up/ Sign In"} color={"black"} />
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
            {/* <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button> */}
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
                            <Text m={"1em"} color={"gray"}>Enjoy the convenience of a single account across all participating brands</Text>
                            <Text m={"1em"} >Mobile Number</Text>
                            <Stack spacing={4} m={"1em"}>
                                <InputGroup>
                                    <InputLeftAddon children='+91' />
                                    <Input value={value}
                                        onChange={handleChange} type='tel' placeholder='phone number' />
                                </InputGroup>
                            </Stack>
                        </FormControl>

                        <Flex alignItems='center' gap={"0"}><Text m={"1em"} >By creating your account you agree to our <span style={{ color: "blue" }}>Terms and Conditions</span></Text>
                        </Flex>
                        <hr style={{ marginLeft: "2em", marginRight: "1em", marginTop: "0.2em", height: "0.2px", backgroundColor: "#ababab" }} />
                    </ModalBody>

                    <ModalFooter >
                       <OtpModel No={value} isOpen={isSecondModalOpen} onClose={onSecondModalClose} onOpen={onSecondModalOpen} />
                      {/* <Button onClick={() => {
                            <OtpModel isOpen={OtpisOpen} onClose={OtponClose} onOpen={OtponOpen} />
                        }} colorScheme='#303ab2' bgColor={'#303ab2'} mr={8} p={7} paddingLeft={12} paddingRight={12} >
                            Continue
                        </Button> */}
                        {/* <Button onClick={onClose}>Cancel</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


