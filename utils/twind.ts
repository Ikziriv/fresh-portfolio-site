import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind/shim";
import * as colors from 'twind/colors';
export * from "twind";

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'sans-serif'],
      serif: ['Times', 'serif'],
    }, 
    extend: {
      colors,
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
};
if (IS_BROWSER) setup(config);
