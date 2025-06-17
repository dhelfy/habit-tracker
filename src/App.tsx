import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { Layout } from './pages/Layout/Layout'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { NewHabitPage } from './pages/NewHabitPage/NewHabitPage'
import { HabitPage } from './pages/HabitPage/HabitPage'
import { ChatPage } from './pages/ChatPage/ChatPage'
import { RegPage } from './pages/RegPage/RegPage'
import { ProtectedRoute } from './features/auth/ProtectedRoute'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from './state/slices/userSlice/userSelector'
import { MoodPage } from './pages/MoodPage/MoodPage'

export const App: FC = () => {
  const isAuth = useSelector(selectIsAuthenticated)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route 
            path="profile" 
            element={<ProtectedRoute isAuth={isAuth}><ProfilePage /></ProtectedRoute>}
          />
          <Route path="auth" element={<AuthPage />} />
          <Route path="registration" element={<RegPage />} />
          <Route 
            path="new" 
            element={<ProtectedRoute isAuth={isAuth}><NewHabitPage /></ProtectedRoute>} 
          />
          <Route 
            path="habit/:id" 
            element={<ProtectedRoute isAuth={isAuth}><HabitPage /></ProtectedRoute>} 
          />
          <Route 
            path="chat" 
            element={<ProtectedRoute isAuth={isAuth}><ChatPage /></ProtectedRoute>} 
          />
          <Route 
            path="mood" 
            element={<ProtectedRoute isAuth={isAuth}><MoodPage /></ProtectedRoute>} 
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
