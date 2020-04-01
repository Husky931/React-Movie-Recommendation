import React from 'react'

import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons' 
import { faFileImage } from  "@fortawesome/free-regular-svg-icons"

import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

export default function BottomContainer() {

    const facebookIcon = <FontAwesomeIcon icon={faFacebook} size='lg' className='iconClassName' />
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} className='iconClassName' />
    const pinterestIcon = <FontAwesomeIcon icon={faPinterest} className='iconClassName' />
    const fileImage = <FontAwesomeIcon icon={faFileImage} spin className='iconClassName' />

    const clickDiv = () => {
        
            domtoimage.toBlob(document.getElementById('mainContainer'))
            .then(function(blob) {
                window.saveAs(blob, "output.png")
                console.log(blob)
            })
        }

    return(
       <>
        <div className='bottomText'>Share your movie picks with your friends on {facebookIcon} {instagramIcon} {pinterestIcon}</div>
        <div className='bottomText' onClick={() => clickDiv()}> <span className='downloadAsImage'>Download as image and sent to a friend {fileImage} </span></div>
       </>
    )
}