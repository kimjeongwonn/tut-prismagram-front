import React from 'react';
import { useQuery } from '@apollo/client';
import { ME } from './query';
import { Logo, Compass, HeartEmpty, User } from './Icons';
import { Link, withRouter } from 'react-router-dom';
import useInput from '../../Hooks/useInput';
import { HeaderContent, HeaderWrapper, HeaderColumn, SearchBar, HeaderLink } from './styles';

export default withRouter(({ history }) => {
  const [search] = useInput('');
  const onSearchSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    history.push(`/search?term=${search?.value}`);
  };
  const { data: myData } = useQuery<{
    seeMy: { id: string; username: string; fullName: string; profileImage: string };
  }>(ME);

  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderColumn>
          <Link to="/">
            <Logo />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={onSearchSubmit}>
            <SearchBar placeholder="Search" {...search} />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/explore">
            <Compass />
          </HeaderLink>
          <HeaderLink to="/notification">
            <HeartEmpty />
          </HeaderLink>
          <HeaderLink to={myData?.seeMy ? `/profile/${myData?.seeMy.username}` : '#'}>
            <User />
          </HeaderLink>
        </HeaderColumn>
      </HeaderContent>
    </HeaderWrapper>
  );
});
