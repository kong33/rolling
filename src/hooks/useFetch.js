const baseURL = 'https://rolling-api.vercel.app';

// 1. 우선 fetch 기본 함수 제작 후
// 2. { get put patch delete post } Hooks를 추가적으로 제작
// 3. /{team}/messages/{id}/, /{team}/recipients/{id}/, /{team}/recipients/{recipient_id}/reactions/
// 4. url 가공 필요

// 기본 fetch에서 url, method, body을 받아 실행
async function uesFetch(url, method = 'GET', body) {
  try {
    const response = await fetch(`${baseURL}${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response;
  } catch (error) {
    console.log(`서버와의 통신 과정에서 문제가 발생하였습니다. (fetch 확인)`);
    console.error(error);
  }
}

export default uesFetch;

// const API = {
//   // GET: 리소스 조회
//   get: async (url) => {
//     return await useFetch(url, 'GET');
//   },
//   // POST: 요청 데이터 처리, 주로 등록에 사용
//   post: async (url, body) => {
//     return await useFetch(url, 'POST', body);
//   },
//   // PATCH: 리소스 부분 변경
//   patch: async (url, body) => {
//     return await useFetch(url, 'PATCH', body);
//   },
//   // PUT: 리소스 덮어쓰기 혹은 생성
//   put: async (url, body) => {
//     return await ussFetch(url, 'PUT', body);
//   },
//   // DELETE: 리소스 삭제
//   delete: async (url) => {
//     return await useFetch(url, 'DELETE');
//   },
// };
