/**
  * @jest-environment jsdom
*/

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Search from '../Search';
import Home from '../Home';

const mockSearch = jest.fn();
global.fetch = jest.fn(() => {
  console.log('mock fetch executed')
  return Promise.resolve({ json: () => Promise.resolve({ name: 'Stephen Curry', position: 'G', team: 'Golden State Warriors', games_played: 65, min: '34:18', ast: 6.29, blk: 0.34, fg3m: 4.43, fg_pct: 0.437, fga: 18.97, fgm: 8.29, ft_pct: 0.923, fta: 4.62, ftm: 4.26, games_played: 65, min: "34:18", name: "Stephen Curry", position: "G", pts: 25.28, reb: 5.23, stl: 1.34, team: "Golden State Warriors", turnover: 3.23 })})
});

describe('testing the search component', () => {
  xtest('component render search input textbox', () => {
    render(<Search />);
    const searchInput = screen.queryByRole('textbox');
    expect(searchInput).toBeInTheDocument();
  })
  
  xtest('value of input changes as you type', () => {
    render(<Search />);
    const searchInput = screen.queryByRole('textbox');

    fireEvent.change(searchInput, { target: { value: 'abc123' } });
    expect(searchInput.value).toBe('abc123');
  })

  xtest('clicking search will clear the value of the input', () => {
    render(<Search />);
    const searchInput = screen.queryByRole('textbox');
    const searchBtn = screen.getByRole('button');
    
    fireEvent.change(searchInput, { target: { value: 'abc123' } });
    // click the button which will invoked the function passed down via props
    // this function should clear the input -- assert input is cleared
    // same issue - do we recreate the function as a mock? Do we use the actual function?
    
    expect(searchInput.value).toBe('');
  })


  xtest('state changes when a valid player is searched', () => {
    // render the search component
    render(<Search search={mockSearch}/>);
    // get search button
    const searchBtn = screen.getByRole('button');
    // click search button
    fireEvent.click(searchBtn);
    // verify if the function passed to props was invoked
    
  })


  test('saved player shows up in myTeam upon page load', async() => {
    // render the home component
    render(<Home />);
    // grab my team
    const row = await screen.findAllByTestId('team-row');
    screen.debug();
    // assert that is has the player
    // expect(row).toBeInTheDocument();
  })

  // test to see if on click state has a new value when state is originally empty
  xtest('one player shows up when you search the name of a NBA player', () => {
    // render component
    render(<Home/>);
    const searchInput = screen.queryByRole('textbox');
    const searchBtn = screen.getByRole('button', {name: /search/i});
    // add name
    // click button
    fireEvent.change(searchInput, { target: { value: 'Stephen Curry' } });
    fireEvent.click(searchBtn);
    // screen.debug()
    // assert correct elements in 
  })

})

