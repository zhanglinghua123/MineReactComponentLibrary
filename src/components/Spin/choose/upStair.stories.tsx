import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { UpStair } from "./UpStair";
export default {
    title: "ReactComponentLibrary/Spin/UpStair",
    component: UpStair,
} as ComponentMeta<typeof UpStair>;
const Template: ComponentStory<typeof UpStair> = (args) => {
    return (<>
        <UpStair {...args}></UpStair>
    </>)
}
export const UpStairCase = Template.bind({})
UpStairCase.args = {
    SpinColor: "#ACFCCC",
    size: "large",
    direction: "left"
}