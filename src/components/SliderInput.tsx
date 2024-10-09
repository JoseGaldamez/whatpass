import React from 'react'

export const SliderInput = ({ length, setLength, generatePassword }: { length: number, setLength: (length: number) => void, generatePassword: () => void }) => {
    return (
        <p className='text-center my-5'>
            <input
                className='mr-2 w-full'
                value={length}
                onChange={(e) => {
                    const newLength = Number(e.target.value)
                    setLength(newLength);
                    generatePassword();
                }}
                type="range"
                min={4}
                max={30}
            />
            <label className='text-slate-400'>Length: {length}</label>
        </p>
    )
}
