import { Routes, Route, Navigate } from 'react-router-dom';
import useStore from './store/useStore';
import Login from './pages/Login/Login';
import Nav from './components/Nav';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';

const App = () => {
  const { isNavOpen, auth } = useStore();

  return (
    <div className={auth ? 'flex' : ''}>
      {auth && <Nav />}
      <main className={`${auth ? `bg-lightGray w-full ${isNavOpen ? '330px' : '65px'}` : ''}`}>
        <Routes>
          {!auth ? (
            <Route path='*' element={<Login />} />
          ) : (
            <>
              <Route path='*' element={<Navigate to='/Tasks' />} />
              <Route path='/Tasks' element={<Tasks />} />
              <Route path='/Settings' element={<Settings />} />
            </>
          )}
        </Routes>
      </main>
    </div>
  );
};

export default App;
