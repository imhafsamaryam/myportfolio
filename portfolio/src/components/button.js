import React from 'react'

const Button = ({ text, bgColor, textColor, onTap }) => {
    return (
        <div style={{
            backgroundColor: bgColor,
            border: "1px solid #FFFFFF",
            borderRadius: "10px",
            width: "6rem",
            color: textColor,
            padding: "8px",
            fontSize: "12px",
            textAlign: "center",
            fontWeight: "600"
        }}
            onClick={onTap}
        >
            {text}
        </div>
    )
}

export default Button
