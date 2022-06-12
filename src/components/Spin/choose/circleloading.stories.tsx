import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { CirCleLoading } from "./CirCleLoading";
export default {
    title: "ReactComponentLibrary/Spin/CirCleLoading",
    component: CirCleLoading,
} as ComponentMeta<typeof CirCleLoading>;
const Template: ComponentStory<typeof CirCleLoading> = (args) => {
    return (<>
        <CirCleLoading {...args}></CirCleLoading>
    </>)
}

export const CirCleLoadingCase = Template.bind({})
CirCleLoadingCase.args = {
    // direction: "right",
    // size: "large",
    // Period1: "3s",
    // Period2: "2.5s",
    // Period3: "2s",
    // FirstColor: "#FF0000",
    // SecondColor: "#1E90FF",
    // ThirdColor: "#FFFFFF",
}