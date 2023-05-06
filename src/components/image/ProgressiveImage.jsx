import { useState, useEffect } from "react";
import ProgressiveImage from "react-progressive-image-loading";

const ProgressiveImg = ({ src, preview, ...props }) => {


    return (
        <div>
            <ProgressiveImage
                preview={preview}
                src={src}
                {...props}
                render={(src, style) => <img src={src} style={props.style || {}} />}
            />
        </div>
    );
};
export default ProgressiveImg;