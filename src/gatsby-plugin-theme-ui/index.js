// export default {
//   breakpoints: ["40em", "52em", "64em"],
//   space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
//   fonts: {
//     body:
//       'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
//     heading: "inherit",
//     monospace: "Menlo, monospace",
//   },
//   fontSizes: [12, 14, 16, 20, 24, 28, 32, 48, 64, 96],
//   fontWeights: {
//     body: 400,
//     heading: 700,
//     bold: 700,
//   },
//   lineHeights: {
//     body: 1.5,
//     heading: 1.125,
//   },
//   colors: {
//     text: "#000",
//     background: "#fff",
//     primary: "#07c",
//     secondary: "#30c",
//     muted: "#f6f6f6",
//   },
//   text: {
//     heading: {
//       fontFamily: "heading",
//       lineHeight: "heading",
//       fontWeight: "heading",
//     },
//   },
//   styles: {
//     root: {
//       fontFamily: "body",
//       lineHeight: "body",
//       fontWeight: "body",
//     },
//     h1: {
//       variant: "text.heading",
//       fontSize: 6,
//     },
//     h2: {
//       variant: "text.heading",
//       fontSize: 5,
//     },
//     h3: {
//       variant: "text.heading",
//       fontSize: 3,
//     },
//     h4: {
//       variant: "text.heading",
//       fontSize: 2,
//     },
//     h5: {
//       variant: "text.heading",
//       fontSize: 1,
//     },
//     h6: {
//       variant: "text.heading",
//       fontSize: 0,
//     },
//     pre: {
//       fontFamily: "monospace",
//       overflowX: "auto",
//       code: {
//         color: "inherit",
//       },
//     },
//     code: {
//       fontFamily: "monospace",
//       fontSize: "inherit",
//     },
//     table: {
//       width: "100%",
//       borderCollapse: "separate",
//       borderSpacing: 0,
//     },
//     th: {
//       textAlign: "left",
//       borderBottomStyle: "solid",
//     },
//     td: {
//       textAlign: "left",
//       borderBottomStyle: "solid",
//     },
//     header: {
//       padding: 9,
//     },
//   },
// }

import { swiss, polaris } from "@theme-ui/presets"
export default {
  ...polaris,
  fonts: {
    body:
      'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  colors: {
    ...polaris.colors,
    primaryLight: "#ACB3DF",
  },
  fontWeights: {
    body: 400,
    light: 200,
    medium: 500,
    heading: 700,
    bold: 700,
  },
  styles: {
    ...polaris.styles,
    a: {
      color: "inherit",
      fontWeight: "inherit",
      textDecoration: "none",
    },
  },
  links: {
    nav: {
      marginX: 4,
      py: 2,
      fontSize: 1,
      fontWeight: "medium",
    },
  },
}
