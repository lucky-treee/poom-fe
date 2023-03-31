import React, { useState } from 'react';
import { ReactComponent as ActionMenuIcon } from 'assets/components/ActionMenu.svg';
import ActionMenu from 'components/ActionMenu';
import Button from 'components/Button';
import Typography from 'components/Typography';
import { ShopCategory } from 'models/shop/request';
import { useTranslation } from 'react-i18next';

type ReviewTitleHeaderProps = {
  shopName: string;
  shopCategory: ShopCategory;
};

const ReviewTitleHeader: React.FC<ReviewTitleHeaderProps> = (props) => {
  const { shopName, shopCategory } = props;

  const [actionMenuOpen, setActionMenuOpen] = useState(false);

  const { t } = useTranslation();

  const handleActionMenuOpen = () => setActionMenuOpen(true);

  const handleActionMenuClose = () => setActionMenuOpen(false);

  const handleEditButtonClick = () => {
    handleActionMenuClose();
  };
  const handleDeleteButtonClick = () => {
    handleActionMenuClose();
  };

  return (
    <div className="flex flex-row items-center w-full justify-between">
      <div className="flex flex-row gap-2 items-center">
        <Typography type="subtitle">{shopName}</Typography>
        <Typography type="caption" className="text-gray-500">
          {shopCategory}
        </Typography>
      </div>
      <div className="relative">
        <ActionMenuIcon onClick={handleActionMenuOpen} />
        <ActionMenu open={actionMenuOpen} className="flex flex-col w-[80px]">
          <Button
            variant="contained"
            className="text-text border-b border-gray-500 px-6 py-2 w-full"
            onClick={handleEditButtonClick}
          >
            {t('review-edit-button-text')}
          </Button>
          <Button
            variant="contained"
            className="text-red-500 px-6 py-2 w-full"
            onClick={handleDeleteButtonClick}
          >
            {t('review-delete-button-text')}
          </Button>
        </ActionMenu>
      </div>
    </div>
  );
};

export default ReviewTitleHeader;
