import React from "react";
import Col from "../../Col/Col";
import Row from "../../Row/Row";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TestIcon } from "../icons/test";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Icon",
    component: TestIcon,
} as ComponentMeta<typeof TestIcon>;
const Template: ComponentStory<typeof TestIcon> = (args) => <TestIcon {...args} />;
export const testicon = Template.bind({})
testicon.args = {
    src: 'LeftArrow',
}
const Template2: ComponentStory<typeof TestIcon> = () => {
    return (
        <Row>
            <Col span={4}><TestIcon src="LeftArrow"></TestIcon></Col>
            <Col span={4}><TestIcon src="Query"></TestIcon></Col>
        </Row>
    )
}
export const IconList = Template2.bind({})
IconList.args = {
    src: 'LeftArrow',
}