import { Layout } from './pages/Layout';
import { LandingPage } from './pages/LandingPage';
import { ListPage } from './pages/ListPage';
import { PostPage } from './pages/PostPage';
import { PostMessagePage } from './pages/PostMessagePage';
import { CardPostListPage } from './pages/CardPostListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="post" element={<PostPage />} />
          <Route
            path="post/:recipientId/message"
            element={<PostMessagePage />}
          />
          <Route path="post/:recipientId" element={<CardPostListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
