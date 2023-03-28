import React, { useState } from 'react';
import ProfileImageList from 'constants/ProfileImageList';
import { ReactComponent as CheckIcon } from 'assets/components/Check.svg';
import Button from 'components/Button';
import Modal from 'components/Modal';
import Typography from 'components/Typography';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const ImageSelectedCheckIcon: React.FC = () => (
  <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-sky-500">
    <CheckIcon />
  </div>
);

interface ProfileSelectModalProps {
  open: boolean;
  onClose?: () => void;
}

const ProfileSelectModal: React.FC<ProfileSelectModalProps> = (props) => {
  const { open, onClose } = props;

  const { t } = useTranslation();

  const { setValue, getValues } = useFormContext();

  const profileImage = getValues('photo');

  const [selectedImageSrc, setSelectedImageSrc] = useState(profileImage);

  const handleModalClose = () => {
    onClose && onClose();
  };

  const handleCloseBtnClick = () => onClose && onClose();

  const handleSaveBtnClick = () => {
    setValue('photo', selectedImageSrc);
    onClose && onClose();
  };

  const handleImageSelect = (imgSrc: string) => setSelectedImageSrc(imgSrc);

  return (
    <Modal open={open} onClose={handleModalClose}>
      <div className="flex flex-col p-4 m-4 bg-white rounded-md gap-4">
        <Typography type="title">
          {t('profile-image-select-modal-title')}
        </Typography>
        <div className="flex justify-center">
          <img
            className="rounded-full w-[156px] h-[156px] border border-border-gray"
            src={selectedImageSrc}
            alt="temperature profile"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Typography type="body">
            {t('profile-image-select-modal-image-select-header')}
          </Typography>
          <div className="flex flex-row gap-2 flex-wrap h-[105px] overflow-y-scroll">
            {ProfileImageList.map((imgSrc) => (
              <button
                className="relative"
                type="button"
                key={imgSrc}
                onClick={() => handleImageSelect(imgSrc)}
              >
                {selectedImageSrc === imgSrc && <ImageSelectedCheckIcon />}
                <img
                  className="w-12 h-12 rounded-full"
                  src={imgSrc}
                  alt="profile alternative text"
                />
              </button>
            ))}
          </div>
        </div>
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
