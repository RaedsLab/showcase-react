describe('Store', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // this is important
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });
  it('should not crash', () => {
    const store = require('./store');
    expect(store).toBeDefined();
  });

  it('should not crash in dev', () => {
    process.env.NODE_ENV = 'development';
    const store = require('./store');
    expect(store).toBeDefined();
  });
});
