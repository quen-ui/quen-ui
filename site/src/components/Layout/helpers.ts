import { IFrontmatter } from "../../types";

export function sortPages(pages: IFrontmatter[]) {
  const clone = [...pages];
  clone.sort((a, b) => {
    if ("order" in a && "order" in b) {
      if (a.order === b.order) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      }

      return a.order - b.order;
    }

    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  });

  return clone;
}

