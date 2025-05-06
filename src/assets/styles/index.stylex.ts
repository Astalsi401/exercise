import * as stylex from "@stylexjs/stylex";
import { StyleXVar } from "@stylexjs/stylex/lib/StyleXTypes";

const DARK = "@media (prefers-color-scheme: dark)";
// const BREAKPOINTS = {
//   sm: "@media (min-width: 576px)",
//   md: "@media (min-width: 768px)",
//   lg: "@media (min-width: 992px)",
//   xl: "@media (min-width: 1200px)",
// };

export const colors = stylex.defineVars({
  mainBg: { default: "rgb(255, 255, 255)", [DARK]: "rgb(39, 39, 39)" },
  mainText: { default: "rgb(0, 0, 0)", [DARK]: "rgb(255, 255, 255)" },
  lineColor: { default: "rgba(0, 0, 0, 0.4)", [DARK]: "rgba(255, 255, 255, 0.4)" },
  highlightBg: { default: "rgba(0, 140, 255, 0.1)", [DARK]: "rgb(255, 255, 255, 0.1)" },
  btnBg: { default: "rgb(0, 140, 255)", [DARK]: "rgb(0, 140, 255)" },
});

export const spacing = stylex.create({
  m: (n: number) => ({ margin: `${n}rem` }),
  mt: (n: number) => ({ marginTop: `${n}rem` }),
  mb: (n: number) => ({ marginBottom: `${n}rem` }),
  ms: (n: number) => ({ marginLeft: `${n}rem` }),
  me: (n: number) => ({ marginRight: `${n}rem` }),
  mx: (n: number) => ({ marginInline: `${n}rem` }),
  my: (n: number) => ({ marginBlock: `${n}rem` }),
  p: (n: number) => ({ padding: `${n}rem` }),
  pt: (n: number) => ({ paddingTop: `${n}rem` }),
  pb: (n: number) => ({ paddingBottom: `${n}rem` }),
  ps: (n: number) => ({ paddingLeft: `${n}rem` }),
  pe: (n: number) => ({ paddingRight: `${n}rem` }),
  px: (n: number) => ({ paddingInline: `${n}rem` }),
  py: (n: number) => ({ paddingBlock: `${n}rem` }),
});

export const sizing = stylex.create({
  h: (n: number) => ({ height: `${n}rem` }),
  w: (n: number) => ({ width: `${n}rem` }),
  wp: (n: number) => ({ width: `${n}%` }),
  hp: (n: number) => ({ height: `${n}%` }),
  wCustom: (width: string) => ({ width }),
  hCustom: (height: string) => ({ height }),
});

export const effect = stylex.create({
  shadow: (n: number) => ({ boxShadow: `0 0 ${n}px ${colors.lineColor}` }),
});

export const backFilter = stylex.create({
  blur: (n: number) => ({ backdropFilter: `blur(${n}px)` }),
});

export const background = stylex.create({
  color: (backgroundColor: StyleXVar<string>) => ({ backgroundColor }),
});

export const border = stylex.create({
  radius: (n: number) => ({ borderRadius: `${n}rem` }),
  w: (n: number) => ({ borderWidth: `${n}px` }),
  wx: (n: number) => ({ borderInlineWidth: `${n}px` }),
  wy: (n: number) => ({ borderBlockWidth: `${n}px` }),
  wt: (n: number) => ({ borderTopWidth: `${n}px` }),
  wb: (n: number) => ({ borderBottomWidth: `${n}px` }),
  ws: (n: number) => ({ borderLeftWidth: `${n}px` }),
  wr: (n: number) => ({ borderRightWidth: `${n}px` }),
  color: (borderColor: StyleXVar<string>) => ({ borderColor }),
  style: (borderStyle: "solid" | "dashed" | "dotted" | "none") => ({ borderStyle }),
});

export const outline = stylex.create({
  w: (n: number) => ({ outlineWidth: `${n}px` }),
  color: (borderColor: StyleXVar<string>) => ({ borderColor }),
  style: (borderStyle: "solid" | "dashed" | "dotted" | "none") => ({ borderStyle }),
  offset: (n: number) => ({ outlineOffset: `${n}px` }),
});

export const layout = stylex.create({
  d: (display: "flex" | "grid" | "inline-flex" | "inline-grid" | "contents" | "none" | "block" | "inline-block" | "inline") => ({ display }),
  dir: (flexDirection: "row" | "row-reverse" | "column" | "column-reverse") => ({ flexDirection }),
  wrap: (value: boolean) => ({ flexWrap: value ? "wrap" : "nowrap" }),
  grow: (flexGrow: 1 | 0) => ({ flexGrow }),
  shrink: (flexShrink: 1 | 0) => ({ flexShrink }),
  alignItems: (alignItems: "flex-start" | "flex-end" | "center" | "stretch" | "baseline") => ({ alignItems }),
  cols: (value: number) => ({ gridTemplateColumns: `repeat(${value}, 1fr)` }),
  rows: (value: number) => ({ gridTemplateRows: `repeat(${value}, 1fr)` }),
  pos: (position: "static" | "relative" | "absolute" | "fixed" | "sticky") => ({ position }),
});

export const fontSize = stylex.create({
  xs: { fontSize: "1.2rem" },
  sm: { fontSize: "1.4rem" },
  md: { fontSize: "1.6rem" },
  lg: { fontSize: "1.8rem" },
  xl: { fontSize: "2rem" },
  x2l: { fontSize: "2.4rem" },
  x3l: { fontSize: "3rem" },
  x4l: { fontSize: "3.6rem" },
  x5l: { fontSize: "4.8rem" },
  x6l: { fontSize: "6rem" },
  x7l: { fontSize: "7.2rem" },
  x8l: { fontSize: "9.6rem" },
  x9l: { fontSize: "12.8rem" },
});

export const fontWeights = stylex.create({
  light: { fontWeight: "lighter" },
  normal: { fontWeight: "normal" },
  bold: { fontWeight: "bold" },
  bolder: { fontWeight: "bolder" },
});

export const textAlign = stylex.create({
  align: (textAlign: "left" | "center" | "right" | "justify" | "start" | "end") => ({ textAlign }),
});
