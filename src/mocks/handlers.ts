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
];
