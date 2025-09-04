import{j as n}from"./index-jR0FLVqU.js";import{B as s,F as r}from"./styles-B8Yckata.js";import{a as e,N as d,n as c}from"./types-BkV3UEzx.js";import{u as l}from"./index-BOxoqHcG.js";import"./Title-DYSXEtp2.js";const h=()=>{const t=()=>{c.show({title:"Default Notification",message:"Do not forget to star QuenUI on GitHub!"})};return n.jsxs(n.Fragment,{children:[n.jsx(e,{}),n.jsx(s,{onClick:t,children:"Show notification"})]})},u=()=>{const t=["top-left","top-right","top","bottom-left","bottom-right","bottom"],i=o=>{c.show({title:`Notification at ${o}`,message:"Notification message",position:o,autoClose:!1})};return n.jsxs(n.Fragment,{children:[n.jsx(e,{}),n.jsx(r,{gap:"m",children:t.map(o=>n.jsxs(s,{onClick:()=>i(o),children:["Show ",o," notification"]},o))})]})},p=()=>{const t=i=>{c.show({title:`Notification at ${i}`,message:"Notification message",status:i,autoClose:!1})};return n.jsxs(n.Fragment,{children:[n.jsx(e,{}),n.jsx(r,{gap:"m",children:d.map(i=>n.jsxs(s,{onClick:()=>t(i),children:["Show ",i," notification"]},i))})]})},N={package:"@quen-ui/components",title:"Notification",order:1,group:"components",description:"The Notification system provides contextual feedback alerts with multiple status types, positioning options, and customizable display durations.",import:"import { NotificationInstance, notifications } from '@quen-ui/components';",source:"/packages/components/src/Notification",demo:!1};function a(t){const i={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h4,{children:"Basic usage"}),`
`,n.jsx(i.p,{children:"To enable notifications in your app:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Render ",n.jsx(i.code,{children:"NotificationInstance"})," inside your application root."]}),`
`,n.jsxs(i.li,{children:["Wrap with ",n.jsx(i.code,{children:"QuenUIProvider"})," for proper theming."]}),`
`,n.jsxs(i.li,{children:["Only one ",n.jsx(i.code,{children:"NotificationInstance"})," should exist in the DOM."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`import { NotificationInstance } from "@quen-ui/components";
import { QuenUIProvider } from "@quen-ui/theme";

function Demo() {
  return (
    <QuenUIProvider>
      <NotificationInstance />
      {/* Your app here */}
    </QuenUIProvider>
  );
}
`})}),`
`,n.jsx(i.p,{children:"Once set up, you can trigger notifications anywhere in your app:"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`export const NotificationsDefault = () => {
  const onClick = () => {
    notifications.show({
      title: "Default Notification",
      message: "Do not forget to star QuenUI on GitHub!"
    });
  };
  return <Button onClick={onClick}>Show notification</Button>;
};
`})}),`
`,n.jsx(h,{}),`
`,n.jsx(i.h4,{children:"Features"}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.code,{children:"notifications"})," API provides the following functions:"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"show(params)"})," - Adds a new notification"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"hide(id)"})," - Removes a specific notification by ID"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"update(params)"})," - Updates an existing notification"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"clean"})," - Clears all notifications from the screen"]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-ts",children:`  /** Displays new notification */
  show: (notification: INotificationParams) => string;
  /** Removes specific notification */
  hide: (id: string) => string;
  /** Updates existing notification */
  update: (notification: Partial<INotificationParams>) => string;
  /** Clears all notifications */
  clean: () => void;
`})}),`
`,n.jsx(i.p,{children:"These functions allow you to manage notifications dynamically throughout the app."}),`
`,n.jsx(i.h4,{children:"Positions"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-ts",children:`type TNotificationPosition =
  | "top-left"
  | "top-right"
  | "top"
  | "bottom-left"
  | "bottom-right"
  | "bottom";
`})}),`
`,n.jsx(u,{}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`const NotificationsPositions = () => {
  const positions = [
    "top-left",
    "top-right",
    "top",
    "bottom-left",
    "bottom-right",
    "bottom"
  ] as const;

  const onClick = (position: (typeof positions)[number]) => {
    notifications.show({
      title: \`Notification at \${position}\`,
      message: "Notification message",
      position
    });
  };
  return (
    <Flex gap="m">
      {positions.map((position) => (
        <Button key={position} onClick={() => onClick(position)}>
          Show {position} notification
        </Button>
      ))}
    </Flex>
  );
};
`})}),`
`,n.jsx(i.h4,{children:"Status variants"}),`
`,n.jsxs(i.p,{children:["Notifications support four visual styles via the ",n.jsx(i.code,{children:"status"})," prop. These help communicate the context and importance of a message."]}),`
`,n.jsx(p,{}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`const NotificationsStatuses = () => {
  const onClick = (status: INotificationParams["status"]) => {
    notifications.show({
      title: \`Notification at \${status}\`,
      message: "Notification message",
      status,
      autoClose: false
    });
  };
  return (
    <>
      <NotificationInstance />
      <Flex gap="m">
        {NOTIFICATION_STATUSES.map((status) => (
          <Button key={status} onClick={() => onClick(status)}>
            Show {status} notification
          </Button>
        ))}
      </Flex>
    </>
  );
};

`})}),`
`,n.jsx(i.h4,{children:"Best practice"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Status selection guide"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"success"}),": For completed actions (e.g., payments, submissions)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"error"}),": For failures or blocking issues"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"warning"}),": For non-critical problems (e.g., deprecations)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"info"}),": For neutral system messages"]}),`
`]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Timing"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Success / Info: ",n.jsx(i.code,{children:"autoClose=5000"})]}),`
`,n.jsxs(i.li,{children:["Warnings: ",n.jsx(i.code,{children:"autoClose=10000"})]}),`
`,n.jsxs(i.li,{children:["Errors requiring user action: ",n.jsx(i.code,{children:"autoClose=false"})]}),`
`]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Performance"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Keep 3–5 concurrent notifications on screen"}),`
`,n.jsx(i.li,{children:"Use clean() when switching views to avoid stale messages"}),`
`]}),`
`]}),`
`]})]})}function C(t={}){const{wrapper:i}={...l(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(a,{...t})}):a(t)}export{C as default,N as frontmatter};
