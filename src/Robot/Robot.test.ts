import { Robot } from './Robot';

describe('1. Robot class:', () => {
  it('should be able to create a new robot instance', () => {
    const sut = new Robot();
    expect(sut).toBeInstanceOf(Robot);
  });
});
