import { describe, expect, it } from 'vitest';
import Navbar from './Navbar';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../states/store';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
  it('should render correctly', () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    );
    expect(component).toBeTruthy();
  });
});
