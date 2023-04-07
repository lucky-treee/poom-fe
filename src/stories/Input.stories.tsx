import React from 'react';
import { StoryFn } from '@storybook/react';
import Input from 'components/base/Input';
import 'index.css';
import { FormProvider, useForm } from 'react-hook-form';

export default {
  title: 'Input',
  component: Input,
};

export const Default: StoryFn<typeof Input> = () => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      example: 'values',
    },
  });

  return (
    <FormProvider {...methods}>
      <Input
        name="example"
        placeholder="Placeholder"
        required={{
          value: true,
          message: '필수 입력 항목 입니다.',
        }}
      />
    </FormProvider>
  );
};
