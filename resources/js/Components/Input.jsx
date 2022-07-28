import React, { useEffect, useRef } from "react";

export default function Input({
    type = "text",
    name,
    value,
    id,
    className,
    variant,
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    isError,
    defaultValue,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                id={id}
                className={`${className} input-${variant} ${
                    isError && "input-error"
                }`}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
                defaultValue={defaultValue}
            />
        </div>
    );
}
