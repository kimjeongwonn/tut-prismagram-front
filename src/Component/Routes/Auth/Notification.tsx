import React from 'react';
import { AlertText, Link, NotificationContainer } from './styled';
import { NotificationProps } from './types';

export default ({ state, setAction, setNotification, isLoading, vaildateUserResult }: NotificationProps) => {
  // 1: 로그인 요청 성공
  // 2: 계정 없음
  // 3: 빈칸 있음
  // 4: 가입요청 이메일 이미 존재
  // 5: 가입요청 username 이미 존재
  // 6: 가입완료
  // 7: 가입에러
  if (isLoading) return <span style={{ fontSize: '8px', textAlign: 'center' }}>Loading...</span>;
  return (
    <NotificationContainer>
      {state.some((x) => x === 1) && <AlertText>메일함을 확인해 주세요</AlertText>}
      {state.some((x) => x === 2) && (
        <AlertText>
          계정이 존재하지 않습니다.{' '}
          <Link
            onClick={() => {
              setAction('signUp');
              setNotification([]);
            }}
          >
            여기
          </Link>
          를 눌러 가입하세요
        </AlertText>
      )}
      {state.some((x) => x === 3) && <AlertText>모든 칸을 채워주세요</AlertText>}
      {state.some((x) => x === 4) && <AlertText>이미 가입된 이메일입니다.</AlertText>}
      {state.some((x) => x === 5) && <AlertText>이미 존재하는 사용자이름 입니다.</AlertText>}
      {state.some((x) => x === 6) && <AlertText>계정이 생성되었습니다.</AlertText>}
    </NotificationContainer>
  );
};
