describe('index', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // this is important
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });
  it('renders without crashing', () => {
    process.env.NODE_ENV = 'development';

    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
    require('./index');
  });
});
