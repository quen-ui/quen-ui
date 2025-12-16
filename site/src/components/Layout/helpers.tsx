import { type IMenuDefaultItem, IMenuProps } from "@quen-ui/components";
import { Link, type MakeRouteMatchUnion } from "@tanstack/react-router";
import { type IFrontmatter } from "../../types";

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

export function groupPagesBySubgroup(
  pages: IFrontmatter[],
  matches: MakeRouteMatchUnion[],
): IMenuProps["items"] {
  const sortedPages = sortPages(pages);

  const groups = new Map<string, IMenuDefaultItem[]>();
  const standaloneItems: IMenuDefaultItem[] = [];

  sortedPages.forEach((page) => {
    const menuItem: IMenuDefaultItem = {
      label: (
        <Link
          to={`${matches[1].pathname}/$slug` as any}
          params={{ slug: page.title.replaceAll(" ", "") } as any}>
          {page.title}
        </Link>
      ),
      key: page.title,
    };

    if (page.subGroup) {
      if (!groups.has(page.subGroup)) {
        groups.set(page.subGroup, []);
      }
      groups.get(page.subGroup)!.push(menuItem);
    } else {
      standaloneItems.push(menuItem);
    }
  });

  const groupedItems: IMenuProps["items"]= [];

  Array.from(groups.entries())
    .sort(([groupA], [groupB]) =>
      groupA.toLowerCase().localeCompare(groupB.toLowerCase())
    )
    .forEach(([groupName, children]) => {
      groupedItems.push({
        label: groupName,
        key: `group-${groupName}`,
        children
      });
    });

  groupedItems.push(...standaloneItems);

  return groupedItems;
}
