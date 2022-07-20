import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Drawer, DrawerProps } from './Drawer';
import { Icon } from '../Icon';
import { AlertGroup } from '../Alert/alert.stories';
import Button from '../Button';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Drawer',
    component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = args => {
    const { visible: _, onClose, size, placement, title, ...props } = args;
    const [visible3, SetVisible3] = useState<boolean>(false);
    return (
        <div>
            <Button
                type="primary"
                onClick={() => {
                    SetVisible3(true);
                }}
            >
                打开Drawer
            </Button>
            <Drawer
                placement={placement}
                size={size}
                visible={visible3}
                onClose={() => {
                    SetVisible3(false);
                }}
                {...props}
            ></Drawer>
        </div>
    );
};
export const OneDrawer = Template.bind({});
OneDrawer.args = {
    mask: true,
    placement: 'top',
    size: 'small',
    title: 'Drawer Title',
    extra: <Button type="primary">Close Icon</Button>,
    keyboard: true,
};
const Template2: ComponentStory<typeof Drawer> = args => {
    return (
        <div>
            <OneDrawer {...args}>
                <OneDrawer {...args}>
                    <OneDrawer {...args}>
                        <OneDrawer {...args} placement="bottom">
                            {' '}
                        </OneDrawer>
                    </OneDrawer>
                </OneDrawer>
            </OneDrawer>
        </div>
    );
};
export const Multi = Template2.bind({
    mask: true,
    placement: 'top',
    size: 'small',
    title: 'Drawer Title',
    extra: <Button type="primary">Close Icon</Button>,
    keyboard: true,
});
