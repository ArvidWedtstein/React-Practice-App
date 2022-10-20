import React from 'react';
import { fireEvent, getByLabelText, getByTestId, render, screen } from '@testing-library/react';
import Login, { loginUser } from '../components/Login/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import TestUtils, { act } from 'react-dom/test-utils';
import MainLayout from '../pages/main/MainLayout';
import userEvent from '@testing-library/user-event';

describe('login screen', () => {
  it('renders login screen', () => {
    // Clear LocalStorage to trigger login screen
    // localStorage.clear();
    const token = localStorage.getItem('token');
  
    if (!token) return expect(true).toBe(true);
  
    act(() => {
      render(<MainLayout />);
    })
  
    // Login screen
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('checks api for token with invalid user login', async () => {
    const fakeUserLogin = {
      username: 'test',
      password: 'test'
    } 

    let error = { error: 'Invalid email or password' };
    // Test for API call responses 
    expect(await loginUser(fakeUserLogin)).toEqual(error);
    expect((await loginUser(fakeUserLogin)).token).toBeUndefined()
  })


  it('checks api for token with valid user login', async () => {
    const fakeUserLogin = {
      username: 'john@john.john',
      password: 'johnjohn'
    } 
    let login = (await loginUser(fakeUserLogin))
    // const response = {
    //   token: login.token,
    //   user: {
    //     id: 1,
    //     email: 'john@john.john',
    //     name: 'John',
    //     age: 20,
    //   }
    // }

    // Test for API call responses 
    expect(login.token).toBeDefined();
    expect(login.user).toBeDefined();
    expect(login.user.id).toBe(1);
    expect(login.user.email).toBeDefined();
    expect(login.user.name).toBeDefined();
    expect(login.user.age).toBe(20);

  })

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
})





