import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { Layout } from './pages/Layout/Layout'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { NewHabitPage } from './pages/NewHabitPage/NewHabitPage'
import { HabitPage } from './pages/HabitPage/HabitPage'
import { ChatPage } from './pages/ChatPage/ChatPage'
import { RegPage } from './pages/RegPage/RegPage'

export const App: FC = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="registration" element={<RegPage />}/>
          <Route path="new" element={<NewHabitPage />} />
          <Route path="habit/:id" element={<HabitPage />} />
          <Route path="chat" element={<ChatPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
