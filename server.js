import express from 'express';
import path from 'path';
import expressVue from 'express-vue';

import routes from './src/routes';

const app = express();
const vueOptions = {
  vueVersion: '2.5.16',
  rootPath: path.join(__dirname, '/src/components'),
  head: {
    metas: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' }
    ],
    title: 'vue-express-sample',
    styles: [
      { style:'/css/reset.css', type: 'text/css' }
    ]
  }
}

const expressVueMiddleware = expressVue.init(vueOptions);

app.set('views', path.join(__dirname, 'src/components/'))

app.use(express.static(__dirname + '/src/assets'));
app.use(expressVueMiddleware);

app.use('/', routes);

app.listen(3030);
