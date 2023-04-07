import React from 'react';
import Input from 'components/base/Input';
import { useTranslation } from 'react-i18next';

const NicknameInput: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Input
      required={{
        value: true,
        message: t('nickname-required-error-msg'),
      }}
      maxLength={{
        value: 10,
        message: t('nickname-length-error-msg'),
      }}
      minLength={{
        value: 2,
        message: t('nickname-length-error-msg'),
      }}
      pattern={{
        value: /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+$/,
        message: t('nickname-pattern-error-msg'),
      }}
      name="nickname"
      placeholder={t('nickname')}
    />
  );
};

export default NicknameInput;
