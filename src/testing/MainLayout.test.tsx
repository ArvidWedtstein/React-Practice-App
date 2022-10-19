import React from 'react';
import { render, screen } from '@testing-library/react';
import MainLayout from '../pages/main/MainLayout';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders app', () => {
  render(<Router><MainLayout /></Router>);

  // Login screen
  const linkElement = screen.getByLabelText('Email');
  expect(linkElement).toBeInTheDocument();
});
