import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Affix from "./Affix";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Affix",
    component: Affix,
} as ComponentMeta<typeof Affix>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const HelloWorld = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// HelloWorld.args = {
//     label: "Hello world!",
// };

// export const ClickMe = Template.bind({});
// ClickMe.args = {
//     label: "Click me!",
// };
export const Primary: ComponentStory<typeof Affix> = () => <Affix target={null}>Button</Affix>