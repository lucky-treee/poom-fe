import { ChangeEvent, useRef, useState, MouseEvent } from 'react';
import { ReactComponent as CameraIcon } from 'assets/components/Camera.svg';
import { ReactComponent as CancelIcon } from 'assets/components/Cancel.svg';
import Button from 'components/base/Button';
import Typography from 'components/base/Typography';
import HashtagChip from 'components/HashtagChip';
import TextArea from 'components/TextArea';
import useRegisterReview from 'hooks/api/useRegisterReview';
import useToast from 'hooks/useToast';
import { ReviewRegisterForm as ReviewRegisterFormValue } from 'models/review/ReviewRegisterForm';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

const MAX_IMAGES = 5;

const ReviewRegisterForm: React.FC = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const { id: shopId } = useParams<{ id?: string }>() ?? '';

  const { addToast } = useToast();

  const methods = useForm<ReviewRegisterFormValue>({
    mode: 'onChange',
    defaultValues: {
      content: '',
    },
  });

  const { handleSubmit } = methods;

  const { mutate: registerReview, isLoading } = useRegisterReview();

  const handleAddImageClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (images.length < MAX_IMAGES) {
      return;
    }

    event.preventDefault();
    addToast({ message: t('add-review-image-error-msg'), type: 'error' });
  };

  const handleImagesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const addableImageCount = MAX_IMAGES - images.length;
    const isLargerAddableImageCount = files.length > addableImageCount;

    if (isLargerAddableImageCount) {
      addToast({ message: t('add-review-image-error-msg'), type: 'error' });
    }

    const newAddedImages = Array.from(files).slice(0, addableImageCount);

    setImages([...images, ...newAddedImages]);
  };

  const handleImageDelete = (image: File) => {
    const updatedImages = images.filter((_image) => _image.name !== image.name);

    setImages(updatedImages);
  };

  const onSubmit = async (formValue: ReviewRegisterFormValue) => {
    const { content } = formValue;

    registerReview({
      shopId: parseInt(shopId!, 10),
      memberId: 1,
      content,
      images,
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex flex-col justify-between gap-2 h-full"
      >
        <div className="flex flex-col flex-nowrap gap-2">
          <Typography type="subtitle">{t('review')}</Typography>
          <TextArea
            name="content"
            className="h-[103px]"
            placeholder={t('register-review-button-text')}
          />
          <HashtagChip hashtag="CLEAN" size="small" className="" />
          <section className="w-full flex flex-wrap justify-between gap-y-2">
            <button
              type="button"
              onClick={handleAddImageClick}
              className="flex justify-center items-center w-[168px] h-[168px] rounded-lg bg-black/25"
            >
              <label
                htmlFor="addImage"
                className="w-full flex flex-col justify-center items-center"
              >
                <CameraIcon />
                <Typography type="caption" className="text-white">
                  {t('add-review-image')}
                </Typography>
                <input
                  id="addImage"
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImagesChange}
                />
              </label>
            </button>

            {images.map((image) => (
              <div
                key={URL.createObjectURL(image)}
                className="relative w-[168px] h-[168px]"
              >
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="w-full h-full rounded-lg"
                />
                <button
                  className="absolute right-[-8px] top-[-4px] w-7 h-7"
                  type="button"
                  onClick={() => handleImageDelete(image)}
                >
                  <CancelIcon />
                </button>
              </div>
            ))}
          </section>
        </div>
        <Button
          isLoading={isLoading}
          type="submit"
          variant="main"
          className="w-full"
        >
          {t('register-review-button-text')}
        </Button>
      </form>
    </FormProvider>
  );
};

export default ReviewRegisterForm;
