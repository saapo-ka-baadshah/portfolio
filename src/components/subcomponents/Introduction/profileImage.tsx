import React from 'react'
import profile_image from '../../../images/main_pic_round.jpg'

export default function ProfileImage() {
    return (
        <div>
            <img
                src={profile_image}
                alt="Profile-Image"
                className="rounded-full"
            />
        </div>
    )
}
