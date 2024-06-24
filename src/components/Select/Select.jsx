import React from "react";

const Select = ({options, defaultValue, value, onChange}) => {

    return (
        <>
            <select 
                style={{marginTop: '15px'}}
                value={value}
                onChange={event => onChange(event.target.value)}

            >
                <option value="value" disabled selected>{defaultValue}</option>
                {options.map((option) => {
                    return <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                })}
                
            </select>
        </>
    );
}

export default Select;