import { StringLenghtPipe } from './string-lenght.pipe';

describe('StringLenghtPipe', () => {
  it('create an instance', () => {
    const pipe = new StringLenghtPipe();
    expect(pipe).toBeTruthy();
  });
});
