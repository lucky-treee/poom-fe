import React from 'react';
import { StoryFn } from '@storybook/react';
import Select from 'components/base/Select';
import 'index.css';
import { FormProvider, useForm } from 'react-hook-form';

export default {
  title: 'Select',
  component: Select,
};

export const Default: StoryFn<typeof Select> = () => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      example: 'VALUE-A',
    },
  });

  return (
    <div className="h-52">
      <FormProvider {...methods}>
        <Select
          name="example"
          defaultValue="VALUE-A"
          options={['OPTION-A', 'OPTION-B', 'OPTION-C']}
          values={['VALUE-A', 'VALUE-B', 'VALUE-C']}
          required={{
            value: true,
            message: '필수 입력 항목 입니다.',
          }}
        />
      </FormProvider>
    </div>
  );
};
