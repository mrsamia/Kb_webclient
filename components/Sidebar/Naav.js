import React from 'react'
import MenuItems from './MenuItems';

const Naav = () => {
    const menuTree = [
        {
            label: "Home",
            icon: "home",
            children: [
                {
                    label: "level 1.1",
                    children: [
                        {
                            label: "level 1.1.1",
                            children: [
                                {
                                    label: "level 1.1.1.1"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "level 1.2"
                }
            ]
        },
        {
            label: "Dashboard",
            icon: "dashboard",
            children: [
                {
                    label: "level 2.1",
                },
                {
                    label: "level 2.2"
                },
                {
                    label: "level 2.3"
                }
            ]
        },
        {
            label: "Settings",
            icon: "settings"
        }
    ]
    return (
        <div>
            {
                // eslint-disable-next-line react/jsx-key
                menuTree.map((singleItem)=> <MenuItems singleItem={singleItem}/>)
            }
        </div>
    )
}

export default Naav;