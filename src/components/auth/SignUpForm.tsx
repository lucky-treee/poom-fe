import React, { useState } from 'react';
import PathName from 'constants/PathName';
import ProfileImageList from 'constants/ProfileImageList';
import Terms from 'constants/Terms';
import { ReactComponent as EditIcon } from 'assets/auth/mingcute_pencil-fill.svg';
import NicknameInput from 'components/auth/NicknameInput';
import ProfileSelectModal from 'components/auth/ProfileSelectModal';
import Button from 'components/base/Button';
import Typography from 'components/base/Typography';
import useSignUp from 'hooks/api/useSignUp';
import useAccessToken from 'hooks/useAccessToken';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import type { SignUpForm as SignUpFormValue } from 'models/auth/SignUpForm';

type SignUpFormProps = {
  email: string;
};

const SignUpForm: React.FC<SignUpFormProps> = (props) => {
  const { t } = useTranslation();

  const { email } = props;

  const [imgSelectModalOpen, setImgSelectModalOpen] = useState(false);

  const methods = useForm<SignUpFormValue>({
    mode: 'onChange',
    defaultValues: {
      nickname: '',
      photo: ProfileImageList[0],
      email,
    },
  });

  const setAccessToken = useAccessToken();

  const navigate = useNavigate();

  const { mutate: signUp } = useSignUp({
    onSuccess: (data) => {
      setAccessToken(data);
      navigate(PathName.SIGNUP_SUCCESS_PAGE);
    },
  });

  const { handleSubmit, watch } = methods;

  const profileImage = watch('photo');

  const onSubmit = (data: SignUpFormValue) => signUp(data);

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
              <img
                className="rounded-full w-[156px] h-[156px] border border-border-gray"
                src={profileImage}
                alt="temperature profile"
              />
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
