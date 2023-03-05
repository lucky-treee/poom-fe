import React from 'react';
import ProfileImagePreview from 'components/auth/ProfileImagePreview';
import Button from 'components/Button';
import Input from 'components/Input';
import Modal from 'components/Modal';
import Typography from 'components/Typography';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface ProfileSelectModalProps {
  open: boolean;
  onClose?: () => void;
}

const ProfileSelectModal: React.FC<ProfileSelectModalProps> = (props) => {
  const { open, onClose } = props;

  const { t } = useTranslation();

  const { resetField } = useFormContext();

  const handleModalClose = () => {
    onClose && onClose();
  };

  const handleCloseBtnClick = () => {
    resetField('profileImage');
    onClose && onClose();
  };

  const handleSaveBtnClick = () => {
    onClose && onClose();
  };

  return (
    <Modal open={open} onClose={handleModalClose}>
      <div className="flex flex-col p-4 m-4 bg-white rounded-md gap-4">
        <Typography type="title">
          {t('profile-image-select-modal-title')}
        </Typography>
        <div className="flex justify-center">
          <ProfileImagePreview />
        </div>
        <Input name="profileImage" type="file" accept="image/*" />
        <div className="flex flex-row justify-between">
          <Button
            variant="contained"
            type="button"
            className="text-gray-500"
            onClick={handleCloseBtnClick}
          >
            {t('cancel')}
          </Button>
          <Button
            variant="contained"
            type="button"
            className="text-sky-500"
            onClick={handleSaveBtnClick}
          >
            {t('save')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProfileSelectModal;
