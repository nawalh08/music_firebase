import { useSelector, useDispatch } from "react-redux";
import MusicItem from "./MusicItem";
import { useEffect } from "react";
import { fetchMusic } from "./musicSlice";
import NavBar from '../NavBar/NavBarComponent'

const MusicDisplay = () => {
    const music = useSelector(state => state.music.musics)
    const change = useSelector(state => state.music.change)
    const dispatch = useDispatch()
  
    useEffect(() => {
       
                dispatch(fetchMusic())
    },[change])

    return (
        <>
            <NavBar/>
        <div className="row"> 
            {
                music.map((music, index) => (
                    <MusicItem music={music} key={index} />
                ))
            }
    </div>

        </>
    );
}
 
export default MusicDisplay;