import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import UserCard from '../../UserCard';
import PostCard from '../../PostCard';
import { useQuery } from '@apollo/client';
import { SEARCH_QUERY } from './query';
import queryString from 'query-string';
import Loader from '../../Loader';

const SearchUserWrapper = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
`;
const SearchPostWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

type searchQueryI = {
  searchUsers: NexusGenFieldTypes['User'][];
  searchPost: NexusGenFieldTypes['Post'][];
};

const Search: React.FC<RouteComponentProps> = ({ location }) => {
  const { term } = queryString.parse(location.search);

  const { data, loading } = useQuery<searchQueryI>(SEARCH_QUERY, {
    variables: { keyword: term },
  });

  return (
    <>
      {loading ? <Loader /> : null}
      <SearchUserWrapper>
        {!loading && data ? data.searchUsers.map((user) => <UserCard data={user} />) : null}
      </SearchUserWrapper>
      <SearchPostWrapper>
        {!loading && data ? data.searchPost.map((post) => <PostCard data={post} />) : null}
      </SearchPostWrapper>
    </>
  );
};

export default Search;
