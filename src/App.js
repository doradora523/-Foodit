import './styles/App.css';
import { Routes, Route } from 'react-router-dom';

import WritingPage from './pages/WritingPage';
import CategoryListPage from './pages/CategoryListPage';
import PostsPage from './pages/PostsPage';

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Routes>
          <Route path="/writingPage" element={<WritingPage />} />
          <Route path="/categoryListPage" element={<CategoryListPage />} />
          <Route path="/postsPage" element={<PostsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
