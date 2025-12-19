import { StoryObj } from "@storybook/react";
import Spoiler from "../Spoiler";

export default {
  title: "Components/Spoiler",
  component: Spoiler,
  parameters: {
    layout: "centered"
  }
} as StoryObj<typeof Spoiler>;

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere elementum congue. Sed ultricies, nunc vel ornare dapibus, lacus metus molestie risus, pharetra eleifend tortor mi sit amet velit. Aliquam erat volutpat. Quisque orci dui, consequat nec felis nec, sagittis lacinia nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pharetra eleifend risus, eu auctor enim ultrices quis. Proin ac nibh et ante lobortis efficitur eget id sapien. Duis nec cursus lectus. Fusce pulvinar ipsum at accumsan mattis. Cras eleifend orci ac hendrerit consectetur. Vestibulum faucibus eget velit sed varius. Fusce convallis nisi nisi, sed egestas purus iaculis a.\n" +
  "\n" +
  "Nunc quis mollis orci, nec sagittis leo. Cras dolor lacus, sodales sit amet elit ut, consectetur varius lectus. Quisque pharetra porta elementum. Fusce facilisis convallis ultricies. Nullam et semper risus. Aliquam malesuada sapien quis sodales scelerisque. Phasellus dignissim at dolor non aliquet. Donec imperdiet erat sit amet pharetra sagittis. Nam vitae egestas nunc, vel eleifend odio.\n" +
  "\n" +
  "Fusce vitae venenatis magna. In hac habitasse platea dictumst. Vivamus scelerisque lorem nec ullamcorper vestibulum. Donec id diam tempus, lobortis orci vitae, faucibus diam. Duis aliquet tortor lorem, quis tincidunt neque consequat id. Donec est arcu, porttitor eu erat ut, mattis malesuada nibh. Cras in suscipit neque, eget consectetur elit. Nunc eu enim sagittis, pretium enim vel, iaculis massa. Praesent non mauris leo. Sed pretium nisi non lorem bibendum cursus. Aliquam vulputate fringilla scelerisque. Donec erat turpis, ullamcorper in condimentum suscipit, vehicula non mauris. Sed convallis mauris ut euismod vulputate.\n" +
  "\n" +
  "Integer convallis ex in elit dapibus, ac semper erat placerat. Sed id vehicula lorem. Curabitur nec ante non magna tincidunt dignissim ac nec orci. Nunc quis nibh eu ex tincidunt scelerisque ut eget neque. Mauris volutpat consequat dolor sed hendrerit. Nulla non feugiat sapien. Aenean id odio ut elit interdum consectetur. Cras mattis gravida vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vehicula porttitor magna sed ullamcorper. Sed lobortis, ex efficitur eleifend venenatis, felis nulla hendrerit ante, nec accumsan diam metus et metus. Integer vel eleifend quam. Pellentesque posuere dictum enim. Mauris dapibus risus nulla, non porttitor arcu ultricies ac. In tincidunt, ligula vitae auctor fermentum, nisl justo pulvinar est, ac semper mi tortor vel nulla. Suspendisse tincidunt dignissim sagittis.\n" +
  "\n" +
  "Pellentesque ultricies est nulla, nec tempus nulla ullamcorper posuere. Praesent id tellus lorem. Quisque at vehicula ante, id cursus lacus. Nam ac molestie purus. Maecenas euismod quam eget dui accumsan, vel rhoncus arcu interdum. Mauris lacus ipsum, congue a purus ut, posuere tincidunt justo. Vestibulum sit amet ipsum a velit blandit mollis a a lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n" +
  "\n" +
  "Nullam tincidunt orci vel pellentesque mollis. Mauris vel diam bibendum tellus tempor accumsan. Phasellus venenatis, augue at placerat dignissim, dui enim commodo libero, sit amet ultricies enim diam fermentum nisi. Pellentesque malesuada, quam eget lobortis mollis, eros arcu scelerisque urna, eget aliquam nisi enim vel sem. Maecenas a nisl eu sapien aliquam mollis eu vel nunc. Quisque accumsan dignissim consectetur. Pellentesque eu malesuada magna. Aliquam vitae tempor leo. Donec ac accumsan libero. Vivamus vitae nulla in augue vestibulum imperdiet nec vel ante. Maecenas blandit, metus vitae condimentum semper, diam massa fringilla ipsum, nec porttitor lacus nisi at nulla. Aenean et sagittis magna, a pulvinar lectus.\n" +
  "\n" +
  "Cras venenatis, velit non cursus dictum, lorem tortor blandit leo, ";

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    children: content
  }
} as StoryObj<typeof Spoiler>;
