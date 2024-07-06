"use client"
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Head from 'next/head';
import JobGrid from "./components/JobGrid"
import Filters from './components/Filters';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../app/globals.css';
import Echarts from './components/Echarts';

const theme = createTheme({
  typography: {
    fontFamily: 'Lexend, sans-serif', 
  },
});


export default function Home(pageProps : any) {

  const [filters, setFilters] = useState({
    role: null,
    companyName: '',
    location: null,
  });

  const handleFilterChange = (role, companyName, location) => {
    setFilters({ role, companyName, location });
  };

  
  return (
    <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Provider store={store}> {/* Redux Provider */}
        <ThemeProvider theme={theme}>
          {/* <Filters onFilter={handleFilterChange} />
          <JobGrid filters={filters} /> */}
          <Echarts/>
        </ThemeProvider>
      </Provider>
    </>
  );
}
