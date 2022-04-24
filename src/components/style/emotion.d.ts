import "@emotion/react";
import LibTheme from "./theme.type";

declare module "@emotion/react" {
  export interface Theme extends LibTheme {}
}
