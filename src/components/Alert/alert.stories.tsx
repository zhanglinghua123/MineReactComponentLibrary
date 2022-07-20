import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert, AlertProps } from './Alert';
import { Icon } from '../Icon';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Alert',
    component: Alert,
} as ComponentMeta<typeof Alert>;
const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />;
export const alert = Template.bind({});
alert.args = {
    type: 'success',
    detail: '测试用例',
    tip: '测试用例的Title',
};
const TemplateTwo: ComponentStory<typeof Alert> = props => {
    const { type, ...args } = props;
    return (
        <div>
            <Alert {...args} type="success" />
            <Alert {...args} type="info" />
            <Alert {...args} type="warning" />
            <Alert {...args} type="error" />
        </div>
    );
};
export const AlertGroup = TemplateTwo.bind({});
AlertGroup.args = {
    detail: '测试用例',
    tip: '测试用例的Title',
    onClose: () => {
        console.log('当前点击的Alert为');
    },
    closeable: false,
    showIcon: false,
    closeIcon: '关闭',
};
