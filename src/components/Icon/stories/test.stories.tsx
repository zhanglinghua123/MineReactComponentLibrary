import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TestIcon } from "../icons/test";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Icon",
    component: TestIcon,
} as ComponentMeta<typeof TestIcon>;
const Template: ComponentStory<typeof TestIcon> = (args) => <TestIcon />;
export const test = Template.bind({})
test.args = {}
