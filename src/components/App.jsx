import '../styles/style.scss';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import { Loader } from 'shared/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieCardPage = lazy(() =>
  import('../pages/MovieCardPage/MovieCardPage')
);
const CastPage = lazy(() => import('../pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage/ReviewsPage'));

export const App = () => {
  return (
    <div>
      <nav>
        <ul className="headerList">
          <NavLink to="/" end className="navLink">
            Home
          </NavLink>
          <NavLink to="/movies" className="navLink">
            Movies
          </NavLink>
        </ul>
      </nav>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movie/:id" element={<MovieCardPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </div>
  );
};
