import * as types from './login.actionType';

export function test(payload) {
  return {
    type: types.LOGIN_TEST,
    payload
  };
}

export function testSuccess(payload) {
  return {
    type: types.LOGIN_TEST_SUCCESS,
    payload
  };
}
