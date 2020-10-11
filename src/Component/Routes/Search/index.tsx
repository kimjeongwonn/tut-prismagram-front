import React from 'react';
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router-dom';
import UserCard from '../../UserCard'
import {useQuery} from '@apollo/client'
import { SEARCH_QUERY } from './query';
import queryString from 'query-string'
import Loader from '../../Loader'


const SearchWrapper = styled.div`
  width: 100%; 
  display: flex;
  overflow-x: auto;
`

type searchQueryI = {
  searchUsers: NexusGenFieldTypes['User'][]
  searchPost: NexusGenFieldTypes['Post'][]
}


const Search: React.FC<RouteComponentProps> = ({location}) => {
  const {term} = queryString.parse(location.search)

  const {data, loading} = useQuery<searchQueryI>(SEARCH_QUERY, {
      variables: {keyword: term}
    })
    
    return (
    <SearchWrapper>
      {loading ? <Loader/> : null}
      {!loading && data ? data.searchUsers.map(user => <UserCard data={user}/>) : null}
</SearchWrapper>)}

export default Search