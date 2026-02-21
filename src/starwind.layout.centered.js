// sw-centered.js
import {
  createStarwindElement,
  defineElement,
} from "./starwind.elements.util.js";

const SwCenteredLayout = createStarwindElement({
  size: { var: "--sw-centered-size", type: "raw" },
  max: { var: "--sw-centered-max", type: "raw" },
  gutter: { var: "--sw-centered-gutter", type: "space" },
});

export function defineSwCentered() {
  defineElement("sw-centered", SwCenteredLayout);
}
