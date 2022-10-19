import React from 'react';
import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import MainLayout from '../pages/main/MainLayout';
import { BrowserRouter as Router } from 'react-router-dom';
import TestUtils, { act } from 'react-dom/test-utils';

test('renders app', () => {
  render(<Router><MainLayout /></Router>);

  // Login screen
  

  // expect(screen.getByLabelText('Home')).toBeInTheDocument();

  
});
