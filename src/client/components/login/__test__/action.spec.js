import * as actions from '../login.action';
import * as types from '../login.actionType';

describe('Login Component - actions', () => {
  const payload = 'payload';

  it('dispatch test action', () => {
    expect(actions.test(payload)).toEqual({
      type: types.LOGIN_TEST,
      payload
    });
  });

  it('dispatch test success action', () => {
    expect(actions.testSuccess(payload)).toEqual({
      type: types.LOGIN_TEST_SUCCESS,
      payload
    });
  });
});
