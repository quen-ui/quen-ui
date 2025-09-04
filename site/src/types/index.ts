import { ElementType } from "react";

export interface IFrontmatter {
  title: string;
  description?: string;
  props?: string[];
  import: string;
  source: string;
  package: string;
  group?: string;
  order: number;
  demo?: boolean;
  excludeDemoProps?: string[];
  defaultDemoProps?: Record<string, any>;
}

export interface ILoaderData {
  allPages: Array<IFrontmatter>;
  current: {
    default: ElementType;
    frontmatter: IFrontmatter;
  };
}
