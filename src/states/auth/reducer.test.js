import { describe, expect, it } from 'vitest';
import authReducer from './reducer';
import api from '../../services/api';

describe('auth reducer', () => {
  const initState = {
    isLogin: !!api.getAccessToken(),
    profile: {},
  };
  it('should return the initial state', () => {
    expect(authReducer(initState, {})).toEqual(initState);
  });
  it('should handle LOGIN_SUCCESS', () => {
    expect(
      authReducer(initState, {
        type: 'LOGIN_SUCCESS',
      }),
    ).toEqual({
      ...initState,
      isLogin: true,
    });
  });
  it('should handle SET_PROFILE', () => {
    expect(
      authReducer(initState, {
        type: 'SET_PROFILE',
        payload: {
          profile: { name: 'yoga' },
        },
      }),
    ).toEqual({
      ...initState,
      profile: { name: 'yoga' },
    });
  });
  it('should handle LOGOUT', () => {
    expect(
      authReducer(initState, {
        type: 'LOGOUT',
      }),
    ).toEqual({
      ...initState,
      isLogin: false,
      profile: {},
    });
  });
});
