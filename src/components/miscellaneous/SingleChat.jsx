import React from 'react'
import { ChatState } from '../../context/ChatProvider'
import { Box, IconButton, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { getSender, getSenderFull } from '../../config/ChatLogic';
import ProfileModel from './ProfileModel';
import ModalTest from './ModalTest';
import UpdateGroupChatModal from './UpdateGroupChatModal';

const SingleChat = ({fetchAgain, setFetchAgain}) => {

    const {user, selectedChat, setSelectedChat}=ChatState();

  return (
    <>{selectedChat?(
        <>
            <Text display={"flex"} justifyContent={{base:"space-between"}} alignItems="center" fontFamily="Work sans" pb={3} px={2} w="100%" fontSize={{base:"28px", md:"30px"}}>
                <IconButton display={{base:"flex", md:"none"}} icon={<ArrowBackIcon/>} onClick={() => setSelectedChat("")}/>
                {!selectedChat.isGroupChat?(
                    <>
                        {getSender(user, selectedChat.users)}
                        <ProfileModel user={selectedChat.users[1]}/>
                    </>
                ):(<>{selectedChat.chatName.toUpperCase()}
                    <UpdateGroupChatModal fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
                </>)}
            </Text>
            <Box display={"flex"} flexDirection="column" justifyContent={"flex-end"} p={3} bg="#E8E8E8" w="100%" h="100%" borderRadius={"lg"} overflowY={"hidden"}></Box>
        </>
    ):(
        <Box display={"flex"} alignItems="center" justifyContent="center" h="100%">
            <Text fontSize={"3xl"} pd={3} fontFamily="Work sans">Click on a user to start chat</Text>
        </Box>
    )}</>
  )
}

export default SingleChat