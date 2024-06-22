import { describe, expect, it } from 'vitest';
import detailThreadReducer from './reducer';

describe('thread detail reducer', () => {
  const initState = {
    thread: {},
    created: false,
  };
  it('should return the initial state', () => {
    expect(detailThreadReducer(initState, {})).toEqual(initState);
  });
  it('should handle GET_THREAD', () => {
    expect(
      detailThreadReducer(initState, {
        type: 'GET_THREAD',
        payload: {
          name: 'yoga',
        },
      }),
    ).toEqual({
      ...initState,
      thread: {
        name: 'yoga',
      },
    });
  });
  it('should handle COMMENT_CREATED', () => {
    expect(
      detailThreadReducer(initState, {
        type: 'COMMENT_CREATED',
      }),
    ).toEqual({
      ...initState,
      created: true,
    });
  });
});
