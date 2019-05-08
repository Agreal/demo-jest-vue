// import Hello from './Hello'
describe('Hello', () => {
  it('says hello', () => {
    const hello = new Hello('Babel');

    expect(hello.say()).toEqual('Hello, Babel!');
  });
});
