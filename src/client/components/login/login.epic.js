import * as types from './login.actionType';
import * as actions from './login.action';

export default (action$, store, { of }) => action$.ofType(types.LOGIN_TEST).mergeMap(action => of(actions.testSuccess(action.payload)));
