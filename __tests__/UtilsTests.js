import Utils from '../Utils';

describe('UtilsTest', () => {
  it('processJson with 0 parameters', () => {
    const jsonString = '{"formatString":"No parameters"}';
    expect(Utils.processJson(jsonString)).toBe('No parameters');
  });

  it('processJson with 1 parameters', () => {
    const jsonString = '{"formatString":"Parameter 1 is {0}","parameters":[1]}';
    expect(Utils.processJson(jsonString)).toBe('Parameter 1 is 1');
  });

  it('processJson with bad json', () => {
    const jsonString = '{"formatString":"No parameters"';
    expect(Utils.processJson(jsonString)).toBe(Utils.PROCESS_JSON_ERROR_MSG);
  });

  it('processJson with 2 mixed parameters', () => {
    const jsonString =
      '{"formatString":"Parameter 1 is {0}, parameter 2 is {1}","parameters":[1,"two"]}';
    expect(Utils.processJson(jsonString)).toBe(
      'Parameter 1 is 1, parameter 2 is two'
    );
  });
});
