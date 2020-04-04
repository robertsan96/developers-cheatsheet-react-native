export const HTML_COLOR = {
  hex: "#E44D26",
  rgba: { r: 228, g: 77, b: 38, a: 1 }
};
export const CSS_COLOR = {
  hex: "#264DE4",
  rgba: { r: 38, g: 77, b: 228, a: 1 }
};
export const JS_COLOR = {
  hex: "#EDD718",
  rgba: { r: 237, g: 215, b: 24, a: 1 }
};

export const WHITE = { hex: "#ffffff", rgba: { r: 255, g: 255, b: 255, a: 1 } };
export const BLACK = { hex: "#000000", rgba: { r: 0, g: 0, b: 0, a: 1 } };
export const BLACK_2 = { hex: "#121212", rgba: { r: 18, g: 18, b: 18, a: 1 } };
export const BLACK_3 = { hex: "#232323", rgba: { r: 35, g: 35, b: 35, a: 1 } };
export const GREY = { hex: "#F2F2F2", rgba: { r: 242, g: 242, b: 242, a: 1 } };
export const DARK_GREY = {
  hex: "#494A4A",
  rgba: { r: 73, g: 73, b: 73, a: 1 }
};
export const YELLOW = { hex: "#F7AB00", rgba: { r: 247, g: 171, b: 0, a: 1 } };
export const PURPLE = {
  hex: "#831E74",
  rgba: { r: 131, g: 30, b: 116, alpha: 1 }
};

export const rgbaStringFromColor = (color = WHITE, alpha = 1) => {
  return `rgba(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b}, ${alpha})`;
};

export const THEMES = {
  DEFAULT: {
    dark: {
      PRIMARY_BACKGROUND_COLOR: BLACK,
      PRIMARY_COLOR: HTML_COLOR,
      SECTION_ROW_STRIP_EVEN_COLOR: BLACK_3,
      SECTION_ROW_STRIP_ODD_COLOR: BLACK_2,
      SECTION_ROW_TITLE_COLOR: WHITE,
      SECTION_ROW_DESCRIPTION_COLOR: WHITE,
      DISABLED_COLOR: DARK_GREY
    },
    light: {
      PRIMARY_BACKGROUND_COLOR: GREY,
      PRIMARY_COLOR: HTML_COLOR,
      SECTION_ROW_STRIP_EVEN_COLOR: GREY,
      SECTION_ROW_STRIP_ODD_COLOR: WHITE,
      SECTION_ROW_TITLE_COLOR: BLACK,
      SECTION_ROW_DESCRIPTION_COLOR: BLACK,
      DISABLED_COLOR: DARK_GREY
    }
  }
};

export default { HTML_COLOR, CSS_COLOR, JS_COLOR, WHITE, GREY, PURPLE };
