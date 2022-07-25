import React from "react";

export default function Button({
    type = "submit",
    className = "",
    processing,
    children,
}) {
    return (
        <button
            type={type}
            className={`btn ${className} ${processing && "opacity-30"}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
