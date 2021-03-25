import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import ListIfNotLoginIn from '../components/ListIfNotLoginIn';
import EmptyList from '../components/EmptyList';
import MyList from '../components/MyList';
import '../styles/containers/WatchList.css';

const WatchList = () => {
  const { currentUserSession, watchList } = useContext(AppContext);

  if (currentUserSession === '') {
    return (
      <main>
        <ListIfNotLoginIn />
      </main>
    );
  } else if (currentUserSession != null && watchList.length <= 0) {
    return (
      <main>
        <EmptyList name={currentUserSession.displayName} />
      </main>
    );
  } else if (currentUserSession != null && watchList.length > 0) {
    return (
      <main>
        <MyList watchList={watchList} />
      </main>
    );
  }
};

export default WatchList;
