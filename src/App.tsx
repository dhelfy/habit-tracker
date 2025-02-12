import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { Layout } from './pages/Layout/Layout'

export const App: FC = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
