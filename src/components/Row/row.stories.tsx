import Row from "./Row"
import { ComponentMeta, ComponentStory } from "@storybook/react";
export default {
    title: "ReactComponentLibrary/Row",
    component: Row,
} as ComponentMeta<typeof Row>;
import { OneRowColumn, MultiRowColumn, TestTwelveColumn } from "../Col/col.stories";
import React from "react";
const Template: ComponentStory<typeof Row> = (args) => {
    return (
        <Row {...args}>
            <OneRowColumn {...OneRowColumn.args} />
            <OneRowColumn {...OneRowColumn.args} />
        </Row>
    )
}
export const RowCaseone = Template.bind({})
RowCaseone.args = {
    gutter: 20
}
export const RowCaseTwo = Template.bind({})
RowCaseTwo.args = {
    gutter: [20, 10],
    // align: "top",
    // justify: "space-between"
}
const Template2: ComponentStory<typeof Row> = (args) => {
    return (
        <Row {...args}>
            <TestTwelveColumn {...TestTwelveColumn.args}></TestTwelveColumn>
        </Row>
    )
}
export const RowTestJustify = Template2.bind({})
RowTestJustify.args = {
    gutter: 20,
    justify: "start"
}