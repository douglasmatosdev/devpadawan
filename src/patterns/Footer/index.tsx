import React from 'react'

interface Props {
    children: ChildNode
}

const Footer: React.FC = ({ children }: Props) => {
    return (
        <footer>
            {children}
        </footer>
    )
}

export default Footer
