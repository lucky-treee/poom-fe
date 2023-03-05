import React from 'react';
import { useFormContext } from 'react-hook-form';

const ProfileImagePreview = () => {
  const { watch } = useFormContext();

  const profileImage = watch('profileImage');

  if (profileImage && profileImage.length > 0) {
    if (typeof profileImage === 'string') {
      return (
        <img
          className="rounded-full w-[156px] h-[156px] border border-border-gray"
          src={profileImage}
          alt="temperature profile"
        />
      );
    }

    return (
      <img
        className="rounded-full w-[156px] h-[156px] border border-border-gray"
        src={URL.createObjectURL(profileImage[0])}
        alt="temperature profile"
      />
    );
  }

  return <div className="rounded-full bg-gray-300 w-[156px] h-[156px]" />;
};

export default ProfileImagePreview;
