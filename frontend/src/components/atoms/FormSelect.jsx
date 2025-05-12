import React from 'react';

const FormSelect = ({
    label,
    options,
    value,
    onChange,
    placeholder = 'Select an option',
    ...rest
}) => {
    return (
        <div className="flex flex-col gap-4">
            <label className="text-lg font-bold">{label}</label>
            <select
                value={value}
                onChange={onChange}
                className="py-2 pl-3 pr-20 bg-white w-fit border-2 border-black rounded-lg"
                {...rest}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FormSelect;