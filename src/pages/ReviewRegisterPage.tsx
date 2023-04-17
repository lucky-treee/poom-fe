import { ReactComponent as BackArrowIcon } from 'assets/components/navigate/Back.svg';
import Typography from 'components/base/Typography';
import ReviewRegisterForm from 'components/shop/ReviewRegisterForm';
import NotFoundErrorPage from 'pages/error/NotFoundErrorPage';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

const ReviewRegisterPage: React.FC = () => {
  const { t } = useTranslation();

  const { id: shopId } = useParams();

  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);

  if (!shopId) return <NotFoundErrorPage />;

  return (
    <section className="flex flex-col px-6 py-6 h-screen gap-6">
      <header className="flex justify-between items-center">
        <div className="flex">
          <button type="button" className="mr-5" onClick={handleGoBack}>
            <BackArrowIcon />
          </button>
          <Typography type="title" className="text-text">
            {t('register-review')}
          </Typography>
        </div>
      </header>
      <ReviewRegisterForm shopId={Number(shopId)} />
    </section>
  );
};

export default ReviewRegisterPage;
