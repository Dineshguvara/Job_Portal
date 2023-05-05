import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Avatar,
  Heading,
  Divider,
  Spacer
} from '@chakra-ui/react';
import {
  FiMenu,
  FiHome,
  FiUser,
  FiDollarSign,
  FiInfo,
  FiArchive,
  FiImage,
  FiMessageCircle,
  FiMail,
  FiUserX,
  FiArrowRight,
  FiSunset,
  FiSettings,
   
} from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux'
import  {setNavSize} from  "../features/navSlice"
import { ArrowBackIcon }  from "@chakra-ui/icons"; 


const LinkItems = [
  
  { name: 'Dashboard', icon:FiHome, to:'/'    },
  { name: 'Job Opening', icon:FiSunset, to:'/job_open'},
  { name: 'Profile Upload', icon:FiUser, to:'/pro_upload'},
  { name: 'Feedback', icon:FiMail, to:'/feedback'},
  

];

export default function Sidebar({ children }) {

  const navSiz = useSelector((state) => state.poste.value); 


  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh"
      bg={useColorModeValue('#f0f0f0', 'gray.900')}     
      >
      <SidebarContent
        onClose={() => onClose}   
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
       
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box
       ml={ navSiz === "small" ? "100px" : "250px"}
      >
        <Box p={2}></Box>
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
   
  const dispatch = useDispatch();

  const navSiz = useSelector((state) => state.poste.value)
  

  return (
    <Box 
      bg={useColorModeValue('#006666', 'gray.500')}
      borderRight="1px"
      borderRightColor={useColorModeValue('#000033', 'gray.700')}
      w={navSiz === "small" ? "75px" : "220px"}  
      pos="fixed"
      h="full"
      {...rest}>
        
      <Flex   as="nav" 
        alignItems={navSiz === "small" ? "center" : "flex-start" } 
        mx="10px" justifyContent="space-between">
      <IconButton
          background="none"
          mt={5}
          _hover={{              
            color: 'white',
            background: "none"
          }}
          fontSize="18"
          icon={<FiMenu />}
          color="white"

          onClick={() =>  
            dispatch(setNavSize())
          }

        />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

       
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}   to={link.to}
         >
          {link.name} 
           
          
        </NavItem>
      ))}
      <Flex 
        p="5%" 
        flexDir="column" 
        w="100%" 
        alignItems={navSiz === "small" ? "center" : "flex-start"} 
        pos="absolute"
        left={0}
        bottom={navSiz === "small" ? "3" : "0"}
        >
        <Divider
         display={navSiz === "small"? "none" : "flex"}
         />
        
      </Flex>
    </Box>
  );
};

const NavItem = ({ to, child, icon, children, ...rest}) => {
  
  const navSiz = useSelector((state) => state.poste.value)

  return (
    <Link as={ NavLink} to={to} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}
    w={navSiz === "large" && "100%"}
    >
      <Flex 
        alignItems="center"
        p={navSiz === "small" ? "16px 12px " : "12px 5px"}
        mx="12px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color="#fff"
        _hover={{
          bg: '#00b3b3',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr={ navSiz === "small" ? "0px " : "4"}
            alignItems={navSiz === "small" ? "center " : "flex-start "}
            fontSize="20"
            _hover={{              
              color: 'white',
            }}
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        <Text   
        color="#ffffff"
        fontSize="18"
        _hover={{ 
          color: 'white',
        }}
        _groupHover={{
          color: 'white',
        }}
        display= {navSiz === "small" ? "none" : "flex"}
        >{children}</Text>
        
      </Flex>
    </Link>
  );
};

 
const MobileNav = ({ onOpen, ...rest }) => {

  const navSiz = useSelector((state) => state.poste.value); 

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        
      </Text>
    </Flex>
  );
};