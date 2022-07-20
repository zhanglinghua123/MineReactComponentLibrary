import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Demo, Demo2 } from './react_useState';

export default {
    title: 'ReactComponentLibrary/Demo',
    component: Demo,
} as ComponentMeta<typeof Demo>;
const Template: ComponentStory<typeof Demo> = args => {
    return (
        <div
            style={{
                height: '150px',
                // backgroundColor: "green"
            }}
        >
            <Demo>
                父亲:
                <Demo>儿子:</Demo>
            </Demo>
        </div>
    );
};
export const Demo1_pre = Template.bind({});

const Template2: ComponentStory<typeof Demo> = args => {
    return (
        <div
            style={{
                height: '150px',
                // backgroundColor: "green"
            }}
        >
            <Demo2>
                父亲:
                <Demo2>儿子:</Demo2>
            </Demo2>
        </div>
    );
};
export const Demo2_Pre = Template2.bind({});
