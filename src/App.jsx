import Layout from './pages/layout';
import LandingPage from './pages/landingpage';
import ListPage from './pages/listpage/ListPage';
// import PostPage from './pages/postpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Input } from './components/Input/index';
// import { Dropdown } from './components/Dropdown/index';
// import { ReactDraft } from './components/ReactDraft/index';

function App() {
  //let a = [123, 123, 234, 345];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="list" element={<ListPage />} />
          {/* <Route path="post" element={<PostPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
