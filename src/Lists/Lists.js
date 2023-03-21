import React from 'react'
import { useState } from "react";
import "../Styles/liststyle.css";

const Lists = () => {

const [blogs, setBlogs]=useState([
  
  {title:'My Dairy', body:'lorem ipsum....', author:'mario', id:1},
  {title:'My Dairy', body:'lorem ipsum....', author:'lugi', id:2},
  {title:'My Dairy', body:'lorem ipsum....', author:'suren', id:3}
  
]);


const [favourites, setFavourites]=useState([
  { fruit:'Apple', color:'Blue', place:'banglore', index:1},
  { fruit:'Apple', color:'Blue', place:'banglore', index:1},
  { fruit:'Apple', color:'Blue', place:'banglore', index:2}
])






  return (
    <>
    
    <h1 style={{textAlign:'center'}}>Lists</h1>
    {blogs.map((blog)=> (
      <div className="blog-preview" key={blog.id}>
        <h2>{blog.title}</h2>
        <p>Written By {blog.author}</p>
      
      </div>
    ))}

 <h1 style={{textAlign:'center'}}>My Favourite Lists</h1>

 {favourites.map((favourite) =>(
 
  <div className="blog-preview1" key={favourite.index}>
    <h2>My Favourite Fruit is {favourite.fruit}</h2>
    <h2>My Favourite Color is {favourite.color}</h2>
    <h2>My Favourite Place is {favourite.place}</h2>

</div>

)) }
    
    </>
  )
}

export default Lists;