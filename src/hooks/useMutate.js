import { useState } from 'react';

export default function useMutate(url, method = 'POST') {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async (body, { onSuccess, onError } = {}) => {
    setIsLoading(true);

    try {
      // 통신 할 데이터 메소드와 헤더 지정
      const requestOptions = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      // body 유무 확인 조건부 추가
      if (body) {
        requestOptions.body = JSON.stringify(body);
      }

      // fetch 호출
      const response = await fetch(
        `https://rolling-api.vercel.app${url}`,
        requestOptions,
      );

      if (!response.ok) {
        throw new Error('서버 응답 실패');
      }

      const result = await response.json();
      if (onSuccess) {
        onSuccess(result); //성공시 실행할 함수
      }
      setData(result);
    } catch (error) {
      if (onError) {
        onError(error); //실패시 실행할 함수
      }
    } finally {
      // 데이터 로딩 완료 후에는 다시 false로 설정
      setIsLoading(false);
    }
  };

  return { data, mutate, isLoading };
}
//data : response 데이터. 필요하면 사용
//mutate : 사용처에서 특정 함수 안에서 fetch진행하고 싶으면 mutate로 해야함. (useMutate자체는 함수 안에서 사용 불가능 (훅이라서))
//isLoading : 로딩 상황이 필요하면 사용
//onError : 에러가 발생했다는 사실이 필요하면 사용 (ex: onError로 조건부렌더링 등 )
//사용방법은 postCardPage, postMessagePage를 참고하세요!
