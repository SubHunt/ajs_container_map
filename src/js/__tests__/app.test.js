import ErrorRepository from '../app';

test('проверка конструктора', () => {
  const mapResult = new Map();
  mapResult.set('404', 'Not Found');
  mapResult.set('500', 'Internal Server Error');
  mapResult.set('502', 'Bad Gateway');
  const errors = new ErrorRepository();
  errors.mapError.set('404', 'Not Found');
  errors.mapError.set('500', 'Internal Server Error');
  errors.mapError.set('502', 'Bad Gateway');
  expect(errors.mapError).toEqual(mapResult);
});

test('проверка метода конструктора', () => {
  const errors = new ErrorRepository();
  errors.mapError.set('404', 'Not Found');
  errors.mapError.set('500', 'Internal Server Error');
  errors.mapError.set('502', 'Bad Gateway');
  expect(errors.translate('404')).toEqual('Not Found');
  expect(errors.translate('500')).toEqual('Internal Server Error');
  expect(errors.translate('502')).toEqual('Bad Gateway');
  expect(errors.translate('505')).toEqual('Unknown error');
});