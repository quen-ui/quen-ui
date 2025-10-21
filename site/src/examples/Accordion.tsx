import { useState, useRef } from "react";
import { Accordion, Button, Flex, IAccordionGroupApi } from "@quen-ui/components";

export const ControlledAccordion = () => {
  const [activeKeys, setActiveKeys] = useState<(string | number)[]>(["2"]);

  return (
    <Accordion
      items={[
        { key: "1", label: "First", children: "First content" },
        { key: "2", label: "Second", children: "Second content" }
      ]}
      activeKeys={activeKeys}
      onChange={setActiveKeys}
    />
  );
};

export const AccordionGroupExample = () => {
  const groupRef = useRef<IAccordionGroupApi>(null);

  return (
    <>
      <Flex gap="s">
        <Button onClick={() => groupRef.current?.openAll()}>
          Open all
        </Button>
        <Button onClick={() => groupRef.current?.closeAll()}>
          Close all
        </Button>
      </Flex>

      <Accordion.Group ref={groupRef} multiple>
        <Accordion
          items={[
            { key: "a", label: "Point 1", children: "Content A" },
            { key: "b", label: "Point 2", children: "Content B" }
          ]}
        />
        <Accordion
          items={[{ key: "c", label: "Point 3", children: "Content C" }]}
        />
      </Accordion.Group>
    </>
  );
};
