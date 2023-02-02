import { rest } from 'msw';

export const handlers = [
  rest.get('/hello', (req, res, ctx) => {
    return res(
      ctx.json({
        id: 'sdkfhsdkjfhsdkjfh',
        message: 'Hello, World!',
      })
    );
  }),
];
