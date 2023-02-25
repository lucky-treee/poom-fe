import { rest } from 'msw';

export const handlers = [
  // eslint-disable-next-line consistent-return
  rest.get('/auth/login', (req, res, ctx) => {
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

    // if real code, use real login api
  }),
];
