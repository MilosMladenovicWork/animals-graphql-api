import { requestLogger } from './request-logger.middleware';

describe('Test request-logger.middleware', () => {
  it('should call next argument function once', () => {
    const nextCallbackFunction = jest.fn();

    requestLogger()(nextCallbackFunction)(
      'firstArg',
      'secondArg',
      'thirdArg',
      'fourthArg'
    );

    expect(nextCallbackFunction).toHaveBeenCalledTimes(1);
  });

  it('should call next argument function with correct arguments', () => {
    const nextCallbackFunction = jest.fn();

    requestLogger()(nextCallbackFunction)(
      'firstArg',
      'secondArg',
      'thirdArg',
      'fourthArg'
    );

    expect(nextCallbackFunction).toHaveBeenCalledWith(
      'firstArg',
      'secondArg',
      'thirdArg',
      'fourthArg'
    );
  });
});
