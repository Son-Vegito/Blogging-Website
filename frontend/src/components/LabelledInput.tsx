import { ChangeEvent } from "react"

function LabelledInput({ label, placeholder, onChange, type }: { label: string, placeholder: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void, type: string }) {

    return (
        <div>
            <label className="block mb-2 text-sm font-bold text-black pt-4">
                {label}
            </label>
            <input type={type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5" placeholder={placeholder} onChange={onChange} />
        </div>
    )

}

export default LabelledInput