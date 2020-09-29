import React, { useState } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import useInput from '../../../Hooks/useInput';
import Button from '../../Button';
import Input from '../../input';
import Notification from './Notification';
import { LOG_IN, SIGN_UP, CHECK_USER } from './query';
import { Form, Link, StateChanger, Wrapper } from './styled';

export default () => {
  const [action, setAction] = useState('logIn');
  const [notification, setNotification] = useState(0);
  const username = useInput('');
  const firstName = useInput('');
  const lastName = useInput('');
  const email = useInput('');

  const [requestSecret] = useMutation<{ requestSecret: boolean }>(LOG_IN, {
    variables: { email: email.value },
    update: (_, { data }) => {
      const notice = data?.requestSecret ? 1 : 2;
      setNotification(notice);
    },
  });
  const [createAccount] = useMutation<{ createAccount: boolean }>(SIGN_UP, {
    variables: { email: email.value, username: username.value, firstName: firstName.value, lastName: lastName.value },
    update: (_, { data }) => {
      const notice = data?.createAccount ? 6 : 7;
      setNotification(notice);
    },
  });
  const [getCheck] = useLazyQuery(CHECK_USER);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    switch (action) {
      //로그인
      case 'logIn':
        if (email.value !== '') {
          requestSecret();
        } else {
          setNotification(3);
        }
        break;
      //가입
      case 'signUp':
        if (email.value !== '' && username.value && firstName.value && lastName.value && email.value) {
          // const { data: checkEmail } = getCheck<{ checkUser: boolean }>({
          //   variables: { email: email.value },
          // });
          // const { data: checkUserName } = getCheck<{ checkUser: boolean }>({
          //   variables: { username: username.value },
          // });
          // if (checkEmail) setNotification(4);
          // else if (checkUserName) setNotification(5);
          // else createAccount();
        } else {
          setNotification(3);
        }
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <Form>
        {action === 'logIn' ? (
          <form onSubmit={onSubmit}>
            <Input placeholder={'Email'} {...email} type="email" />
            {notification ? (
              <Notification state={notification} setAction={setAction} setNotification={setNotification} />
            ) : null}
            <Button text={'Log In'} />
          </form>
        ) : action === 'signUp' ? (
          <form onSubmit={onSubmit}>
            <Input placeholder={'First Name'} {...firstName} />
            <Input placeholder={'Last Name'} {...lastName} />
            <Input placeholder={'Email'} {...email} type="email" />
            <Input placeholder={'Username'} {...username} />
            {notification ? (
              <Notification state={notification} setAction={setAction} setNotification={setNotification} />
            ) : null}
            <Button text={'Sign Up'} />
          </form>
        ) : null}
      </Form>
      <StateChanger>
        {action === 'logIn' ? (
          <>
            Don't have an account? <Link onClick={() => setAction('signUp')}>Sign Up</Link>
          </>
        ) : action === 'signUp' ? (
          <>
            Have an account? <Link onClick={() => setAction('logIn')}>Log In</Link>
          </>
        ) : (
          ''
        )}
      </StateChanger>
    </Wrapper>
  );
};
