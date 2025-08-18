import { Link } from "react-router"
import SuperheroesList from "../components/superheroes/SuperheroesList"

const SuperheroesPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Superheroes</h1>
        <div className="flex justify-between">
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Collection of heroes
          </p>
          <Link to="/superheroes/new"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-hidden focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800"
          >Create New</Link>
        </div>
      </div>
      <SuperheroesList />
    </div>
  )
}

export default SuperheroesPage