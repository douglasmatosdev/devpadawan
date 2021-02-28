import React from 'react'

interface Props {
    children: ChildNode
}

const Typography: React.FC = ({ children }: Props) => {
    return (
        <p>
            {children}
        </p>
    )
}

export default Typography
