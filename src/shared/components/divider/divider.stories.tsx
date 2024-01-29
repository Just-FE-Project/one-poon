/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import { Meta, StoryFn as Story } from '@storybook/react';

import { Divider, DividerProps } from '.';

const meta: Meta<DividerProps> = {
  title: 'Layout/Divider',
  component: Divider,
  args: {
    children: 'OR',
  },
};
export default meta;

export const Default: Story<DividerProps> = ({ children, ...args }) => {
  return (
    <div className="flex w-full flex-col border-opacity-50">
      <div className="grid h-20 place-items-center rounded-box bg-base-300">content</div>
      <Divider {...args}>{children}</Divider>
      <div className="grid h-20 place-items-center rounded-box bg-base-300">content</div>
    </div>
  );
};
Default.args = {};

export const Horizontal: Story<DividerProps> = ({ children, ...args }) => {
  return (
    <div className="flex w-full">
      <div className="grid h-20 flex-grow place-items-center rounded-box bg-base-300">content</div>
      <Divider {...args}>{children}</Divider>
      <div className="grid h-20 flex-grow place-items-center rounded-box bg-base-300">content</div>
    </div>
  );
};
Horizontal.args = {
  horizontal: true,
};

export const NoText: Story<DividerProps> = ({ children, ...args }) => {
  return (
    <div className="flex w-full flex-col">
      <div className="grid h-20 place-items-center rounded-box bg-base-300">content</div>
      <Divider {...args}>{children}</Divider>
      <div className="grid h-20 place-items-center rounded-box bg-base-300">content</div>
    </div>
  );
};
NoText.args = {
  children: '',
};

export const Responsive: Story<DividerProps> = ({ children, ...args }) => {
  return (
    <div className="flex w-full flex-col lg:flex-row">
      <div className="grid h-32 flex-grow place-items-center rounded-box bg-base-300">content</div>
      <Divider {...args}>{children}</Divider>
      <div className="grid h-32 flex-grow place-items-center rounded-box bg-base-300">content</div>
    </div>
  );
};
Responsive.args = {
  responsive: true,
};

export const Colors: Story<DividerProps> = ({ children, color, ...args }) => {
  return (
    <div className="flex w-full flex-col">
      <Divider {...args}>Default</Divider>
      <Divider {...args} color="neutral">
        Neutral
      </Divider>
      <Divider {...args} color="primary">
        Primary
      </Divider>
      <Divider {...args} color="secondary">
        Secondary
      </Divider>
      <Divider {...args} color="accent">
        Accent
      </Divider>
      <Divider {...args} color="success">
        Success
      </Divider>
      <Divider {...args} color="warning">
        Warning
      </Divider>
      <Divider {...args} color="info">
        Info
      </Divider>
      <Divider {...args} color="error">
        Error
      </Divider>
    </div>
  );
};
Colors.argTypes = {
  children: {
    control: false,
  },
  color: {
    control: false,
  },
};

export const DifferentPositions: Story<DividerProps> = ({ children, start, end, ...args }) => {
  return (
    <div className="flex w-full flex-col">
      <Divider {...args} start={true}>
        Start
      </Divider>
      <Divider {...args}>Default</Divider>
      <Divider {...args} end={true}>
        End
      </Divider>
    </div>
  );
};
DifferentPositions.argTypes = {
  children: {
    control: false,
  },
  start: {
    control: false,
  },
  end: {
    control: false,
  },
};

export const DifferentPositionsHorizontal: Story<DividerProps> = ({ children, start, end, ...args }) => {
  return (
    <div className="flex h-52 w-full justify-center">
      <Divider {...args} start={true}>
        Start
      </Divider>
      <Divider {...args}>Default</Divider>
      <Divider {...args} end={true}>
        End
      </Divider>
    </div>
  );
};
DifferentPositionsHorizontal.argTypes = {
  children: {
    control: false,
  },
  start: {
    control: false,
  },
  end: {
    control: false,
  },
};

DifferentPositionsHorizontal.args = {
  horizontal: true,
};
