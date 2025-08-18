import axios from "axios"

import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"

import SuperheroForm from "../components/forms/SuperheroForm"
import type { SuperheroFormData } from "../types/superhero"
import BackToSuperheroes from "../components/buttons/BackToSuperheroes"

import { fetchSuperheroes } from "../redux/slices/superhero"
import type { RootState, AppDispatch } from "../redux/store"

import { API_BASE_URL } from "../config/api"

const SuperheroCreatePage = () => {
  
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const [existingImages, setExistingImages] = useState<string[]>([])

  const heroes = useSelector((state: RootState) => state.superheroes.items)
  const hero = id ? heroes.find(h => String(h.id) === id) : null
  const isEdit = Boolean(id)

  useEffect(() => {
    if (isEdit && heroes.length === 0) {
      dispatch(fetchSuperheroes())
    }
    if (hero) {
      setExistingImages(hero.images || [])
    }
  }, [dispatch, isEdit, heroes.length, hero])

  const handleImageDelete = (imageName: string) => {
    setExistingImages(prev => prev.filter(img => img !== imageName))
  }

  const handleSubmit = async (data: SuperheroFormData) => {
    try {
      let uploadedImageNames: string[] = [...existingImages]

      if (data.images && data.images.length > 0) {
        const formData = new FormData()
        Array.from(data.images).forEach((file) => formData.append("images", file))

        const uploadRes = await axios.post(
          `${API_BASE_URL}/superheroes/upload`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        )

        uploadedImageNames = [...uploadedImageNames, ...uploadRes.data.files]
      }

      const heroPayload = {
        nickname: data.nickname,
        realName: data.realName,
        originDescription: data.originDescription,
        superpowers: data.superpowers,
        catchPhrase: data.catchPhrase,
        images: uploadedImageNames,
      }

      if (isEdit && id) {
        await axios.patch(`${API_BASE_URL}/superheroes/${id}`, heroPayload)
      } else {
        await axios.post(`${API_BASE_URL}/superheroes`, heroPayload)
      }

      navigate("/")
    } catch (err) {
      console.error("Failed to save hero:", err)
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">
          {isEdit ? "Edit Superhero" : "Create Superhero"}
        </h1>
        <BackToSuperheroes/>
      </div>

      <SuperheroForm
        defaultValues={hero ? {
          nickname: hero.nickname,
          realName: hero.realName,
          originDescription: hero.originDescription,
          superpowers: hero.superpowers,
          catchPhrase: hero.catchPhrase,
        } : {}}
        existingImages={existingImages}
        onImageDelete={handleImageDelete}
        onSubmit={handleSubmit}
        submitLabel={isEdit ? "Update Superhero" : "Create Superhero"}
      />
    </div>
  )
}

export default SuperheroCreatePage