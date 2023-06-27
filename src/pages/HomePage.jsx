import React from 'react';
import HomeBar from '../components/common/navBar/HomeBar';
import TabBar from '../components/common/navBar/TabBar';
import ShowCase from '../components/common/ShowCase';
import Favorite from '../components/home/Favorite';
import PostList from '../components/home/PostList';

const HomePage = () => {
  return (
    <>
      <HomeBar />
      <ShowCase
        contents={
          <div>
            <Favorite />
            <PostList />
          </div>
        }
      />
      <TabBar />
    </>
  );
};

export default HomePage;
