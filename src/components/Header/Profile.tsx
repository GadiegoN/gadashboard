import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Gadiego Nogueira</Text>
                    <Text color="gray.300" fontSize="small">
                        ngadiego@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Gadiego Nogueira" src="https://github.com/GadiegoN.png" />
        </Flex>
    );
}