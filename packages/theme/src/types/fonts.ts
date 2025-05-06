export interface IFont {
  header: {
    fontSize: {
      "2xl": string;
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    lineHeight: {
      "2xl": string;
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    fontWeight: number;
  };
  control: {
    fontSize: {
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    lineHeight: {
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    fontWeight: number;
  };
  text: {
    fontSize: {
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    lineHeight: {
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    fontWeight: number;
  };
}

export interface IQuenUIFont {
  header: {
    size: {
      "2xl": string;
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    lineHeight: {
      "2xl": string;
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    weight: number;
  };
  text: {
    size: {
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    lineHeight: {
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    weight: number;
  };
}
