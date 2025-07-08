import * as React from "react";
import { Link } from "gatsby";
import { Button, Title, Flex } from "@quen-ui/components";
import { motion } from "framer-motion";
import Logo from "../../images/Logo.png";
import { HomePageWrapper, HomePageLogoStyled } from "./styles";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <HomePageLogoStyled>
        <img src={Logo} alt="logo" width={250} height={250} />
        <Title
          size="2xl"
          className="text"
          as={motion.h1}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          QuenUI
        </Title>
      </HomePageLogoStyled>
      <Title
        className="text"
        size="xl"
        as={motion.h2}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        Your Component Library for Interfaces
      </Title>
      <Flex gap="m">
        <Link to="/guides/gettingstarted">
          <Button size="l">Get Started</Button>
        </Link>
        <Link to="/components/alert">
          <Button size="l" view="secondary">
            Documentation
          </Button>
        </Link>
      </Flex>
      <Button as="a" view="link" href="https://github.com/quen-ui/quen-ui">
        GitHub
      </Button>
    </HomePageWrapper>
  );
};

export default HomePage;
