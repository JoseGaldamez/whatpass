import React from 'react'

export const SwitchInput = ({ text, checked, onChange }: { text: string, checked: boolean, onChange: (e: boolean) => void }) => {
    return (
        <label className="flex items-center cursor-pointer mt-3 justify-between">
            <span className="ms-3 text-sm font-medium text-gray-900 mr-3">{text}</span>
            <input checked={checked} type="checkbox" onChange={e => {
                onChange(e.target.checked)
            }} className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
    )
}
