import React from 'react';

const FormInput = ({
    label,
    type = 'text',
    placeholder,
    value,
    onInput,
    rows,
    min, // for number inputs
    step, // for number inputs
    currency, // for currency inputs
    ...rest
}) => {
    return (
        <div className="flex flex-col gap-4">
            <label className="text-lg font-bold">{label}</label>
            {type === 'textarea' ? (
                <textarea
                    className="border-2 border-black p-2 rounded-lg text-md"
                    placeholder={placeholder}
                    value={value}
                    onInput={onInput}
                    rows={rows}
                    {...rest}
                />
            ) : (
                <div className={currency ? 'relative flex items-center' : ''}>
                    {currency && <span className="absolute left-3">{currency}</span>}
                    <input
                        type={type}
                        className={`border-2 border-black p-2 rounded-lg text-md ${currency ? 'pl-10 pr-3 py-2' : ''
                            }`}
                        placeholder={placeholder}
                        value={value}
                        onInput={onInput}
                        min={min}
                        step={step}
                        {...rest}
                    />
                </div>
            )}
        </div>
    );
};

export default FormInput;