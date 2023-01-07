import React, { useState } from 'react'

const MenuItems = ({ singleItem }) => {
    const [showChildren, setShowChildren] = useState(false);
    const toggleMenu = () => setShowChildren(!showChildren);
    return (
        <div className='menu-item'>
            <div onClick={toggleMenu} className='label'>
                <span>{singleItem?.label ?? ''}</span>
                {
                    singleItem?.children ? <span style={{ height: '10px' }}>
                        {
                            showChildren ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ height: '14px' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                            </svg> :

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="" style={{ height: '14px' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                </svg>

                        }

                    </span> : ''
                }

            </div>
            {
                showChildren ? <div className='' style={{ marginLeft: "10px" }}>
                    {
                        // eslint-disable-next-line react/jsx-key
                        singleItem?.children?.map((item) => <MenuItems singleItem={item} />)
                    }
                </div> : ''
            }
            {/* { JSON.stringify(singleItem) } */}
        </div>
    )
}

export default MenuItems;