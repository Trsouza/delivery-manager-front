import React from 'react';
import { render, screen } from '@testing-library/react';
import { Couriers } from '.';

jest.mock('../../services/auth.ts', () => {
  return {
    api: {
      get: jest.fn(),
    }
  };
});

const defineProperty = () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,

    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

beforeEach(() => {
  jest.clearAllMocks();
  defineProperty();
})

describe('Testing text rendering', () => {
  it('render text', () => {
    render(<Couriers />);
    expect(screen.getByText("Teste")).toBeTruthy();
  });

});
