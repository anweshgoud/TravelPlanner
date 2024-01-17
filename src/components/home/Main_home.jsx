
import { createBrowserRouter, RouterProvider, Link, Route } from 'react-router-dom';
import Main from './main2';
import LoginMain from '../1-Login/1-Login';
import MainSign from '../2-Signup/2-MainSignup';

const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '/login', element: <LoginMain /> },
  { path: '/signup', element: <MainSign /> },
]);

const Home = () => {
  return (
    <RouterProvider router={router}>
      <div>
        <nav>
          <Link to="/"></Link>
        </nav>
        {/* Define routes here if needed */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/signup" element={<MainSign />} />
      </div>
    </RouterProvider>
  );
};

export default Home;
