import React from "react";
import Col from "../../Col/Col";
import Row from "../../Row/Row";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "../icons/Icon";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Icon",
    component: Icon,
} as ComponentMeta<typeof Icon>;
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
export const testicon = Template.bind({})
testicon.args = {
    src: 'LeftArrow',
}
const Template2: ComponentStory<typeof Icon> = () => {
    return (
        <Row>
            <Col span={4}><Icon src="closecircle" size="100%"></Icon></Col>
            <Col span={4}><Icon src="closecirclefill" size="100%"></Icon></Col>
        </Row>
    )
}
export const IconList = Template2.bind({})
IconList.args = {
    src: 'LeftArrow',
}