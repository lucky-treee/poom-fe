import { ChangeEvent, MouseEvent, useRef } from 'react';
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

const MAX_IMAGE_COUNT = 5;

const ReviewRegisterForm: React.FC = () => {
  const { t } = useTranslation();

  const imagesRef = useRef<File[]>([]);

  const { id: shopId } = useParams<{ id?: string }>() ?? '-1';

  const { addToast } = useToast();

  const methods = useForm<ReviewRegisterFormValue>({
    mode: 'onChange',
    defaultValues: {
      content: '',
      images: [],
    },
  });

  const { handleSubmit, register, setValue, watch } = methods;

  const images = watch('images');

  const { mutate: registerReview, isLoading } = useRegisterReview();

  const handleAddImageClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (images.length >= MAX_IMAGE_COUNT) {
      event.preventDefault();

      addToast({ message: t('add-review-image-error-msg'), type: 'error' });
    }
  };

  const handleImagesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files) {
      const addableImageCount = MAX_IMAGE_COUNT - images.length;
      const isLargerAddableImageCount = files.length > addableImageCount;

      if (isLargerAddableImageCount) {
        addToast({ message: t('add-review-image-error-msg'), type: 'error' });
      }

      const newAddedImages = Array.from(files).slice(0, addableImageCount);

      imagesRef.current = imagesRef.current.concat(newAddedImages);

      setValue('images', imagesRef.current);
    }
  };

  const handleImageDelete = (imageToDelete: File) => {
    const updatedImages = images.filter(
      (image) => image.name !== imageToDelete.name
    );

    imagesRef.current = updatedImages;

    setValue('images', imagesRef.current);
  };

  const onSubmit = async (formValue: ReviewRegisterFormValue) => {
    const { content } = formValue;

    registerReview({
      shopId: parseInt(shopId ?? '-1', 10),
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
              </label>
              <input
                id="addImage"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                {...register('images')}
                onChange={handleImagesChange}
              />
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
