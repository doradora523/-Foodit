import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import 'tailwindcss/tailwind.css';

import Chat from './pages/ChatPage';
import ChatList from './pages/ChatListPage';
import Home from './pages/HomePage';
import Register from './pages/RegisterPage';
import SignIn from './pages/SignInPage';
import SplashScreen from './pages/SplashScreenPage';
import Walkthrough from './pages/WalkthroughPage';
import RegisterComplete from './pages/RegisterCompletePage';

import WritingPage from './pages/WritingPage';
import CategoryListPage from './pages/CategoryListPage';
import PostsPage from './pages/PostsPage';

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register-complete" element={<RegisterComplete />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/splashscreen" element={<SplashScreen />} />
            <Route path="/walkthrough" element={<Walkthrough />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/chatlist" element={<ChatList />} />
            <Route path="/writingPage" element={<WritingPage />} />
            <Route path="/categoryListPage" element={<CategoryListPage />} />
            <Route path="/postsPage" element={<PostsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
