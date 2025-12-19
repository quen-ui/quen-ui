import { message, Button, Flex } from "@quen-ui/components";
import { IconSettings } from "@tabler/icons-react";

export const BaseExample = () => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <Button onClick={() => messageApi.success("Data saved successfully!")}>
        Show Success
      </Button>
    </>
  );
};

export const DifferentTypesExample = () => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <Flex gap="m">
        <Button
          view="success"
          onClick={() => messageApi.success("Operation succeeded")}>
          Success
        </Button>
        <Button
          view="danger"
          onClick={() => messageApi.error("Something went wrong")}>
          Error
        </Button>
        <Button
          view="warning"
          onClick={() => messageApi.warning("Caution: check this")}>
          Warning
        </Button>
      </Flex>
    </>
  );
};

export const LoadingExample = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const handleSend = () => {
    const key = messageApi.loading("Processing...", 0);
    setTimeout(() => {
      messageApi.destroy(key);
      messageApi.success("Finished successfully!");
    }, 3000);
  };

  return (
    <>
      {contextHolder}
      <Button onClick={handleSend}>Send</Button>
    </>
  );
};

export const CustomExample = () => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <Flex gap="m">
        <Button
          onClick={() =>
            messageApi.info("Will disappear in 5s", 5, () => alert("Closed"))
          }>
          Info
        </Button>
        <Button
          view="secondary"
          onClick={() =>
            messageApi.open({
              content: "Custom config message",
              icon: <IconSettings />,
              duration: 4,
              style: { marginTop: 80 },
              className: "my-message"
            })
          }>
          Custom
        </Button>
      </Flex>
    </>
  );
};

export const BottomExample = () => {
  const [messageApi, contextHolder] = message.useMessage({ placement: "bottom"});

  return (
    <>
      {contextHolder}
      <Button onClick={() => messageApi.info("At the bottom!")}>
        Show Bottom
      </Button>
    </>
  );
};
