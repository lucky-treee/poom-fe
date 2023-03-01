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
];
