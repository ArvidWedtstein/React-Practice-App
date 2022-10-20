import React from 'react';
import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import MainLayout from '../pages/main/MainLayout';
import { BrowserRouter as Router } from 'react-router-dom';
import TestUtils, { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import Navbar from '../components/Navbar';


describe('Main Layout', () => {
  it('renders main layout', () => {
    render(
      <Router>
        <MainLayout />
      </Router>
    );

    const mainLayout = screen.getByTestId('main-layout');

    expect(mainLayout).toBeInTheDocument();
  });

  it('renders navbar', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Check if all nav-items are present
    let focusableItemsInNavbar = document.getElementsByClassName('nav-item');

    for (let i = 0; i < focusableItemsInNavbar.length; i++) {
      expect(focusableItemsInNavbar.item(i)).toBeInTheDocument();
    }
  });

  it('should focus navbar items in right order', () => {
    render(<Router><MainLayout /></Router>)

    let focusableItemsInNavbar = screen.getAllByTestId('navbar');
    

    // Sort items by left position
    focusableItemsInNavbar = focusableItemsInNavbar.sort(compare);
    
    focusableItemsInNavbar.forEach((item, i) => {
      userEvent.tab();
      expect(item).toHaveFocus();
    });
  });
});


function compare( a: any, b: any ) {
  if ( a.getBoundingClientRect().left < b.getBoundingClientRect().left ){
    return -1;
  }
  if ( a.getBoundingClientRect().left > b.getBoundingClientRect().left ){
    return 1;
  }
  return 0;
}
