import { Helmet } from 'react-helmet-async';
import fav from '../assets/favicon/favicon.ico';
import logo from '../assets/images/logo.png';

export default function MetaTag() {
  // props로 content 내용을 불러올 예정임
  return (
    <Helmet>
      <meta name="description" content="지인에게 감사한 마음을 전해요" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Rolling" />
      <meta property="og:site_name" content="Rolling" />
      <meta property="og:description" content="지인에게 감사한 마음을 전해요" />
      <meta property="og:image" content={logo} />
      <meta property="og:url" content="https://22-rolling.vercel.app/" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="twitter:title" content="Rolling" />
      <meta
        name="twitter:description"
        content="지인에게 감사한 마음을 전해요"
      />
      <meta name="twitter:image" content={logo} />
      <link rel="icon" href={fav} />
    </Helmet>
  );
}
