import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BASE_DB_URL } from "../../firebaseConfig";
      import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardText from "react-bootstrap/esm/CardText";
import { deleteMusic, editMusic } from "./musicSlice";



const MusicItem = (props) => {
    const music = props.music
    const dispatch = useDispatch()
    console.log(music);
    console.log(music.id);
    const user = useSelector(state => state.auth.user)
    const titreRef = useRef()
    const realisationRef = useRef()
    const artisteRef = useRef()
    const scoreRef = useRef()
    const urlcoverRef = useRef()
    const [edit,setEdit] = useState(false)
  
    

    const handleSubmit = (e) => {

      const editedMusic = {
        titre: titreRef.current.value,
        realisation: realisationRef.current.value,
        artiste: artisteRef.current.value,
        score: scoreRef.current.value,
        urlcover: urlcoverRef.current.value,
      }
      console.log(editedMusic);
    
      dispatch(editMusic({id : music.id,editedMusic}))
     
      setEdit(!edit)
    }
    
    return  (
        <div className="col-md-3 my-2 mx-5">

{
      edit? <Card style={{ width: '400px', height: '500px', margin : "auto"  , textAlign : "center"}}  className='shadow p-3 mb-5 bg-white rounded' >
     
      < Card.Text> <label>Url Image : </label><input type="text" ref={urlcoverRef} defaultValue={music.urlcover}/>  </Card.Text>
      <Card.Body>
      < Card.Text> <label>Titre : </label> <input type="text" ref={titreRef} defaultValue={music.titre}/>  </Card.Text>
        <Card.Text> <label>Artiste : </label> <input type="text" ref={artisteRef} defaultValue={music.artiste}/>  </Card.Text>
        <Card.Text> <label>Date de réalisation : </label><input type="Date" className="rounded " ref={realisationRef} defaultValue={music.realisation}/>  </Card.Text>
        <Card.Text> <label>Score : </label> <input type="number" min={0} max={5} ref={scoreRef} defaultValue={music.score}/> </Card.Text>
        {user ?
        <div>
        <Button className="mx-2" onClick={() =>handleSubmit()}>Valider</Button>

        </div>
          :  
          <div>

          </div>
      }
      </Card.Body>
    </Card>:
    <Card style={{ width: '400px', height: '500px', margin : "auto"  , textAlign : "center"}}  className='shadow p-3 mb-5 bg-white rounded' >
     
      <Card.Img variant="top" src={music.urlcover} className='rounded ' style={{ height: "200px" }} />
      <Card.Body>
        <Card.Title>Titre : {music.titre}</Card.Title>
        <Card.Text>Artiste : {music.artiste}</Card.Text>
        <Card.Text>Date de sortie: {music.realisation}</Card.Text>
        <Card.Text>Score : {music.score}/5</Card.Text>
        {user ?
        <div>
        <Button className="mx-2" onClick={() => setEdit(!edit)}>Modifier</Button>
        <Button className="my-2" onClick={ () => dispatch(deleteMusic(music.id))}>Supprimer</Button>
        </div>
          :  
          <div>

          </div>
      }
      </Card.Body>
    </Card>
}
    </div>
  );
}


    
       

    
     

 
export default MusicItem;