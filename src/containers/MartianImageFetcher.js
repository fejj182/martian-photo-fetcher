import React, { useState, useEffect } from 'react'

function MartianImageFetcher(props) {
    const [imgSrc, setImgSrc] = useState(null);
  
            

    useEffect(() => {
    
        console.log('useEffect ran')
      fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${props.date}&api_key=gnesiqnKCJMm8UTYZYi86ZA5RAnrO4TAR9gDstVb`
      )
        .then(res => res.json())
        .then(data => {
          setImgSrc(data.photos[0].img_src);
        });
    }, [props.date, props.name]);
  
    if (!imgSrc) {
        return null;
      } else {
        return <img src={imgSrc} alt="view from mars"/>;
      }
  }

export default MartianImageFetcher