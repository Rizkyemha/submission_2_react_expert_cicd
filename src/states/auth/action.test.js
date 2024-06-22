import {
  describe, expect, it, vitest,
} from 'vitest';
import { getProfileThunkAction, handleLoginThunkAction, handleRegisterThunkAction } from './action';
import api from '../../services/api';

describe('auth action', () => {
  it('handle login thunk action', async () => {
    vitest.spyOn(api, 'login').mockResolvedValue({});
    const dispatch = vitest.fn();
    await handleLoginThunkAction({ email: '', password: '' })(dispatch);
    expect(api.login()).resolves.toBeTruthy();
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({ type: 'COBA_ERROR' }); // create error test
  });
  it('handle register thunk action', async () => {
    vitest.spyOn(api, 'register').mockResolvedValue({});
    const dispatch = vitest.fn();
    await handleRegisterThunkAction({ name: '', email: '', password: '' })(dispatch);
    expect(api.register()).resolves.toBeTruthy();
    expect(dispatch).toHaveBeenCalled();
  });
  it('get profile thunk action', async () => {
    vitest.spyOn(api, 'getOwnProfile').mockResolvedValue({});
    const dispatch = vitest.fn();
    await getProfileThunkAction()(dispatch);
    expect(api.getOwnProfile()).resolves.toBeTruthy();
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_PROFILE', payload: { profile: {} } });
  });
});
