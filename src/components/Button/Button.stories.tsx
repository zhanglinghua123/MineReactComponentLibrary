import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { Icon } from "../Icon";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    children: "Hello Wolrd!",
    size: "large"
};

const Template2: ComponentStory<typeof Button> = (args) => {
    const { type, children, ...rest } = args
    const Test = 1000
    return (
        <div>
            <Button {...rest} type="primary" children="primary" />
            <Button {...rest} type="dashed" children="dashed" />
            <Button {...rest} type="text" children="text" />
            <Button {...rest} type="default" children="default" />
            <Button {...rest} type="link" children="link" />
            <br></br>
            <>Block</>
            <br></br>
            <Button {...rest} type="primary" children="primary" block></Button>
            <br></br>
            <>Danger</>
            <br></br>
            <Button {...rest} type="primary" children="primary" danger />
            <Button {...rest} type="dashed" children="dashed" danger />
            <Button {...rest} type="text" children="text" danger />
            <Button {...rest} type="default" children="default" danger />
            <Button {...rest} type="link" children="link" danger />
            <Button {...rest} children="ghost" ghost={true} danger />
            <div style={{ margin: "10px 0", backgroundColor: "rgba(0,0,0,.1)" }}>
                <>Ghost</>
                <br></br>
                <Button {...rest} type="primary" children="primary" ghost />
                <Button {...rest} type="dashed" children="dashed" ghost />
                <Button {...rest} type="text" children="text" ghost />
                <Button {...rest} type="default" children="default" ghost />
                <Button {...rest} type="link" children="link" ghost />
                <br></br>
                <>Ghost Danger</>
                <br></br>
                <Button {...rest} type="primary" children="primary" danger ghost />
                <Button {...rest} type="dashed" children="dashed" danger ghost />
                <Button {...rest} type="text" children="text" danger ghost />
                <Button {...rest} type="default" children="default" danger ghost />
                <Button {...rest} type="link" children="link" danger ghost />
                <br></br>
                <>Danger</>
                <br></br>
                <Button {...rest} type="primary" children="primary" danger />
                <Button {...rest} type="dashed" children="dashed" danger />
                <Button {...rest} type="text" children="text" danger />
                <Button {...rest} type="default" children="default" danger />
                <Button {...rest} type="link" children="link" danger />
            </div>
            <br></br>
            <>Onclick</>
            <br></br>
            <Button {...rest} type="primary" children="primary" danger onClick={() => { console.log("----", 1212121) }} />
            <br></br>
            <>Disabled</>
            <br></br>
            <Button {...rest} type="primary" children="primary" danger disabled />
            <Button {...rest} type="dashed" children="dashed" danger disabled />
            <Button {...rest} type="text" children="text" danger disabled />
            <Button {...rest} type="default" children="default" danger disabled />
            <Button {...rest} type="link" children="link" danger disabled />
            <br></br>
            <>Disabled Ghost</>
            <br></br>
            <div style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
                <Button {...rest} type="primary" children="primary" ghost disabled />
                <Button {...rest} type="dashed" children="dashed" ghost disabled />
                <Button {...rest} type="text" children="text" ghost disabled />
                <Button {...rest} type="default" children="default" ghost disabled />
                <Button {...rest} type="link" children="link" ghost disabled />
            </div>
            <br></br>
            <>Href and Link</>
            <br></br>
            <Button {...rest} type="link" children="link" href="https://www.baidu.com" />
            <Button {...rest} type="link" children="link" danger ghost href="https://www.baidu.com" />
            <br></br>
            <>Shaped</>
            <br></br>
            <Button {...rest} shape="circle" children="Circled Button" />
            <Button {...rest} shape="default" children="Defaulted Button" />
            <Button {...rest} shape="round" children="Rounded Button" />
            <br></br>
            <>Icon</>
            <br></br>
            <Button shape="round" type="primary" {...rest}><Icon src="adduser"></Icon>Hello World! 323232
                ewewe 3232 {Test} {Test}</Button>
            <br></br>
            <>Loading Icon</>
            <br></br>
            <Button loading shape="round" type="primary" {...rest}><Icon src="adduser"></Icon>Hello World!</Button>
            <Button loading={{ delay: 3 }} shape="round" type="primary" {...rest}><Icon src="adduser"></Icon>Hello World!</Button>
        </div>
    )
};
export const ButtonGroup = Template2.bind({})
ButtonGroup.args = {
    children: "Hello World!"
}