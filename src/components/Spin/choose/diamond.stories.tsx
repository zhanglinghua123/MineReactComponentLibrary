import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Diamond } from "./Diamond";
export default {
    title: "ReactComponentLibrary/Spin/Diamond",
    component: Diamond,
} as ComponentMeta<typeof Diamond>;
const Template: ComponentStory<typeof Diamond> = (args) => {
    return (<>
        <Diamond {...args}></Diamond>
    </>)
}
export const DiamondCase = Template.bind({})
DiamondCase.args = {
    size: "large",
    // direction: "left",
    Color: "#FFF",
}