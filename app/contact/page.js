



import Script from 'next/script'
import React from 'react'

export default function Contact() {
    return (
        <div>
            <Script strategy='lazyOnload'>
                {`
                    alert("welcome to contacts")
                `}
            </Script>

            this is contact.......
        </div>
    )
}




export const metadata = {                           //  we can add this to give specific title and description for every individual page.....
    title: "Contacts - Hunting Coder",
    description: "How you can reach us.",
}



