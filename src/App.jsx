
import './App.css'
import SignForm from './components/auth/SignForm'
import { useDispatch, useSelector } from 'react-redux'

import { removeUser } from './components/auth/authSlice'
import MusicForm from './components/music/MusicForm'
import MusicDisplay from './components/music/MusicDisplay'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()

  return (
    <>
  
      {
        user ?
          <div>
            <MusicForm />
            <div className='row'>
              <MusicDisplay />
            </div>
          </div>

          :
          <div>
            { <SignForm /> }
            <div className='row'>
              <MusicDisplay />
            </div>
          </div>

      }
    </>
  )
}

export default App

