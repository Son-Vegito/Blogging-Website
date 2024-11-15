function LabelledButton({ title, onClick }: { title: string, onClick: () => void }) {
    return (
        <div>
            <button type="button" onClick={onClick} className="mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-72">
                {title}
            </button>
        </div>
    )
}

export default LabelledButton