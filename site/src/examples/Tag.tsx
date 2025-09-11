import React, { useState } from "react";
import { Tag, Flex } from "@quen-ui/components";

export const DismissibleTag = (): React.ReactElement => {
  const [tags, setTags] = useState(["urgent", "bug"]);

  const removeTag = (tag: string) => {
    setTags((prevTags) => prevTags.filter((t) => t !== tag));
  }

  return (
    <Flex gap={8}>
      {tags.map(tag => (
        <Tag
          className="p-remove-margin"
          key={tag}
          closable
          onClickClose={() => removeTag(tag)}
        >
          {tag}
        </Tag>
      ))}
    </Flex>
  )
}
