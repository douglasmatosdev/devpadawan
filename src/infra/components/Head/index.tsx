import React from 'react'
import NextHead from 'next/head'

interface Props {
    title?: string
}

const Head: React.FC<Props> = ({ title }: Props) => {
    return (
        <NextHead>
            <title>
                {title}
            </title>
        </NextHead>
    )
}

export default Head
