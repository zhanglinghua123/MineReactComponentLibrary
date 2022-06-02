import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { FourSphereRotate } from "./FourSphereRotate";
export default {
    title: "ReactComponentLibrary/Spin/FourSphereRotate",
    component: FourSphereRotate,
} as ComponentMeta<typeof FourSphereRotate>;
const Template: ComponentStory<typeof FourSphereRotate> = (args) => {
    return (<>
        <FourSphereRotate {...args}></FourSphereRotate>
    </>)
}
export const FourSphereRotateCase = Template.bind({})
FourSphereRotateCase.args = {
    SpinColor: "#ACFCCC",
    size: "large",
    direction: "left"
}