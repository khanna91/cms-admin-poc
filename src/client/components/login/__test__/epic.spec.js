import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';
import epic from '../login.epic';
import * as types from '../login.actionType';

describe('Login Component - epics', () => {
  const action$ = ActionsObservable.of({
    type: types.LOGIN_TEST,
    payload: {}
  });

  it('successfully gets test action result', (done) => {
    const getJSON = () => Observable.of({});
    const expectedOutputActions = [{ type: types.LOGIN_TEST_SUCCESS, payload: {} }];
    epic(action$, null, { getJSON, of: Observable.of })
      .toArray()
      .subscribe((actualOutputActions) => {
        expect(actualOutputActions).toEqual(expectedOutputActions);
        done();
      });
  });
});
