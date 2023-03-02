import React, { useState } from 'react';
import PathName from 'constants/PathName';
import Terms from 'constants/Terms';
import { ReactComponent as EditIcon } from 'assets/auth/mingcute_pencil-fill.svg';
import NicknameInput from 'components/auth/NickNameInput';
import ProfileImagePreview from 'components/auth/ProfileImagePreview';
import ProfileSelectModal from 'components/auth/ProfileSelectModal';
import Button from 'components/Button';
import Typography from 'components/Typography';
import useSignUp from 'hooks/api/useSignUp';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import type { SignUpForm as SignUpFormValue } from 'models/auth//SignUpForm';

const SignUpForm: React.FC = () => {
  const { t } = useTranslation();

  const [imgSelectModalOpen, setImgSelectModalOpen] = useState(false);

  const methods = useForm<SignUpFormValue>({
    mode: 'onChange',
    defaultValues: {
      nickname: '',
      profileImage: '',
    },
  });

  const navigate = useNavigate();

  const { mutate: signUp } = useSignUp();

  const { handleSubmit } = methods;

  const onSubmit = (data: SignUpFormValue) => {
    signUp(data, {
      onSuccess: () => navigate(PathName.SIGNUP_SUCCESS_PAGE),
    });
  };

  const handleModalOpen = () => setImgSelectModalOpen(true);

  const handleModalClose = () => setImgSelectModalOpen(false);

  return (
    <FormProvider {...methods}>
      <ProfileSelectModal
        open={imgSelectModalOpen}
        onClose={handleModalClose}
      />
      <form
        autoComplete="off"
        className="flex flex-col mt-6 gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <Typography type="subtitle">{t('profile-image')}</Typography>
          <Typography type="body">{t('profile-image-description')}</Typography>
          <div className="flex justify-center items-center">
            <div className="relative flex justify-center items-center">
              <ProfileImagePreview />
              <button
                type="button"
                className="absolute bottom-3 right-3 shadow-md bg-white rounded-full p-1"
                onClick={handleModalOpen}
              >
                <EditIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Typography type="subtitle">{t('nickname')}</Typography>
          <Typography type="body">{t('nickname-description')}</Typography>
          <NicknameInput />
        </div>
        <div className="flex flex-row gap-1">
          <Typography type="caption">{t('sign-up-confirm-text-0')}</Typography>
          <Link to={Terms.termOfUse}>
            <Typography className="text-sky-500 underline" type="caption">
              {t('sign-up-confirm-text-1')}
            </Typography>
          </Link>
          <Typography type="caption">{t('sign-up-confirm-text-2')}</Typography>
        </div>
        <Button variant="main" type="submit">
          {t('sign-up-btn-text')}
        </Button>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
