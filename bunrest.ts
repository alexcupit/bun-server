import server from 'bunrest';
import _ from 'lodash';
import { Handler } from 'bunrest/src/server/request';

const app = server();

const postTexttoSnake: Handler = ({ body }, res) => {
  if (typeof body !== 'object' || !body.text) {
    res.send('Missing text property on body');
    return;
  }

  const text_snake = _.snakeCase(body.text);
  res.status(200).json({ text_snake });
  return;
};

const getHome: Handler = (req, res) => {
  res.send('hello world');
};

app.post('/', postTexttoSnake);
app.get('/', getHome);

app.listen(3001, () => {
  console.log('bunrest listening on 3001');
});
