import * as React from "react";
import { Link } from "@tanstack/react-router";
import {
  Button,
  Title,
  Flex,
  Card,
  Text,
  TextField
} from "@quen-ui/components";
import { motion, useInView } from "framer-motion";
import Logo from "src/images/Logo.png";
import {
  HomePageWrapper,
  HomePageLogoStyled,
  FadeInSectionStyled,
  HeroStyled
} from "src/pages/HomePage/styles";

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref);
  return (
    <FadeInSectionStyled
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="section">
      {children}
    </FadeInSectionStyled>
  );
};

const HomePage = () => {
  return (
    <HomePageWrapper>
      <HeroStyled>
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
        <Title
          className="text"
          size="l"
          as={motion.h2}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Build products faster with ready-made React components, flexible
          theming, and clean design
        </Title>
        <Flex gap="m">
          <Link to="/guides/gettingstarted">
            <Button size="l">Get Started</Button>
          </Link>
          <Button
            size="l"
            as="a"
            view="secondary"
            href="https://github.com/quen-ui/quen-ui">
            GitHub
          </Button>
        </Flex>
      </HeroStyled>
      <FadeInSection>
        {[
          {
            icon: "🎨",
            title: "Flexible theming",
            text: "Customize colors, fonts, and styles to match your brand without unnecessary code"
          },
          {
            icon: "⚡",
            title: "High speed",
            text: "Lightweight components without dependency overload"
          },
          {
            icon: "🛠",
            title: "For developers",
            text: "Clear API, TypeScript typing and convenient hooks"
          },
          {
            icon: "📦",
            title: "Rich collection",
            text: "Buttons, forms, modals and more"
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}>
            <Card title={item.title} leftContent={item.icon}>
              <Text>{item.text}</Text>
            </Card>
          </motion.div>
        ))}
      </FadeInSection>
      <FadeInSection>
        <Flex direction="column" gap={40}>
          <Flex gap={16} wrap="wrap">
            <Button>Primary</Button>
            <Button view="secondary">Secondary</Button>
            <Button view="success">Success</Button>
            <Button view="link">Link</Button>
            <Button view="danger">Danger</Button>
            <Button view="warning">Warning</Button>
          </Flex>
          <Flex gap={16} direction="column" justify="center" align="center">
            <Title size="s">Example of a card with text</Title>
            <Flex gap={16} justify="center">
              <TextField placeholder="Enter text..." />
              <Button>Send</Button>
            </Flex>
          </Flex>
        </Flex>
      </FadeInSection>
      <FadeInSection>
        <Flex align="center" direction="column" gap={16}>
          <Title size="m">
            Try QuenUI today and build your interface faster
          </Title>
          <Link to="/guides/gettingstarted">
            <Button size="l">Get Started</Button>
          </Link>
        </Flex>
      </FadeInSection>
    </HomePageWrapper>
  );
};

export default HomePage;
