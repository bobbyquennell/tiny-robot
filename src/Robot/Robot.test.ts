import { Robot } from './Robot';
import { Position, Roof } from './types';

describe('1. Robot class:', () => {
  it('should be able to create a new robot instance', () => {
    const roof: Roof = { dimensionX: 10, dimensionY: 10 };
    const start: Position = { x: 0, y: 0 };
    const sut = new Robot(roof, start);
    expect(sut).toBeInstanceOf(Robot);
    expect(sut.roof).toStrictEqual(roof);
    expect(sut.position).toStrictEqual(start);
  });
});
