import { useState } from "react";
import { Button, Flex, LoadingOverlay, TextField } from "@quen-ui/components";

export const LoadingOverlayBase = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Flex direction="column" gap="l">
      <LoadingOverlay loading={loading}>
        <Flex direction="column" gap="m" style={{ padding: "1rem"}}>
          <Flex gap="m">
            <TextField label="First name" />
            <TextField label="Last name" />
          </Flex>
          <TextField label="Email" />
          <TextField label="Password" />
        </Flex>
      </LoadingOverlay>
      <Flex justify="center">
        <Button onClick={() => setLoading((prev) => !prev)}>
          Toggle overlay
        </Button>
      </Flex>
    </Flex>
  );
};

export const LoadingOverlayLabel = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Flex direction="column" gap="l">
      <LoadingOverlay loading={loading} label="Loading ...">
        <Flex direction="column" gap="m" style={{ padding: "1rem"}}>
          <Flex gap="m">
            <TextField label="First name" />
            <TextField label="Last name" />
          </Flex>
          <TextField label="Email" />
          <TextField label="Password" />
        </Flex>
      </LoadingOverlay>
      <Flex justify="center">
        <Button onClick={() => setLoading((prev) => !prev)}>
          Toggle overlay
        </Button>
      </Flex>
    </Flex>
  );
};

export const LoadingOverlayBackdrop = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Flex direction="column" gap="l">
      <LoadingOverlay loading={loading} backdrop={false}>
        <Flex direction="column" gap="m" style={{ padding: "1rem"}}>
          <Flex gap="m">
            <TextField label="First name" />
            <TextField label="Last name" />
          </Flex>
          <TextField label="Email" />
          <TextField label="Password" />
        </Flex>
      </LoadingOverlay>
      <Flex justify="center">
        <Button onClick={() => setLoading((prev) => !prev)}>
          Toggle overlay
        </Button>
      </Flex>
    </Flex>
  );
};

export const LoadingOverlayLoaderVariant = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Flex direction="column" gap="l">
      <LoadingOverlay loading={loading} loaderVariant="oval">
        <Flex direction="column" gap="m" style={{ padding: "1rem"}}>
          <Flex gap="m">
            <TextField label="First name" />
            <TextField label="Last name" />
          </Flex>
          <TextField label="Email" />
          <TextField label="Password" />
        </Flex>
      </LoadingOverlay>
      <Flex justify="center">
        <Button onClick={() => setLoading((prev) => !prev)}>
          Toggle overlay
        </Button>
      </Flex>
    </Flex>
  );
};
