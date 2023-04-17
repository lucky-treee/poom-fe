import { ChangeEvent, MouseEvent, useRef } from 'react';
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
  const { id: shopId } = useParams<{ id: string }>() ?? '-1';

  const { addToast } = useToast();

  const methods = useForm<ReviewRegisterFormValue>({
    mode: 'onChange',
    defaultValues: {
      content: '',
      images: [],
    },
  });

  const { handleSubmit, getValues, setValue } = methods;

  /**
   * 해당 변수는 `images`를 `react-hook-form`으로 관리할 경우,
   * change event의 target.files의 데이터와 항상 동기화되기 때문에
   * 이미지 첨부에 대한 컴포넌트에 클릭 이벤트가 발생하는 순간 이전에 첨부한 이미지들을 기억하기 위해 선언되었습니다.
   * `state`가 아닌 `ref`로 관리하게 된 이유는 기억용 데이터의 업데이트가 UI를 다시 렌더링 할 이유가 없다고 생각했기 때문입니다.
   */
  const prevImages = useRef<File[]>([]);

  const handleAddImageClick = (e: MouseEvent<HTMLButtonElement>) => {
    prevImages.current = [...getValues('images')];

  const images = watch('images');

      addToast({ message: t('add-review-image-error-msg'), type: 'error' });
    }
  };

  const handleImagesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files) {
      const addableImageCount = MAX_IMAGE_COUNT - prevImages.current.length;

      if (files.length > addableImageCount) {
        addToast({ message: t('add-review-image-error-msg'), type: 'error' });
      }

      setValue('images', [
        ...prevImages.current,
        ...Array.from(getValues('images')).slice(0, addableImageCount),
      ]);
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
          <section className="w-full flex flex-wrap justify-between gap-y-2">
            <button
              type="button"
              className="flex justify-center items-center w-[168px] h-[168px] rounded-lg bg-black/25"
              onClick={handleAddImageClick}
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
              <div className="hidden">
                <Input
                  id="addImage"
                  name="images"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImagesChange}
                />
              </div>
            </button>
            {Array.from(getValues('images')).map((image) => (
              <div key={image.name} className="relative w-[168px] h-[168px]">
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
