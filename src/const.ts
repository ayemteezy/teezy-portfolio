import {
  BookHeartIcon,
  FileTextIcon,
  FolderGit2Icon,
  HomeIcon,
  LinkIcon,
  ListTodoIcon,
  UserRoundIcon,
} from "lucide-react";
import { desc } from "motion/react-client";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin, FiGithub } from "react-icons/fi";

export const isAvailable = true;

export const links = [
  {
    icon: HomeIcon,
    desc: "Step into my space",
    name: "home",
    id: "/",
  },
  {
    icon: FolderGit2Icon,
    desc: "See my projects",
    name: "work",
    id: "/projects",
  },
  {
    icon: UserRoundIcon,
    desc: "My story & skills",
    name: "about",
    id: "/about",
  },
  {
    icon: FileTextIcon,
    desc: "Ideas & insights",
    name: "blog",
    id: "/blog",
  },
];

export const moreNav = [
  {
    icon: BookHeartIcon,
    name: "Guestbook",
    href: "/guestbook",
    image: "/images/guestbook.jpg",
    desc: "Leave me a message",
  },
  {
    icon: ListTodoIcon,
    name: "Bucket List",
    href: "/bucketlist",
    image: "/images/bucketlist.jpg",
    desc: "Things I want to do in life",
  },
  {
    icon: LinkIcon,
    name: "Links",
    href: "/links",
    image: "/images/links.jpg",
    desc: "All my links are here",
  },
];

export const socials = [
  {
    icon: FiLinkedin,
    name: "Linkedin",
    href: "/",
  },
  {
    icon: FiGithub,
    name: "GitHub",
    href: "/",
  },
  {
    icon: FaXTwitter,
    name: "X",
    href: "/",
  },
];
