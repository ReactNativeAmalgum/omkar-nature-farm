import React, { useState } from 'react';
import omkarNature from "../Json/JsonDaata";
import { useLayoutEffect } from 'react'
import { Image } from 'antd';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
function GalleryP() {
  const [items, setItems] = useState(omkarNature);
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  const filterItems = (category) => {
    if (category === 'All') {
      setItems(omkarNature);
    } else {
      const updatedItems = omkarNature.filter((item) => item.category === category);
      setItems(updatedItems);
    }
  };

  return (
    <>
      <div className="homeScroll4">
        <div className="homeSection" id="home">
          <div className="homeText">
            <h2 className='special-h2' style={{ color: "#fff" }}>Gallery</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="myGallery">
          <div className="titleSection">
            <h1>Private Farmhouse in Wada</h1>
          </div>
          <div className="filters filter-button-group">
            <ul>
              <li className="active">
                <a href="#all" onClick={() => filterItems('All')}>All</a>
              </li>
              <li>
                <a href="#room" onClick={() => filterItems('room')}>Room</a>
              </li>
              <li>
                <a href="#swimmingpool" onClick={() => filterItems('Swimmingpool')}>Swimming Pool</a>
              </li>
              <li>
                <a href="#events" onClick={() => filterItems('events')}>Events</a>
              </li>
              <li>
                <a href="#activities" onClick={() => filterItems('activity')}>Activities</a>
              </li>
            </ul>
          </div>

          {/* <Box> */}
            <ImageList variant="masonry" cols={4} gap={8}>
              {items.map((item) => (
                <ImageListItem key={item.img}>
                  <Image
                    // srcSet={`${item.imageUr1}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={item.imageUr1}
                    style={{width:'300px', height:'300px'}}
                    // width={500}
                    // height={500}
                    alt={'Private Farmhouse in Wada'}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          {/* </Box> */}
        </section>
      </div>
    </>
  );
}

export default GalleryP;
