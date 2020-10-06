import React, { useState, useEffect } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import useInput from '../../../Hooks/useInput';
import Notification from './Notification';
import Button from '../../Button';
import { LOG_IN, SIGN_UP, CHECK_USER, CONFIRM_SECRET } from './query';
import { Form, Link, StateChanger, Wrapper } from './styled';

export default () => {
  const [action, setAction] = useState('logIn');
  const [username, setUsername] = useInput('');
  const [firstName] = useInput('');
  const [lastName] = useInput('');
  const [email] = useInput('');
  const [secret] = useInput('');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<number[]>([]);

  const [requestSecret, { loading: requestSecretLoading }] = useMutation<{
    requestSecret: boolean;
  }>(LOG_IN, {
    variables: { email: email.value },
    onCompleted: (data) => {
      if (data.requestSecret) {
        setAction('confirm');
        setNotification([1]);
      } else setNotification([2]);
    },
    onError: () => {
      setNotification([2]);
    },
  });
  const [confirmSecretMutation, { loading: confirmSecretLoading }] = useMutation<{
    confirmSecret: string;
  }>(CONFIRM_SECRET, {
    variables: { email: email.value, secret: secret.value },
    update: (cache, { data }) => {
      const token = data?.confirmSecret;
      if (token) {
        localStorage.setItem('token', token);
        cache.modify({
          fields: {
            isLoggedIn() {
              return !!localStorage.getItem('token');
            },
          },
        });
      } else throw new Error('로그인 실패');
    },
  });
  const [createAccount, { loading: createAccountLoading }] = useMutation<{
    createAccount: boolean;
  }>(SIGN_UP, {
    variables: { email: email.value, username: username.value, firstName: firstName.value, lastName: lastName.value },
    onCompleted: (data) => {
      if (data.createAccount) setNotification([6]);
    },
    onError: () => {
      setNotification([7]);
    },
  });

  const [getVaildateUser, { data: vaildateUserResult }] = useLazyQuery<{
    checkUser: boolean;
  }>(CHECK_USER, {
    fetchPolicy: 'no-cache',
  });
  const [getVaildateEmail, { data: vaildateEmailResult }] = useLazyQuery<{
    checkUser: boolean;
  }>(CHECK_USER, {
    fetchPolicy: 'no-cache',
  });

  //로딩체크
  useEffect(() => {
    if (requestSecretLoading || createAccountLoading || confirmSecretLoading) setIsLoading(true);
    else setIsLoading(false);
  }, [requestSecretLoading, createAccountLoading, confirmSecretLoading]);

  // 중복 체크
  useEffect(() => {
    if (vaildateUserResult?.checkUser === true) setNotification((x) => [...x, 5]);
    else if (vaildateUserResult?.checkUser === false) setNotification((x) => x.filter((n) => n !== 5));
    if (vaildateEmailResult?.checkUser === true) setNotification((x) => [...x, 4]);
    else if (vaildateEmailResult?.checkUser === false) setNotification((x) => x.filter((n) => n !== 4));
  }, [vaildateUserResult, vaildateEmailResult]);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    switch (action) {
      //로그인
      case 'logIn':
        if (email.value !== '') {
          setNotification((x) => x.filter((n) => n !== 3));
          requestSecret();
        } else {
          setNotification((x) => [...x, 3]);
        }
        break;
      //코드입력
      case 'confirm':
        confirmSecretMutation();

        break;
      //가입
      case 'signUp':
        if (
          email.value !== '' &&
          username.value !== '' &&
          firstName.value !== '' &&
          lastName.value !== '' &&
          email.value !== ''
        ) {
          setNotification((x) => x.filter((n) => n !== 3));
          if (!(vaildateUserResult?.checkUser || vaildateEmailResult?.checkUser)) {
            createAccount();
          }
        } else {
          setNotification((x) => [...x, 3]);
        }
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <Form>
        <form onSubmit={onSubmit}>
          {action === 'logIn' ? (
            <input placeholder={'Email'} {...email} type="email" required />
          ) : action === 'confirm' ? (
            <input placeholder={'Secret Code'} {...secret} required />
          ) : action === 'signUp' ? (
            <>
              <input placeholder={'First Name'} {...firstName} />
              <input placeholder={'Last Name'} {...lastName} />
              <input
                placeholder={'Email'}
                {...email}
                onBlur={() => {
                  if (email.value !== null) {
                    const checkEmail = email.value;
                    getVaildateEmail({ variables: { email: checkEmail } });
                  } else {
                    setNotification((x) => x.filter((n) => n !== 4));
                  }
                }}
                type="email"
                required
              />
              <input
                placeholder={'Username'}
                {...username}
                onBlur={() => {
                  if (username.value !== null) {
                    const checkUser = username.value;
                    getVaildateUser({ variables: { username: checkUser } });
                  } else {
                    setNotification((x) => x.filter((n) => n !== 5));
                  }
                }}
                required
              />
            </>
          ) : null}
          <Notification
            state={notification}
            setAction={setAction}
            setNotification={setNotification}
            isLoading={isLoading}
            vaildateUserResult={vaildateUserResult}
          />
          <Button
            text={
              action === 'signUp' ? 'Sign Up' : action === 'confirm' ? 'Confirm' : action === 'logIn' ? 'Log In' : ''
            }
          />
        </form>
      </Form>
      {action === 'confirm' || (
        <StateChanger>
          {action === 'logIn' ? (
            <>
              Don't have an account? <Link onClick={() => setAction('signUp')}>Sign Up</Link>
            </>
          ) : action === 'signUp' ? (
            <>
              Have an account?{' '}
              <Link
                onClick={() => {
                  setUsername('');
                  setAction('logIn');
                }}
              >
                Log In
              </Link>
            </>
          ) : null}
        </StateChanger>
      )}
    </Wrapper>
  );
};
