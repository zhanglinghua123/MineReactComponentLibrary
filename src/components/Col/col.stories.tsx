import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Col from "./Col";
import Row from "../Row/Row"
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Col",
    component: Col,
} as ComponentMeta<typeof Col>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Col> = (args) => {
    const { span = 6, number = 24, style, ...others } = args
    const colNumber: number = Math.ceil(number / (span as number))
    const COlArray = new Array(colNumber).fill(0).map(() => {
        return (
            <Col span={span} style={style} {...others}>
                <div style={{
                    backgroundColor: "green"
                }}>
                    {colNumber}12121test
                </div>
            </Col >
        )
    })
    return (
        <>
            {COlArray}
        </>
    )
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template2: ComponentStory<typeof Col> = (args) => {
    const { span, number = 12, ...others } = args
    console.log(number, span)
    const COlArray = new Array(number).fill(0).map(() => {
        return (
            <Col span={span} {...others}>
                <div style={{
                    backgroundColor: "green"
                }}>
                    {number}12121test
                </div>
            </Col >
        )
    })
    return (
        <>
            {COlArray}
        </>
    )
};

export const OneRowColumn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OneRowColumn.args = {
    span: 6,
    pull: 1,
    push: 1,
    // offset: 1,
    // leftPadding: "10px",
    // rightPadding: "20px",
    className: '',
    style: {
        // paddingLeft: "100px",
        // paddingRight: "100px",
        fontSize: "30px",
        // marginLeft: "30px",
    }
};

export const MultiRowColumn = Template.bind({});
MultiRowColumn.args = {
    span: 6,
    pull: 1,
    push: 1,
    offset: 1,
    leftPadding: "10px",
    rightPadding: "20px",
    className: '',
    number: 192,
};
export const TestTwelveColumn = Template2.bind({})
TestTwelveColumn.args = {
    span: 2,
    pull: 1,
    push: 1,
    // offset: 1,
    className: "",
    number: 4
}