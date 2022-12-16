/**
  * @jest-environment jsdom
*/

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Search from '../Search';
import search from '../Search';

const mockSearch = jest.fn();
global.fetch = jest.fn(() => {
  return Promise.resolve({name: 'Stephen Curry', position: 'G', team: 'Golden State Warriors', games_played: 65, min: '34:18', ast: 6.29, blk: 0.34, fg3m: 4.43, fg_pct: 0.437, fga: 18.97, fgm: 8.29, ft_pct: 0.923, fta: 4.62, ftm: 4.26, games_played: 65, min: "34:18", name: "Stephen Curry", position: "G", pts: 25.28, reb: 5.23, stl: 1.34, team: "Golden State Warriors", turnover: 3.23})
});

describe('testing the search component', () => {
  test('component render search input textbox', () => {
    render(<Search />);
    const searchInput = screen.queryByRole('textbox');
    expect(searchInput).toBeInTheDocument();
  })

  test('state changes when a valid player is searched', () => {
    // render the search component
    render(<Search search={mockSearch}/>);
    // get search button
    const searchBtn = screen.getByRole('button');
    // click search button
    fireEvent.click(searchBtn);
    // verify if the function passed to props was invoked
    

  })

  // test to see if on click state has a new value when state is originally empty
  test('one player shows up when you search the name of a NBA player', () => {
    // render component
    render(<Search search={mockSearch}/>);
    const searchInput = screen.queryByRole('textbox');
    // add name
    // click button
    fireEvent.change(searchInput, { target: { value: 'kobe' } });
    fireEvent.click(searchInput);
    // assert correct elements in 
  })
  // test to see if on click when has new value when state is not originally empty

})


// test the api call?
// 

// test if function is called separately from if the function changes state
// does click of button invoke passed in function
// assert state change
// make sure other component displays state