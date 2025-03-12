import {
  IColors,
  IVioletColors,
  IGrayColors,
  IGrayVioletColors,
  IRedColors,
  IYellowColors,
  IGreenColors,
  IOrangeColors
} from "../types/colors";

export const LightVioletColors: IVioletColors = {
  violet1: "#edeafc",
  violet2: "#dcd5fa",
  violet3: "#cac1f8",
  violet4: "#b9acf5",
  violet5: "#a798f3",
  violet6: "#9683f1",
  violet7: "#846fee",
  violet8: "#735aec",
  violet9: "#6246ea"
};

export const DarkVioletColors: IVioletColors = {
  violet1: "#0a071a",
  violet2: "#150f34",
  violet3: "#20174e",
  violet4: "#2b1f68",
  violet5: "#362682",
  violet6: "#412e9c",
  violet7: "#4c36b6",
  violet8: "#573ed0",
  violet9: "#6246ea"
}

export const LightGrayColors: IGrayColors = {
  gray1: "#fffffe",
  gray2: "#e2e2e1",
  gray3: "#c6c6c5",
  gray4: "#aaaaa9",
  gray5: "#8d8d8d",
  gray6: "#717170",
  gray7: "#555554",
  gray8: "#383838",
  gray9: "#1c1c1c"
}

export const DarkGrayColors: IGrayColors = {
  gray1: "#1c1c1c",
  gray2: "#383838",
  gray3: "#555554",
  gray4: "#717170",
  gray5: "#8d8d8d",
  gray6: "#aaaaa9",
  gray7: "#c6c6c5",
  gray8: "#e2e2e1",
  gray9: "#fffffe"
}

export const LightGrayVioletColors: IGrayVioletColors = {
  grayViolet1: "#f9f9fc",
  grayViolet2: "#f4f4fa",
  grayViolet3: "#efeff7",
  grayViolet4: "#eaeaf5",
  grayViolet5: "#e5e5f2",
  grayViolet6: "#e0e0f0",
  grayViolet7: "#dbdbed",
  grayViolet8: "#d6d6eb",
  grayViolet9: "#d1d1e9"
};

export const DarkGrayVioletColors: IGrayVioletColors = {
  grayViolet1: "#171719",
  grayViolet2: "#2e2e33",
  grayViolet3: "#45454d",
  grayViolet4: "#5c5c67",
  grayViolet5: "#747481",
  grayViolet6: "#8b8b9b",
  grayViolet7: "#a2a2b5",
  grayViolet8: "#b9b9cf",
  grayViolet9: "#d1d1e9"
};

export const LightRedColors: IRedColors = {
  red1: "#fcecec",
  red2: "#f9d9d9",
  red3: "#f6c7c7",
  red4: "#f3b4b4",
  red5: "#f0a2a2",
  red6: "#ed8f8f",
  red7: "#ea7d7d",
  red8: "#e76a6a",
  red9: "#e45858"
}

export const DarkRedColors: IRedColors = {
  red1: "#190909",
  red2: "#321313",
  red3: "#4c1d1d",
  red4: "#652727",
  red5: "#7e3030",
  red6: "#983a3a",
  red7: "#b14444",
  red8: "#ca4e4e",
  red9: "#e45858"
};

export const LightYellowColors: IYellowColors = {
  yellow1: "#fefeef",
  yellow2: "#fdfddf",
  yellow3: "#fdfccf",
  yellow4: "#fcfbbf",
  yellow5: "#fbfbb0",
  yellow6: "#fbfaa0",
  yellow7: "#faf990",
  yellow8: "#f9f880",
  yellow9: "#f9f871"
};

export const DarkYellowColors: IYellowColors = {
  yellow1: "#1b1b0c",
  yellow2: "#373719",
  yellow3: "#535225",
  yellow4: "#6e6e32",
  yellow5: "#8a893e",
  yellow6: "#a6a54b",
  yellow7: "#c1c057",
  yellow8: "#dddc64",
  yellow9: "#f9f871"
};

export const LightGreenColors: IGreenColors = {
  green1: "#e2f5f0",
  green2: "#c6ebe2",
  green3: "#aae1d4",
  green4: "#8dd7c6",
  green5: "#71ceb8",
  green6: "#55c4aa",
  green7: "#38ba9c",
  green8: "#1cb08e",
  green9: "#00a780"
};

export const DarkGreenColors: IGreenColors = {
  green1: "#00120e",
  green2: "#00251c",
  green3: "#00372a",
  green4: "#004a38",
  green5: "#005c47",
  green6: "#006f55",
  green7: "#008163",
  green8: "#009471",
  green9: "#00a780"
};

export const LightOrangeColors: IOrangeColors = {
  orange1: "#fff8eb",
  orange2: "#fff1d7",
  orange3: "#ffeac3",
  orange4: "#ffe3af",
  orange5: "#ffdd9c",
  orange6: "#ffd688",
  orange7: "#ffcf74",
  orange8: "#ffc860",
  orange9: "#ffc24d"
};

export const DarkOrangeColors: IOrangeColors = {
  orange1: "#1c1508",
  orange2: "#382b11",
  orange3: "#554019",
  orange4: "#715622",
  orange5: "#8d6b2a",
  orange6: "#aa8133",
  orange7: "#c6963b",
  orange8: "#e2ac44",
  orange9: "#ffc24d"
}


export const LightColors: IColors = {
  violet: LightVioletColors,
  gray: LightGrayColors,
  grayViolet: LightGrayVioletColors,
  red: LightRedColors,
  yellow: LightYellowColors,
  green: LightGreenColors,
  orange: LightOrangeColors
};

export const DarkColors: IColors = {
  violet: DarkVioletColors,
  gray: DarkGrayColors,
  grayViolet: DarkGrayVioletColors,
  red: DarkRedColors,
  yellow: DarkYellowColors,
  green: DarkGreenColors,
  orange: DarkOrangeColors
}
