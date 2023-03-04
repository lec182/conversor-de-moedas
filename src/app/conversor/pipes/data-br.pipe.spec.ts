import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2022-12-22 para 22/12/2022', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2022-12-22')).toEqual('22/12/2022');
  });
});
