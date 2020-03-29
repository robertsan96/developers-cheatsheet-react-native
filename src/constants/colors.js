export const HTML_COLOR = {
  hex: "#E44D26",
  rgba: { r: 228, g: 77, b: 38, a: 1 }
};

export const WHITE = { hex: "#ffffff", rgba: { r: 255, g: 255, b: 255, a: 1 } };
export const BLACK = { hex: "#000000", rgba: { r: 0, g: 0, b: 0, a: 1 } };
export const GRAY = { hex: "#F2F2F2", rgba: { r: 242, g: 242, b: 242, a: 1 } };
export const YELLOW = { hex: "#F7AB00", rgba: { r: 247, g: 171, b: 0, a: 1 } };

export const rgbaStringFromColor = (color = WHITE, alpha = 1) => {
  return `rgba(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b}, ${alpha})`;
};

export const THEMES = {
  DEFAULT: {
    dark: {
      PRIMARY_BACKGROUND_COLOR: BLACK,
      PRIMARY_COLOR: HTML_COLOR,
      SECTION_ROW_STRIP_EVEN_COLOR: YELLOW,
      SECTION_ROW_STRIP_ODD_COLOR: BLACK
    },
    light: {
      PRIMARY_BACKGROUND_COLOR: GRAY,
      PRIMARY_COLOR: HTML_COLOR,
      SECTION_ROW_STRIP_EVEN_COLOR: GRAY,
      SECTION_ROW_STRIP_ODD_COLOR: WHITE
    }
  }
};

export default { HTML_COLOR, WHITE };
