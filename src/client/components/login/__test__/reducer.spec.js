import reducer from '../login.reducer';
import * as types from '../login.actionType';

describe('Login Container - reducers', () => {
  it('sets loading state', () => {
    expect(
      reducer(
        {},
        {
          type: types.LOGIN_TEST
        }
      )
    ).toEqual({
      loading: true
    });
  });

  it('sets success state', () => {
    expect(
      reducer(
        {},
        {
          type: types.LOGIN_TEST_SUCCESS
        }
      )
    ).toEqual({
      loading: false,
      success: true
    });
  });

  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
});
