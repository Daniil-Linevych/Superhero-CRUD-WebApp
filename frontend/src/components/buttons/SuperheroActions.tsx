import { Link } from "react-router-dom"
import { useState } from "react"
import { DeleteConfirmationModal} from "../modals/DeleteConfirmationModal"

interface SuperheroActionsProps {
  heroId: number | string
  onDelete: () => void
}

const SuperheroActions = ({ heroId, onDelete }: SuperheroActionsProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const openDeleteModal = () => setIsDeleteModalOpen(true)
  const closeDeleteModal = () => setIsDeleteModalOpen(false)

  const handleConfirmDelete = () => {
    onDelete()
    closeDeleteModal()
  }

  return (
    <>
      <div className="flex justify-end mt-4">
        <div className="flex gap-1">
          <Link
            to={`/superheroes/${heroId}/edit`}
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none"
          >
            Edit
          </Link>
          <button
            onClick={openDeleteModal}
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
          >
            Delete
          </button>
        </div>
      </div>

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleConfirmDelete}
        title="Confirm Superhero Deletion"
        message="Are you sure you want to delete this superhero? All their data will be permanently removed."
      />

    </>
  )
}

export default SuperheroActions