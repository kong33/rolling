// 카카오톡 공유 핸들러 함수
export default function handleShareKakao() {
  window.Kakao.Share.sendCustom({
    templateId: 104815,
    templateArgs: {
      title: 'Rolling Paper로 마음을 전해봐요',
      description: '평상시 고마웠던 지인에게 마음을 표현해봐요',
    },
  });
}
