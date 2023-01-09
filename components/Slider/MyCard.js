import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Styles from './slider.module.css';
function MyCard(props) {
    return (
        <div className={Styles.myCard}>
            <div className="flex justify-center">
                <Image src={props.img} alt="img" width={200} height={200} />
            </div>
            <Link href="#"><p className="text-center pt-4">{props.title}</p></Link>
        </div>
    );
}

export default MyCard;