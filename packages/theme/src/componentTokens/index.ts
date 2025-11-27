import { type IQuenUITheme } from "../theme/types";
import { generateAlertTokens, type IAlertTokens } from "./generateAlertTokens";
import {
  generateAvatarTokens,
  type IAvatarTokens
} from "./generateAvatarTokens";
import { generateBadgeTokens, type IBadgeTokens } from "./generateBadgeTokens";
import {
  generateBreadcrumbsTokens,
  type IBreadcrumbsTokens
} from "./generateBreadcrumbsTokens";
import {
  generateButtonTokens,
  type IButtonTokens
} from "./generateButtonTokens";
import { generateCardTokens, type ICardTokens } from "./generateCardTokens";
import {
  generateCheckboxTokens,
  type ICheckboxTokens
} from "./generateCheckboxTokens";
import {
  generateDividerTokens,
  type IDividerTokens
} from "./generateDividerTokens";
import {
  generateDrawerTokens,
  type IDrawerTokens
} from "./generateDrawerTokens";
import {
  generateDropdownTokens,
  type IDropdownTokens
} from "./generateDropdownTokens";
import { generateImageTokens, type IImageTokens } from "./generateImageTokens";
import { generateInputTokens, type IInputTokens } from "./generateInputTokens";
import {
  generateLayoutTokens,
  type ILayoutTokens
} from "./generateLayoutTokens";
import {
  generateLoaderTokens,
  type ILoaderTokens
} from "./generateLoaderTokens";
import { generateMenuTokens, type IMenuTokens } from "./generateMenuTokens";
import { generateModalTokens, type IModalTokens } from "./generateModalTokens";
import {
  generateNotificationTokens,
  type INotificationTokens
} from "./generateNotificationTokens";
import {
  generatePaginationTokens,
  type IPaginationTokens
} from "./generatePaginationTokens";
import {
  generateProgressTokens,
  type IProgressTokens
} from "./generateProgressTokens";
import {
  generateRadioButtonTokens,
  type IRadioButtonTokens
} from "./generateRadioButtonTokens";
import {
  generateSwitchTokens,
  type ISwitchTokens
} from "./generateSwitchTokens";
import { generateTabsTokens, type ITabsTokens } from "./generateTabsTokens";
import { generateTagTokens, type ITagTokens } from "./generateTagTokens";
import {
  generateAccordionTokens,
  type IAccordionTokens
} from "./generateAccordionTokens";
import {
  generateMessageTokens,
  type IMessageTokens
} from "./generateMessageTokens";
import {
  type ICalendarTokens,
  generateCalendarTokens
} from "./generateCalendarTokens";
import {
  type ISliderTokens,
  generateSliderTokens
} from "./generateSliderTokens";
import {
  type ISkeletonTokens,
  generateSkeletonTokens
} from "./generateSkeletonTokens";

export interface IQuenUIComponents {
  Accordion: IAccordionTokens;
  Alert: IAlertTokens;
  Avatar: IAvatarTokens;
  Badge: IBadgeTokens;
  Breadcrumbs: IBreadcrumbsTokens;
  Button: IButtonTokens;
  Card: ICardTokens;
  Checkbox: ICheckboxTokens;
  Divider: IDividerTokens;
  Drawer: IDrawerTokens;
  Dropdown: IDropdownTokens;
  Image: IImageTokens;
  Input: IInputTokens;
  Layout: ILayoutTokens;
  Loader: ILoaderTokens;
  Menu: IMenuTokens;
  Modal: IModalTokens;
  Notification: INotificationTokens;
  Pagination: IPaginationTokens;
  Progress: IProgressTokens;
  RadioButton: IRadioButtonTokens;
  Switch: ISwitchTokens;
  Tabs: ITabsTokens;
  Tag: ITagTokens;
  Message: IMessageTokens;
  Calendar: ICalendarTokens;
  Slider: ISliderTokens;
  Skeleton: ISkeletonTokens;
}

export const generateComponentTokens = (
  theme: IQuenUITheme
): IQuenUIComponents => {
  return {
    Alert: generateAlertTokens(theme),
    Avatar: generateAvatarTokens(theme),
    Badge: generateBadgeTokens(theme),
    Breadcrumbs: generateBreadcrumbsTokens(theme),
    Button: generateButtonTokens(theme),
    Card: generateCardTokens(theme),
    Checkbox: generateCheckboxTokens(theme),
    Divider: generateDividerTokens(theme),
    Drawer: generateDrawerTokens(theme),
    Dropdown: generateDropdownTokens(theme),
    Image: generateImageTokens(theme),
    Input: generateInputTokens(theme),
    Layout: generateLayoutTokens(theme),
    Loader: generateLoaderTokens(theme),
    Menu: generateMenuTokens(theme),
    Modal: generateModalTokens(theme),
    Notification: generateNotificationTokens(theme),
    Pagination: generatePaginationTokens(theme),
    Progress: generateProgressTokens(theme),
    RadioButton: generateRadioButtonTokens(theme),
    Switch: generateSwitchTokens(theme),
    Tabs: generateTabsTokens(theme),
    Tag: generateTagTokens(theme),
    Accordion: generateAccordionTokens(theme),
    Message: generateMessageTokens(theme),
    Calendar: generateCalendarTokens(theme),
    Slider: generateSliderTokens(theme),
    Skeleton: generateSkeletonTokens(theme),
  };
};
