import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import Button from "../components/Button";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("DemoButton")} />
));

storiesOf("Components|Button", module).add("with text", () => (
  <Button onClick={action("clicked")}>Click Me</Button>
));
