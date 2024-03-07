import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { BASE_DB_URL } from "../../firebaseConfig";
import { addMusic } from "./musicSlice";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const MusicForm = () => {
  const titreRef = useRef()
  const realisationRef = useRef()
  const artisteRef = useRef()
  const scoreRef = useRef()
  const urlcoverRef = useRef()
  const naviguate = useNavigate()


  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("tot");
    const newMusic = {

      titre: titreRef.current.value,
      realisation: realisationRef.current.value,
      artiste: artisteRef.current.value,
      score: scoreRef.current.value,
      urlcover: urlcoverRef.current.value,
    }
  
    dispatch(addMusic(newMusic))
    naviguate("/")
  }

  return ( 
    <>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>titre : </Form.Label>
          <Form.Control type="text" placeholder="ajouter un titre" ref={titreRef} />

          <Form.Label> Date : </Form.Label>
          <Form.Control type="date" placeholder="ajouter une date de réalisation" ref={realisationRef} />
          <Form.Label> Artiste : </Form.Label>
          <Form.Control type="text" placeholder="ajouter l'artiste" ref={artisteRef} />
          <Form.Label>Score : </Form.Label>
          <Form.Control type="number" min={0} max={5}  placeholder="ajouter le score / 5" ref={scoreRef} />
          <Form.Label>URL : </Form.Label>
          <Form.Control type="text" placeholder="ajouter l'url" ref={urlcoverRef} />

        </Form.Group>

        <Button variant="primary" type="submit" >
          Ajouter
        </Button>
       
      </Form>
    
      </>

      
)
};
export default MusicForm

