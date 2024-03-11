import { Layout } from './pages/Layout';
import { LandingPage } from './pages/LandingPage';
import { ListPage } from './pages/ListPage';
import { PostCardPage } from './pages/PostCardPage';
import { PostMessagePage } from './pages/PostMessagePage';
import {
  CardPostListEditPage,
  CardPostListPage,
} from './pages/CardPostListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MetaTag from './utils/MetaTag';

function App() {
  return (
    <BrowserRouter>
      <MetaTag />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="post" element={<PostCardPage />} />
          <Route
            path="post/:recipientId/messages"
            element={<PostMessagePage />}
          />
          <Route path="post/:recipientId" element={<CardPostListPage />} />
          <Route
            path="post/:recipientId/edit"
            element={<CardPostListEditPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
