import React from 'react';
import { fireEvent, getByLabelText, getByTestId, render, screen } from '@testing-library/react';
import Login from '../components/Login/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import TestUtils, { act } from 'react-dom/test-utils';
import MainLayout from '../pages/main/MainLayout';
import userEvent from '@testing-library/user-event';


test('renders login screen', () => {
  // Clear LocalStorage to trigger login screen
  // localStorage.clear();
  localStorage.setItem('token', '123456789')
  render(<MainLayout />);

  // Login screen
  expect(screen.getByLabelText('Email')).toBeInTheDocument();
  expect(screen.getByLabelText('Password')).toBeInTheDocument();



  // Test for API call responses 
  // spyOn(window, "fetch").and.callFake(function() {
  //   return { ...someProjects };
  // });
});


// it('fires login form submit', () => {
//   // Enter Credentials to email field
//   (screen.getByTestId('email') as HTMLInputElement).value = 'john@john.john';


//   // Enter Credentials to password field
//   (screen.getByTestId('password') as HTMLInputElement).value = 'johnjohn'


//   // Click login
//   fireEvent(
//     screen.getByText('Login'),
//     new MouseEvent('click', {
//       bubbles: true,
//       cancelable: false,
//     })
//   )

//   let form = document.getElementsByTagName('form')[0];
//   TestUtils.Simulate.submit(form);

// });



describe('When Tab is pressed', () => {
  it('should focus next input/button', () => {
    const component = render(<Router><MainLayout /></Router>)

    // trigger tab to focus first element
    userEvent.tab()
    let focusableItemsInNavbar = screen.getAllByTestId('navbar')

    if (!screen.getAllByTestId('navbar')[0]) return

    focusableItemsInNavbar.forEach((item, i) => {
      expect(item).toHaveFocus()

      // trigger tab
      userEvent.tab()
      // fireEvent.keyDown(window, {key: 'Tab', code: 'Tab'})


    });
  })
});
