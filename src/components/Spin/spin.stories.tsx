import Spin from "./Spin"
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { FourSphereRotate } from "./choose/FourSphereRotate";
import { UpStair } from "./choose/UpStair";
import { BarRolling } from "./choose/BarRolling";
import { Circle } from "./choose/CirCle";
import { Diamond } from "./choose/Diamond";
export default {
    title: "ReactComponentLibrary/Spin",
    component: Spin,
} as ComponentMeta<typeof Spin>;
const Template: ComponentStory<typeof Spin> = (args) => {
    return (<div style={{
        height: '150px',
        // backgroundColor: "green"
    }}>
        <Spin {...args}><div>Message</div></Spin>
    </div>)
}
export const SpinLoading = Template.bind({})
SpinLoading.args = {
    // direction: 'left',
    size: 'small',
    spinning: true,
    delay: 3,
    indicator: <FourSphereRotate size="large" direction="left" SpinColor="#ACFCCC"></FourSphereRotate>
}
export const SpinLoadingMessage = Template.bind({})
SpinLoadingMessage.args = {
    // direction: 'left',
    size: 'small',
    spinning: true,
    delay: 3,
    tip: "Loading !",
    indicator: <FourSphereRotate size="large" direction="left" SpinColor="#ACFCCC"></FourSphereRotate>
}
export const SpinLoadingUpStair = Template.bind({})
SpinLoadingUpStair.args = {
    // direction: 'left',
    size: 'small',
    spinning: false,
    delay: 3,
    tip: "BarRolling",
    defaultIndicator: "BarRolling",
    indicator: <UpStair size="large" direction="left" SpinColor="#ACFCCC"></UpStair>
}
export const SpinLoadingBarRolling = Template.bind({})
SpinLoadingBarRolling.args = {
    // direction: 'left',
    size: 'small',
    spinning: false,
    delay: 3,
    tip: "BarRolling",
    defaultIndicator: "BarRolling",
    indicator: <BarRolling size="large" SpinColor="#ACFCCC"></BarRolling>
}
export const SpinLoadingCirCle = Template.bind({})
SpinLoadingCirCle.args = {
    // direction: 'left',
    size: 'small',
    spinning: true,
    delay: 3,
    tip: "BarRolling",
    // defaultIndicator: "BarRolling",
    indicator: <Circle
        direction="right"
        size="large"
        Period1="3s"
        Period2="2.5s"
        Period3="2s"
        FirstColor="#FF0000"
        SecondColor="#1E90FF"
        ThirdColor="#FFFFFF"
    ></Circle >
}
export const SpinLoadingDiaMond = Template.bind({})
SpinLoadingDiaMond.args = {
    // direction: 'left',
    size: 'small',
    spinning: true,
    delay: 3,
    tip: "BarRolling",
    defaultIndicator: "BarRolling",
    indicator: <Diamond size="small"></Diamond>
}