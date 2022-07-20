// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Button,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
// } from '@chakra-ui/react';
// import axios from 'axios';
// import SelctTagg from './SelectTag';
// import SelectTag from './SelectTagSpecialisation';

// export default function Home() {
//   const [hospital, setHospital] = useState([]);
//   const {
//     isOpen: isEditOpen,
//     onOpen: onEditOpen,
//     onClose: onEditClose,
//   } = useDisclosure();
//   const {
//     isOpen: isDeleteOpen,
//     onOpen: onDeleteOpen,
//     onClose: onDeleteClose,
//   } = useDisclosure();
//   const initialRef = React.useRef(null);
//   const finalRef = React.useRef(null);

//   const initForm = { name: '', address: '' };
//   const initForm1 = { Docname: '', salary: '', specialisation: '' };
//   const [formData1, setFormData1] = useState(initForm);
//   const [formData, setFormData] = useState(initForm);

//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     get(data);
//   }, []);

//   async function get(data) {
//     data = await fetch(`http://localhost:3000/doctor`);
//     data = await data.json();
//     setdata(data);
//   }

//   const handleChange = e => {
//     e.preventDefault();
//     const { value, name } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <Box m="2em">
//       <br />
//       <Button colorScheme="teal" size="xs" mr="2" onClick={onEditOpen}>
//         Add Hospital
//       </Button>
//       <Modal isOpen={isEditOpen} onClose={onEditClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Edit Modal</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <FormControl>
//               <FormLabel>Name</FormLabel>
//               <Input
//                 ref={initialRef}
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </FormControl>

//             <FormControl mt={4}>
//               <FormLabel>Hospital</FormLabel>
//               <Input
//                 placeholder="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//               />
//             </FormControl>
//           </ModalBody>

//           <ModalFooter>
//             <Button variant="ghost" mr={3} onClick={onEditClose}>
//               Cancel
//             </Button>
//             <Button
//               colorScheme="red"
//               onClick={() => {
//                 addHos(formData.name, formData.address);
//               }}
//             >
//               Add
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       <Button
//         colorScheme="red"
//         size="xs"
//         onClick={() => {
//           onDeleteOpen();
//         }}
//       >
//         Add Doctor
//       </Button>
//       <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Delete Shipping Address</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <FormControl mt={4}>
//               <FormLabel>Name</FormLabel>
//               <Input
//                 placeholder="name"
//                 name="name"
//                 value={formData1.Docname}
//                 onChange={handleChange}
//               />
//             </FormControl>

//             <br />
//             <br />
//             <SelctTagg />
//             <br />
//             <br />
//             <SelectTag />
//             <FormControl mt={4}>
//               <FormLabel>Salary</FormLabel>
//               <Input
//                 placeholder="salary"
//                 type="number"
//                 name="salary"
//                 value={formData1.salary}
//                 onChange={handleChange}
//               />
//             </FormControl>
//           </ModalBody>

//           <ModalFooter>
//             <Button variant="ghost" mr={3} onClick={onDeleteClose}>
//               Cancel
//             </Button>
//             <Button colorScheme="red" onClick={() => {}}>
//               Delete
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       <Box>
//         {data.map(item => (
//           <Box key={item.id}>
//             <Box>{item.id}</Box>
//             <Box>{item.name}</Box>
//             <Box>{item.specialisation}</Box>
//             <Box>{item.salary}</Box>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }

// function addHos(name, address) {
//   axios.post('http://localhost:3000/hospital', {
//     name: name,
//     address: address,
//   });
// }