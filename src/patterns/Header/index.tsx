import React from 'react'

interface Props {
    children: ChildNode
}

const Header: React.FC = ({ children }: Props) => {
    return (
        <header>
            {children}
        </header>
    )
}

export default Header
