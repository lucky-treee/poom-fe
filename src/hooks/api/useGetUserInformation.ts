import { useQuery } from '@tanstack/react-query';
import { Profile } from 'models/auth/Profile';
import { fetchProfile } from 'service/auth';

export const useGetUserInformation = () => {
  return useQuery<Profile>({
    queryKey: ['fetchProfile'],
    queryFn: async (): Promise<Profile> => {
      const data = await fetchProfile();

      return {
        profileImageSrc: data.imageSrc,
        email: data.email,
        nickname: data.nickname,
        reviewCount: data.reviewCount,
        favoriteCount: data.favoriteCount,
      };
    },
  });
};
