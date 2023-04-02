import { FetchShopResponse } from 'models/shop/response';
import { rest } from 'msw';

export const handlers = [
  rest.get('/example/api', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        code: '200 SUCCESS',
        message: 'SUCCESS',
      })
    );
  }),

  rest.get('/api/auth/v1/bookmarks', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        bookmarkList: [
          {
            id: 12,
            name: '쓰레기 없는 행복 카페',
            address: '서울시 땡땡구 204-12 현대빌딩 301호, 20301-어쩌구 저쩌구',
            hashtag: 'NICE',
            category: '카페, 커피',
            previewImageSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/R%C3%B6e_g%C3%A5rd_caf%C3%A9_2.jpg/2880px-R%C3%B6e_g%C3%A5rd_caf%C3%A9_2.jpg',
          },
          {
            id: 13,
            name: '길거리 산뜻 카페',
            address:
              '서울시 어쩌구 107-60, 장사 잘되는 우리 빌딩 골목 옆 204호',
            hashtag: 'GOOD',
            category: '카페, 커피',
          },
          {
            id: 24,
            name: '찰리 푸스의 맛있는 카페 이름이 조금 길어지면 두줄로 표현되고 끝은 잘려야 하는 카페',
            address: '서울시 박박구 72-1, 204호',
            hashtag: 'QUALITY',
            category: '카페, 커피',
            previewImageSrc:
              'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          },
          {
            id: 35,
            name: '카페 리조또와 라캄파넬라',
            address: '서울시 저쩌구 방이대로 157-18, 1층',
            hashtag: 'NICE',
            category: '카페, 커피',
            previewImageSrc:
              'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
          },
          {
            id: 16,
            name: '쓰레기 없는 행복 카페',
            address: '서울시 땡땡구 204-12 현대빌딩 301호, 20301-어쩌구 저쩌구',
            hashtag: 'NICE',
            category: '카페, 커피',
          },
          {
            id: 27,
            name: '길거리 산뜻 카페',
            address:
              '서울시 어쩌구 107-60, 장사 잘되는 우리 빌딩 골목 옆 204호',
            hashtag: 'GOOD',
            category: '카페, 커피',
          },
        ],
      })
    );
  }),

  rest.get('/api/auth/v1/reviews', (req, res, ctx) => {
    const reviewImgSrc =
      'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80';

    const createReview = (id: number) => ({
      id,
      shop: {
        name: '쓰레기 없는 행복 카페',
        category: 'REFILL',
      },
      content:
        '어린이대공원 피크닉때 디저트로 먹으려고 주문해봤는데요. 사실 그날 몸이 피곤한 상태라 졸렸는데 거북슈먹고 눈이 번쩍 뜨였어요 너무 맛있어서요.',
      imgSrc: new Array(id).fill(reviewImgSrc),
      updatedAt: 1680183180929, // 20230330 20:33:09
    });

    return res(
      ctx.status(200),
      ctx.json({
        reviewList: [0, 1, 2, 3, 4, 5, 6, 7].map(createReview),
        pagination: {
          total: 12,
          page: 0,
          size: 5,
        },
      })
    );
  }),

  rest.get('/api/shop/v1/shops/shop/review', (req, res, ctx) => {
    const reviewImgSrc =
      'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80';

    const createReview = (id: number) => ({
      id,
      shop: {
        name: '쓰레기 없는 행복 카페',
        category: 'REFILL',
      },
      profile: {
        nickname: `미니멀리스트${id}`,
        profileImageSrc:
          'https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png',
      },
      content:
        '어린이대공원 피크닉때 디저트로 먹으려고 주문해봤는데요. 사실 그날 몸이 피곤한 상태라 졸렸는데 거북슈먹고 눈이 번쩍 뜨였어요 너무 맛있어서요.',
      imgSrc: new Array(id).fill(reviewImgSrc),
      updatedAt: 1680183180929, // 20230330 20:33:09
    });

    return res(
      ctx.status(200),
      ctx.json({
        reviewList: [0, 1, 2, 3, 4, 5, 6, 7].map(createReview),
      })
    );
  }),

  rest.get('/api/shop/v1/shops/shop', async (req, res, ctx) => {
    const shopId = req.url.searchParams.get('id');

    const shop: FetchShopResponse = {
      shopName: '리필리',
      category: 'REFILL',
      contact: '010-9876-5432',
      flagshipProduct: '리필용 주방세제',
      hashtag: 'GOOD',
      holiday: 'SUN',
      homepage: 'http://localhost:5173',
      lat: 37.4842556832564,
      lng: 126.949050365278,
      operationEnd: '20:00',
      operationStart: '10:00',
      photo: '',
      sns: '',
      shopAddress: '행복시 행복로 10길 89 1층',
    };

    return res(ctx.status(200), ctx.json(shop));
  }),
];
