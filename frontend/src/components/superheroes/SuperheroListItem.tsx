import type { Superhero } from '../../types/superhero'
import defaultSuperheroImage from '../../assets/no-photo-superhero.png'
import { API_BASE_URL } from '../../config/api'

interface Props {
  hero: Superhero
  className?: string
}

const SuperheroesListItem = ({ hero }: Props) => {

  return (
     <div>
        <img 
            className="w-full h-48 object-fit rounded-t-xl" 
            src={`${API_BASE_URL}/uploads/${hero.images[0]}` || defaultSuperheroImage} 
            alt={`${hero.nickname} profile`}
            onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = defaultSuperheroImage
            }}
        />
        <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                {hero.nickname}
            </h3>
        </div>
    </div>
  )
}

export default SuperheroesListItem