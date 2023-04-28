import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Flex, Heading } from '@chakra-ui/react'

const Dashboard = () => {
    return(
        <>
        <Box bg="white" p={5} mb={5}  style={{ borderRadius: "10px" }}>
            <Flex alignItems='center' gap={2}  >
                 &nbsp;
                <Heading as="h3" size="lg" color="gray.600">
                    Dashboard
                </Heading>

            </Flex>
        </Box>
        <Tabs>
            <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
            </TabList>
            
            <TabPanels>
                <TabPanel>
                <p>one!</p>
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
                <TabPanel>
                <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
        </>
    );
};

export default Dashboard;