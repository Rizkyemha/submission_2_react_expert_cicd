import {
  describe, expect, it, vitest,
} from 'vitest';
import { createCommentThunkAction, getThreadDetailThunkAction } from './action';
import api from '../../services/api';

describe('detail thread action', () => {
  it('get thread action', async () => {
    vitest.spyOn(api, 'getThreadDetail').mockResolvedValue({ name: 'yoga' });
    const dispatch = vitest.fn();
    await getThreadDetailThunkAction(1)(dispatch);
    expect(api.getThreadDetail()).resolves.toBeTruthy();
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({ type: 'GET_THREAD', payload: { name: 'yoga' } });
  });
  it('create comment action', async () => {
    vitest.spyOn(api, 'createComment').mockResolvedValue({});
    const dispatch = vitest.fn();
    await createCommentThunkAction({ threadId: 1, content: 'yoga' })(dispatch);
    expect(api.createComment()).resolves.toBeTruthy();
    expect(dispatch).toHaveBeenCalled();
  });
});
