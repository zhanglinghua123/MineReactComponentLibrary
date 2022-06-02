import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { BarRolling } from "./BarRolling";
export default {
    title: "ReactComponentLibrary/Spin/BarRolling",
    component: BarRolling,
} as ComponentMeta<typeof BarRolling>;
const Template: ComponentStory<typeof BarRolling> = (args) => {
    return (<>
        <BarRolling {...args}></BarRolling>
    </>)
}
export const BarRollingCase = Template.bind({})
BarRollingCase.args = {
    SpinColor: "#ACFCCC",
    size: "large",
}