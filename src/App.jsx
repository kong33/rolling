import { Layout } from './pages/Layout';
import { LandingPage } from './pages/LandingPage';
import { ListPage } from './pages/Listpage';
import { PostPage } from './pages/paosl';
import { PostMessagePage } from './pages/pospa';
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
            path="post/:recipientId/messages"
            element={<PostMessagePage />}
          />
          <Route path="post/:recipientId" element={<CardPostListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
