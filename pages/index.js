import React from 'react';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import ContainerMovies from '@/containers/Movies/ContainerMovies';

const Home = () => {
  return (
    <MainLayout>
      <ContainerMovies />
    </MainLayout>
  );
};

export default Home;
