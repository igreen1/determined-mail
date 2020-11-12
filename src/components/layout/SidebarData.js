import React from 'react';
import * as FaIcons from 'react-icons/fa';
import {BsFillTrashFill} from 'react-icons/bs'
import * as IoIcons from 'react-icons/io';
import { BsArrowsFullscreen } from 'react-icons/bs';
import {RiSpam2Fill} from 'react-icons/ri'

export const SidebarData = [
  {
    title: 'New Message',
    path: '/newMessage',
    cName: 'new-message'
  },
    {
    title: 'Inbox',
    path: '/',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Deleted',
    path: '/deleted',
    icon: <BsFillTrashFill />,
    cName: 'nav-text'
  },
  {
    title: 'Spam',
    path: '/spam',
    icon: <RiSpam2Fill />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];