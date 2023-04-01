import { Shop } from 'models/shop/Shop';
import { rest } from 'msw';

export const handlers = [
  // eslint-disable-next-line consistent-return
  rest.get('/api/auth/auth/login', (req, res, ctx) => {
    const code = req.url.searchParams.get('code');

    if (code === 'valid') {
      return res(
        ctx.status(200),
        ctx.json({
          status: 200,
          code: '200 SUCCESS',
          message: 'LOGIN SUCCESS',
          result: '',
        })
      );
    }

    if (code === 'invalid') {
      return res(
        ctx.status(400),
        ctx.json({
          status: 400,
          code: '400 BAD REQUEST',
          message: 'LOGIN FAIL',
          result: '',
        })
      );
    }
  }),
  rest.get('/api/auth/auth/profile', (req, res, ctx) => {
    const passed = Math.random() > 0.5;

    if (!passed) return res(ctx.status(401));

    return res(
      ctx.status(200),
      ctx.json({
        imageSrc: 'https://avatars.githubusercontent.com/u/20200204',
        nickname: '예시_닉네임',
        email: 'luckytree@lucky.com',
        reviewCount: 1234,
        favoriteCount: 2468,
      })
    );
  }),
  // eslint-disable-next-line consistent-return
  rest.post('/api/auth/auth/signup', async (req, res, ctx) => {
    const { nickname } = await req.json();

    if (nickname === 'chj') {
      return res(ctx.status(200));
    }
  }),

  rest.get('/api/shop/v1/shops/shop', async (req, res, ctx) => {
    const shopId = req.url.searchParams.get('id');

    const shop: Shop = {
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
