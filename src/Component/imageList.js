import React from 'react';
import "./imageList.css";
import ImageListCard from './imageCard';

const ImageList = props => {
const imag= props.images.map((image)=>{
     return <ImageListCard key={image.id} image={image} />

 });
return <div className="image-list">{imag} </div>
};

export default ImageList;