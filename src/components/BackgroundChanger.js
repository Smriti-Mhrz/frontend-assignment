import React,{useState,useEffect}from 'react'

export const BackgroundChanger = () => {

    const backgroundImages = [
        'url("../assets/images/wallpaper-one.jpg")',
        'url("../assets/images/wallpaper-two.jpg")',
        'url("../assets/images/wallpaper-three.jpg")'
    ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change the background image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div style={{width:'100vw'}}>
        <img src={backgroundImages[currentImageIndex]} alt='background image'/>
    </div>
  );
};

    
  



