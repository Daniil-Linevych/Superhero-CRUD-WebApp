import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSuperheroes } from "./../../redux/slices/superhero"
import type { RootState, AppDispatch } from "../../redux/store"
import SuperheroesListItem from "./SuperheroListItem"
import Loading  from "../loading/Loading"
import ErrorMessage from "../error/ErrorMessage"
import Pagination from "../pagination/Pagination"
import { Link } from "react-router"

const ITEMS_PER_PAGE = 8;

const SuperheroesList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items, status, error } = useSelector((state: RootState) => state.superheroes)
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchSuperheroes())
    }, [dispatch])

    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
    const paginatedItems = items.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    if (status === 'loading') return (
        <Loading count={ITEMS_PER_PAGE}/>
    )

    if (status === 'rejected') return (
        <ErrorMessage error={error ? error : ''}/>
    )

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {paginatedItems.map((hero) => (
                    <Link 
                        to={`/superheroes/${hero.id}`}
                        key={hero.id} 
                        className="relative bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 hover:shadow-sm transition-shadow duration-200"
                    >
                        <SuperheroesListItem hero={hero}/>
                    </Link>
                ))}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
        </div>
    )
}

export default SuperheroesList