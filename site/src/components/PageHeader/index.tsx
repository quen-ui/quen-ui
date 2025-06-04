import React from "react";

interface IPageHeaderProps {
  title: string;
  description?: string;
}

export const PageHeader = ({ title, description }: IPageHeaderProps) => {
  const metaDescription = description || "A React component library with native theme support."

  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:image:width" content="1280" />
      <meta name="og:image:height" content="640" />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
    </>
  );
}
