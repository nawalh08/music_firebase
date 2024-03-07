import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import SignForm from "./components/auth/SignForm"
import MusicDisplay from "./components/music/MusicDisplay"
import MusicForm from "./components/music/MusicForm"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MusicDisplay/>
  },
  {
    path: "/connexion",
    element: <SignForm />
  },
  {
    path: "/add",
    element: <MusicForm />
  }

])

export default router