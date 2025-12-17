import { useRef, type ReactNode, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  IconBrandGithub,
  IconArrowUpRight,
  IconTemplate
} from "@tabler/icons-react";
import {
  Button,
  Title,
  Flex,
  Card,
  Text,
  TextField,
  Badge,
  Modal,
  Image
} from "@quen-ui/components";
import { motion, useInView } from "framer-motion";
import Logo from "src/images/Logo.png";
import {
  HomePageWrapper,
  HomePageLogoStyled,
  FadeInSectionStyled,
  HeroStyled
} from "src/pages/HomePage/styles";
import ImageRelease10 from "../../images/release1_0.png";

const FadeInSection = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
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
  const [openModalRelease, setModalRelease] = useState(
    localStorage.getItem("openRelease_1.0") !== "false"
  );

  const handleCloseModalRelease = () => {
    setModalRelease(false);
    localStorage.setItem("openRelease_1.0", "false");
  };
  return (
    <>
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
            <Link to="/guides/$slug" params={{ slug: "gettingstarted" }}>
              <Button size="l" rightContent={<IconArrowUpRight />}>
                Get Started
              </Button>
            </Link>
            <Button
              view="success"
              size="l"
              as="a"
              rightContent={<IconTemplate />}
              href="https://quen-ui.github.io/templates/">
              Templates
            </Button>
            <Button
              size="l"
              as="a"
              view="secondary"
              rightContent={<IconBrandGithub />}
              href="https://github.com/quen-ui/quen-ui">
              GitHub
            </Button>
          </Flex>
          <FadeInSection>
            <Badge text="NEW">
              <Card
                className="text"
                title="Release 1.0"
                style={{ maxWidth: "500px" }}
                onClickExtra={() => setModalRelease(true)}
                extra="Learn more">
                <Text>
                  This is a major update focusing on expanding the component
                  library and improving the design system. New components have
                  been added, including Menu, Form, Calendar, RichTextEditor,
                  and others, and the Layout and theming system have been
                  improved. In addition, new hooks and utilities have been
                  introduced, inputs have been unified, and a number of bugs
                  have been fixed, increasing stability and usability.
                </Text>
              </Card>
            </Badge>
          </FadeInSection>
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
            <Link to="/guides/$slug" params={{ slug: "gettingstarted" }}>
              <Button size="l" rightContent={<IconArrowUpRight />}>
                Get Started
              </Button>
            </Link>
          </Flex>
        </FadeInSection>
      </HomePageWrapper>
      <Modal
        width={600}
        open={openModalRelease}
        title="Release QuenUI 1.0"
        onClickClose={handleCloseModalRelease}
        closeButton
        footer={
          <Link
            style={{ textDecoration: "none" }}
            to="/guides/$slug"
            params={{ slug: "v1.0.0" }}>
            <Button>Learn more about the changes</Button>
          </Link>
        }>
        <Flex direction="column" gap="m">
          <Image src={ImageRelease10} height={350} width={580} />
          <Text>
            The 1.0 release marks a significant milestone in the development of
            QuenUI. We have significantly expanded the component library,
            improved the layout architecture, enhanced theming capabilities, and
            added new tools for convenient work with state and data.
          </Text>
          <Flex direction="column" gap="xs">
            <Title size="s">New components</Title>
            <Text>
              A large number of new components have been added to the library,
              including Menu, Pagination, Accordion, Form, Calendar,
              RichTextEditor, ColorPicker, Skeleton, Slider, LoadingOverlay, and
              others. This allows for covering more product scenarios without
              using third-party solutions.
            </Text>
          </Flex>
          <Flex direction="column" gap="xs">
            <Title size="s">
              Improvements to the design system and theming
            </Title>
            <Text>
              We added the ability to theme individual components and introduced
              separate theme tokens for more flexible customization. All inputs
              and selects have been standardized using a common InputBase
              component. The Tag component now supports different sizes and
              colors from the theme palette, and the visual states of ghost
              buttons have been corrected.
            </Text>
          </Flex>
          <Flex direction="column" gap="xs">
            <Title size="s">Layout and navigation updates</Title>
            <Text>
              A new Menu component has been introduced, which is now used within
              Layout.Header and Layout.Sidebar. Support for grouping menu items
              has been added, simplifying the creation of complex navigation.
              The Dropdown component has become more stable and now exhibits
              more predictable behavior when automatically opening.
            </Text>
          </Flex>
          <Flex direction="column" gap="xs">
            <Title size="s">Hooks and utilities</Title>
            <Text>
              New hooks useMediaQuery and useControllableState have been added.
              The @quen-ui/helpers package has been extended with new utilities
              (cnMerge, setValueObject, deleteValueObject, formatString, etc.),
              and the getValueObject function now supports complex path keys.
            </Text>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};

export default HomePage;
