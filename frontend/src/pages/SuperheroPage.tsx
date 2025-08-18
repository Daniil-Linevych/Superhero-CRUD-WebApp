import axios from "axios"

import {useEffect, useState} from "react"
import { useParams } from "react-router"
import {useNavigate } from "react-router-dom"

import type { Superhero } from "../types/superhero"

import SuperheroDetails from "../components/superheroes/SuperheroDetails"
import Loading from "../components/loading/Loading"
import ErrorMessage from "../components/error/ErrorMessage"
import BackToSuperheroes from "../components/buttons/BackToSuperheroes"
import SuperheroActions from "../components/buttons/SuperheroActions"

import { API_BASE_URL } from "../config/api"


const initialSuperhero:Superhero = {
    id: -1,
    nickname: "",
    realName: "",
    originDescription: "",
    superpowers: "",
    catchPhrase: "",
    images: [],
}

const SuperheroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [hero, setHero] = useState<Superhero>(initialSuperhero);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  
  useEffect(()=>{
    axios.get(`${API_BASE_URL}/superheroes/${id}`).then( res => {
        setHero(res.data)
        setLoading(false)
        console.log(res.data)  
  }).catch((err)=>{
    console.log(err)
    setError(err)
    setLoading(false)
  })
  }, [])

  const handleDelete = async () => {
     if (!hero?.id) return

     try{
        await axios.delete(`${API_BASE_URL}/superheroes/${id}`)
        navigate("/")
     } catch (err) {
        console.log(err)
     }
  }

  if (isLoading) return <Loading count={1}></Loading>
  if (error) return <ErrorMessage error="Error loading superhero"></ErrorMessage>

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <BackToSuperheroes/>
        <SuperheroDetails hero={hero}/>
        <SuperheroActions heroId={hero.id} onDelete={handleDelete} />
    </div>
  )
}

export default SuperheroPage