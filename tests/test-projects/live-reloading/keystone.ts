import { config } from '@k6js/ks-next';
import { lists, extendGraphqlSchema } from './schemas';

export default config({
  db: {
    provider: 'sqlite',
    url: process.env.DATABASE_URL || 'file:./test.db',
  },
  lists,
  extendGraphqlSchema,
  ui: {
    getAdditionalFiles: [
      () => [
        {
          mode: 'write',
          src: "export default function(req,res) {res.send('something')}",
          outputPath: 'pages/api/blah/[...rest].js',
        },
      ],
    ],
  },
});
