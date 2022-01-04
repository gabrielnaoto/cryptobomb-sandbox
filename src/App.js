import React, { useState, useEffect } from 'react';
import {
  Box, Button, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  StackDivider,
} from '@chakra-ui/react'

function App() {
  const [running, setRunning] = useState(false);
  // const [workers, setWorkers] = useState({ ...[...Array(50).keys()].map((index) => ({ [String(index)]: false })) });



  const { isOpen, onOpen, onClose } = useDisclosure();

  const startGame = () => {
    setRunning(true);
  };

  useEffect(() => {
    if (running) {
      setTimeout(() => {
        setRunning(false);
      }, 20 * 1000);
    }
  }, [running]);

  return (
    <>
      <Box w='800px' h='800px' bg='white' p={4}>
        {
          running
            ? <Button colorScheme='red' onClick={onOpen}>Menu</Button>
            : <Button colorScheme='blue' onClick={startGame}>Start</Button>
        }
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxHeight={400} overflow="auto">
          <ModalHeader>Selecione os trabalhadores</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={4}
              align='stretch'
            >
              <Box h='40px' justifyContent="space-between" flexDirection="row" display="flex">
                <Button colorScheme='green' mr={3} onClick={() => console.log('working')}>
                  Work
                </Button>
              </Box>
              {/* <Box h='40px' justifyContent="space-between" flexDirection="row" display="flex">
                <Button colorScheme='green' mr={3} >
                  Work
                </Button>
              </Box>
              <Box h='40px' justifyContent="space-between" flexDirection="row" display="flex">
                <Button colorScheme='green' mr={3} >
                  Work
                </Button>
              </Box>
              <Box h='40px' justifyContent="space-between" flexDirection="row" display="flex">
                <Button colorScheme='green' mr={3} >
                  Work
                </Button>
              </Box>
              <Box h='40px' justifyContent="space-between" flexDirection="row" display="flex">
                <Button colorScheme='green' mr={3} >
                  Work
                </Button>
              </Box>
              <Box h='40px' justifyContent="space-between" flexDirection="row" display="flex">
                <Button colorScheme='green' mr={3} >
                  Work
                </Button>
              </Box>
              <Box h='40px' justifyContent="space-between" flexDirection="row" display="flex">
                <Button colorScheme='green' mr={3} >
                  Work
                </Button>
              </Box>
              <Box h='40px' justifyContent="space-between" flexDirection="row" display="flex">
                <Button colorScheme='green' mr={3} >
                  Work
                </Button>
              </Box>
              <Box h='40px' justifyContent="space-between" flexDirection="row" display="flex">
                <Button colorScheme='green' mr={3} >
                  Work
                </Button>
              </Box>
              <Box h='40px' justifyContent="space-between" flexDirection="row" display="flex">
                <Button colorScheme='green' mr={3} >
                  Work
                </Button>
              </Box>
              <Box h='40px' justifyContent="space-between" flexDirection="row" display="flex">
                <Button colorScheme='green' mr={3} >
                  Work
                </Button>
              </Box>
              <Box h='40px' justifyContent="space-between" flexDirection="row" display="flex">
                <Button colorScheme='green' mr={3} >
                  Work
                </Button>
              </Box>
              <Box h='40px' justifyContent="space-between" flexDirection="row" display="flex">
                <Button colorScheme='green' mr={3} >
                  Work
                </Button>
              </Box>
              <Box h='40px' justifyContent="space-between" flexDirection="row" display="flex">
                <Button colorScheme='green' mr={3} >
                  Work
                </Button>
              </Box>
              <Box h='40px' justifyContent="space-between" flexDirection="row" display="flex">
                <Button colorScheme='green' mr={3} >
                  Work
                </Button>
              </Box> */}

              {/* {[Object.keys(workers)].map((key) => (
                <Box h='40px' justifyContent="space-between" flexDirection="row" display="flex">
                  {key}

                  <Button colorScheme='green' mr={3} disabled={workers[key]} onClick={() => {
                    setWorkers({
                      ...workers,
                      [key]: true,
                    })
                  }}>
                    {workers[key] ? 'Working...' : 'Work'}
                  </Button>
                </Box>
              ))} */}

            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal></>
  );
}

export default App;
