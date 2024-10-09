'use client'
import { useEffect, useState } from 'react'
import { InputPass } from './InputPass';
import { AlertMessage } from './AlertMessage';
import { SwitchInput } from './SwitchInput';
import { SliderInput } from './SliderInput';

export const PasswordGenerator = () => {

    const [password, setPassword] = useState('');

    const [length, setLength] = useState(10);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        generatePassword();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);


    const generatePassword = () => {
        let charset = '';

        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) charset += '0123456789';
        if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        setPassword(newPassword);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        setShowAlert(true);
    };

    return (
        <>
            <div className='rounded-lg p-5 bg-white shadow-md mt-10 min-w-80 sm:min-w-96'>
                <InputPass password={password} copyToClipboard={copyToClipboard} />

                <SliderInput length={length} setLength={setLength} generatePassword={generatePassword} />

                <div className='flex items-center justify-between'>
                    <SwitchInput text="Mayúsculas" checked={includeUppercase} onChange={setIncludeUppercase} />
                    <SwitchInput text="Minúsculas" checked={includeLowercase} onChange={setIncludeLowercase} />
                </div>

                <div className='flex items-center justify-between'>

                    <SwitchInput text="Números" checked={includeNumbers} onChange={setIncludeNumbers} />
                    <SwitchInput text="Símbolos" checked={includeSymbols} onChange={setIncludeSymbols} />

                </div>

                <p className='mt-10'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full' onClick={generatePassword}>
                        Generate new password
                    </button>
                </p>
            </div>

            {
                showAlert && <AlertMessage closeAlert={() => setShowAlert(false)} />
            }
        </>
    )
}
