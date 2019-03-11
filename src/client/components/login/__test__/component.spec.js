import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import { Login } from '../login.component';
import 'jest-dom/extend-expect';

const component = props => (
  <MemoryRouter>
    <Login {...props} />
  </MemoryRouter>
);

describe('Login Component', () => {
  let props;

  beforeEach(() => {
    props = {
      Login: {
        success: false,
      },
      test: jest.fn()
    };
  });

  afterEach(cleanup);

  it('should render', () => {
    const { container } = render(component(props));
    const element = container.querySelector('.LOGIN');
    expect(element).toHaveTextContent('Login');
  });
});
