
/**
  * @jest-environment jsdom
*/

import { render, screen } from '@testing-library/react';
import React from 'react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Search from '../Search';

describe('testing the search component', () => {
  test('does the search header display?', () => {
    render(<Search />);
    const textInput = screen.getByRole('textbox');
    
  })
})