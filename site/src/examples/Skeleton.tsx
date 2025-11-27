import { useState } from "react";
import { Button, Skeleton, Flex, Text, Card } from "@quen-ui/components";

export const SkeletonLoading = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Flex direction="column" gap="l">
      <Skeleton loading={loading} width={250} height={20}>
        <Text>Loaded content</Text>
      </Skeleton>
      <Button onClick={() => setLoading((prev) => !prev)}>
        Toggle Skeleton
      </Button>
    </Flex>
  );
};

export const SkeletonCard = () => {
  const [loading, setLoading] = useState(true);
  return (
    <Flex direction="column" gap="l">
      <Skeleton.Card loading={loading} width={262} height={180} animation="shimmer">
        <Card
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }>
          <Text>Card</Text>
        </Card>
      </Skeleton.Card>
      <Button onClick={() => setLoading((prev) => !prev)}>
        Toggle Skeleton
      </Button>
    </Flex>
  );
};
