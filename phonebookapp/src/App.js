import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import Theme from './Theme';

import Layout from './components/Layout/Layout';

export default function App() {
  
  return (
    <ThemeProvider theme={Theme}>
      <Layout />
    </ThemeProvider>
  );
}