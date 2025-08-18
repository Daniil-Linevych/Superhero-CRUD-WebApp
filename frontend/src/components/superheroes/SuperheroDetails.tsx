import type { Superhero } from "../../types/superhero"
import Carousel from "../carousel/Carousel"
import DescriptionItem from "../description/DescriptionItem"
import ErrorMessage from "../error/ErrorMessage"

interface SuperheroProps {
  hero?: Superhero
}

const SuperheroDetails = ({ hero }: SuperheroProps) => {

  if (!hero) return <ErrorMessage error="Superhero not found!"/>

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full">
          <Carousel images={hero.images}/>
        </div>

        <div className="w-full">
          <div className="bg-white p-6 rounded-xl dark:bg-neutral-900">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {hero.nickname}
            </h1>
            
            <div className="space-y-4">
              <DescriptionItem title="Real Name" content={hero.realName}/>
              <DescriptionItem title="Origin Description" content={hero.originDescription}/>
              <DescriptionItem title="Superpowers" content={hero.superpowers}/>
              <DescriptionItem title="Catch Phrase" content={hero.catchPhrase} isQuote={true}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuperheroDetails