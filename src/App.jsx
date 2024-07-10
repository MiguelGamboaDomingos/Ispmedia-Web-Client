import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';
import { PlayerProvider } from './context/playerContext'; // Corrigido para importar o PlayerProvider
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './style.scss';
import LeftBarComponent from './componets/leftBar/LeftBarComponent';
import NavBarComponent from './componets/navbar/NavBarComponent';
import SideBarComponent from './componets/sideBar/SideBarComponent';
import HomeScreen from './pages/home/HomeScreen';
import GroupsScreen from './pages/groups/GroupsScreen';
import LoginScreen from './pages/login/LoginScreen';
import ProfileScreen from './pages/profile/ProfileScreen';
import RegisterScreen from './pages/register/RegisterScreen';
import FriendsScreen from './pages/friends/FriendsScreen';
import RadioScreen from './pages/radio/RadiosScreen';
import PlaylistsScreen from './pages/playlists/PlaylistsScreen';
import MusicsScreen from './pages/mymedia/musics/MusicsScreen';
import VideosScreen from './pages/videos/VideosScreen';
import MyMediaScreen from './pages/mymedia/MyMediaScreen';

function App() {
  const { currUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  
  const queryClient = new QueryClient();

  const Layout = () => (
    <div className={`theme-${darkMode ? 'darkness' : 'lightness'}`}>
      <NavBarComponent />
      <div style={{ display: 'flex' }}>
        <LeftBarComponent />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <SideBarComponent />
      </div>
    </div>
  );

  const ProtectedRoute = ({ children }) => {
    if (!currUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <QueryClientProvider client={queryClient}>
    <PlayerProvider>
      <div className="global">
        <Routes>
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route index element={<HomeScreen />} />
            <Route path="profile/:id" element={<ProfileScreen />} />
            <Route path="mymedia" element={<MyMediaScreen />} />
            <Route path="videos" element={<VideosScreen />} />
            <Route path="playlists" element={<PlaylistsScreen />} />
            <Route path="radios" element={<RadioScreen />} />
            <Route path="groups" element={<GroupsScreen />} />
            <Route path="musics" element={<MusicsScreen />} />
            <Route path="friends" element={<FriendsScreen />} />
          </Route>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </div>
    </PlayerProvider>
    </QueryClientProvider >
  );
}

export default App;
