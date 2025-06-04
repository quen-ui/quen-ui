import { IQuenUITheme } from "@quen-ui/theme";
import { PrismTheme } from "prism-react-renderer";

export const themeHighlight = (theme: IQuenUITheme): PrismTheme => {
  return {
    plain: {
      color: theme.primaryColor,
    },
    styles: [
      {
        types: ["keyword"],
        style: {
          color: theme.colors.red["9"],
        },
      },
      {
        types: ["punctuation", "maybe-class-name"],
        style: {
          color: theme.textColor,
        },
      },
      {
        types: ["string"],
        style: {
          color: theme.primaryColor,
        },
      },
      {
        types: ["function"],
        style: {
          color: theme.colors.violet["5"],
        },
      },
      {
        types: ["class-name"],
        style: {
          color: theme.colors.green["9"],
        },
      },
      {
        types: ["attr-name"],
        style: {
          color: theme.colors.violet["5"],
        },
      },
      {
        types: ["attr-equals"],
        style: {
          color: theme.colors.red["9"]
        }
      },
      {
        types: ["attr-value"],
        style: {
          color: theme.colors.violet["7"]
        }
      },
      {
        types: ["operator"],
        style: {
          color: theme.textColor,
        },
      },
      {
        types: ["script"],
        style: {
          color: theme.colors.orange["9"],
        },
      },
      {
        types: ["boolean"],
        style: {
          color: theme.colors.orange["9"],
        },
      },
      {
        types: ["property"],
        style: {
          color: theme.colors.violet["5"],
        },
      },
      {
        types: ["builtin"],
        style: {
          color: theme.colors.green["7"],
        },
      }
    ]
  }
}
