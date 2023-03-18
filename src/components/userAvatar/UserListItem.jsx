import { Avatar, Box, Text } from '@chakra-ui/react';
import React from 'react'
import { ChatState } from '../../context/ChatProvider'

const UserListItem = ({user, handleFunction}) => {

  return (
    <>
        <Box onClick={handleFunction} cursor="pointer" bg="#E8E8E8" _hover={{
            background:"#38B2AC",
            color:"#FFFFFF"
        }}
        width="100%" display={"flex"} alignItems="center" color="#000" padding="3px" marginBottom={"2px"} borderRadius={"lg"}>
            <Avatar marginRight={"2px"} size="sm" cursor="pointer" name={user.name} src={user.pic}/>
            <Box>
                <Text>{user.name}</Text>
                <Text fontSize="xs"><b>Email: </b>{user.email}</Text>
            </Box>
        </Box>
    </>
  )
}

export default UserListItem;