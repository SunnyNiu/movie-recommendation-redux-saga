const env = require('./test-environment');
const db = require('./db');

let testDb = null;

beforeEach(() => {
  testDb = env.getTestDb();
  return env.initialise(testDb);
});

afterEach(() => env.cleanup(testDb));

describe('movies database tests', () => {
  it('getRandomMovie returns the correct movie', () => {
    expect.assertions(1);

    const excludes = ['1', '3', '4', '5'];
    const expected = {
      id: 2,
      name: 'The Incredible Hulk',
      image: '/images/2.png',
    };

    return db.getRandomMovie(excludes, testDb).then(actual => {
      expect(actual).toEqual(expected);
    });
  });
});
