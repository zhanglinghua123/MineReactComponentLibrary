import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Circle } from "./CirCle";
export default {
    title: "ReactComponentLibrary/Spin/Circle",
    component: Circle,
} as ComponentMeta<typeof Circle>;
const Template: ComponentStory<typeof Circle> = (args) => {
    return (<>
        <Circle {...args}></Circle>
    </>)
}

export const CircleCase = Template.bind({})
CircleCase.args = {
    direction: "right",
    size: "large",
    Period1: "3s",
    Period2: "2.5s",
    Period3: "2s",
    FirstColor: "#FF0000",
    SecondColor: "#1E90FF",
    ThirdColor: "#FFFFFF",
}