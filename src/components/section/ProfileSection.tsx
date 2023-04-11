import React from "react";
import {
  Box,
  Heading,
  Avatar,
  Link,
  ButtonGroup,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "../Paragraph";
import { resume } from "../../constant";
import SocialButton from "../SocialButton";
import { BiPhoneCall } from "react-icons/bi";
import SpotifySection from "./SpotifySection";
import { SpotifySong } from "../../types/spotify";
import { MotionFlex } from "../../utils/motion";

interface IProfileSection {
  song: SpotifySong;
}

const ProfileSection: React.FC<IProfileSection> = ({ song }) => {
  return (
    <Box>
      <MotionFlex
        alignItems="center"
        justifyContent="space-between"
        opacity="0"
        initial={{
          opacity: 0,
          translateX: 150,
        }}
        animate={{
          opacity: 1,
          translateX: 0,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "28px", md: "40px", lg: "48px" }}
          mb={3}
        >
          Hey, I am Leon! <span className="waving-hand">👋</span>
        </Heading>
        <MotionFlex alignItems={"flex-end"} whileHover={{ scale: 1.2 }}>
          <Avatar
            name="Bileonaire"
            src="	https://avatars.githubusercontent.com/u/39065274?v=4"
            mb={5}
            size="lg"
          />
        </MotionFlex>
      </MotionFlex>
      <Paragraph textProps={{ fontSize: "2xl", lineHeight: 1.6 }}>
        Full-Stack Software Engineer
      </Paragraph>
      <Paragraph textProps={{ fontSize: "2xl", lineHeight: 1.6 }}>
        Focused on{" "}
        <Link
          color={useColorModeValue("blue.500", "blue.400")}
          // href="https://www.android.com/"
          fontWeight="500"
          isExternal
        >
          Frontend
        </Link>
        {" & "}
        <Link
          color={useColorModeValue("blue.500", "blue.400")}
          // href="https://reactnative.dev/"
          fontWeight="500"
          isExternal
        >
          Backend
        </Link>{" "}
        mainly Javascript .{"\n"}Passionate about beautiful UI / UX & Tech Writer on{" "}
        <Link
          color={useColorModeValue("blue.500", "blue.400")}
          href="https://medium.com/@kiokoleon"
          fontWeight="500"
          isExternal
        >
          Medium
        </Link>
        . 🔥
      </Paragraph>

      <Box mt={5}>
        <ButtonGroup>
          <SocialButton social={resume} />
          <Link href={"/contact"} style={{ textDecoration: "none" }}>
            <Button
              colorScheme="blue"
              size="sm"
              margin={"5px"}
              leftIcon={<BiPhoneCall />}
            >
              Contact Me
            </Button>
          </Link>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default ProfileSection;
