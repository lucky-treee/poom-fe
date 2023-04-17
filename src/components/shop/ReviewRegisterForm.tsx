import { ChangeEventHandler } from 'react';
import { ReactComponent as CameraIcon } from 'assets/components/Camera.svg';
import { ReactComponent as DeleteImageIcon } from 'assets/components/DeleteImage.svg';
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

  const { id: shopId } = useParams();

  const { addToast } = useToast();

  const methods = useForm<ReviewRegisterFormValue>({
    mode: 'onChange',
    defaultValues: {
      content: '',
      images: [],
    },
  });

  const { handleSubmit, setValue, watch, register } = methods;

  const { mutate: registerReview } = useRegisterReview(
    parseInt(shopId ?? '-1', 10)
  );

  const onSubmit = async (formValue: ReviewRegisterFormValue) => {
    registerReview(formValue);
  };

  const images = watch('images');

  const handleImageInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.target;

    if (!files) {
      return;
    }

    const totalImages = [...images, ...Array.from(files)];

    if (totalImages.length > MAX_IMAGE_COUNT) {
      addToast({
        type: 'error',
        message: t('add-review-image-error-msg'),
      });

      setValue('images', totalImages.slice(0, MAX_IMAGE_COUNT));
    } else {
      setValue('images', totalImages);
    }
  };

  const handleDeleteImageButtonClick = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setValue('images', newImages);
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
          <section className="w-full flex flex-wrap gap-4">
            <label
              htmlFor="addImage"
              className="flex justify-center items-center w-[152px] h-[152px] rounded-lg bg-black/25 flex-col"
            >
              <CameraIcon />
              <Typography type="caption" className="text-white">
                {t('add-review-image')}
              </Typography>
            </label>
            <input
              id="addImage"
              className="hidden"
              type="file"
              accept="image/*"
              multiple
              {...register('images')}
              onChange={handleImageInputChange}
            />
            {images.map((image, index) => (
              <div key={image.name} className="relative w-[152px] h-[152px]">
                <img
                  className="w-full h-full rounded-lg"
                  src={URL.createObjectURL(image)}
                  alt=""
                />
                <button
                  className="absolute top-2 right-2"
                  type="button"
                  onClick={() => handleDeleteImageButtonClick(index)}
                >
                  <DeleteImageIcon />
                </button>
              </div>
            ))}
          </section>
        </div>
        <Button type="submit" variant="main" className="w-full">
          {t('register-review-button-text')}
        </Button>
      </form>
    </FormProvider>
  );
};

export default ReviewRegisterForm;
