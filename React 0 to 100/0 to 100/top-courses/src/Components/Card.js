import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Card = ({course, likedCourses, setLikedCourses}) => {
    function clickHandler(){
        if(likedCourses.includes(course.id)){
          setLikedCourses((prev) => prev.filter((cid)=>(cid !== course.id)))
          toast.warning("Like Removed")
        }
        else{
          if(likedCourses.length === 0){
            setLikedCourses([course.id])
          }
          else{
            setLikedCourses((prev) => [...prev, course.id])
          }
          toast.success("Liked Successfully")
        } 
    }
  return (
    <div className='w-1/4 border-2 border-black bg-[#FFC7C7] text-black min-w-[300px] overflow-hidden h-[400px] m-4 rounded shadow-2xl'> 
      <div className='relative'>
        <img src={course.image.url} alt="" />
        <div>
            <button onClick={clickHandler} className='absolute right-2 bottom-1 grid place-items-center h-[40px] w-[40px] rounded-full bg-white'>
                {
                  likedCourses.includes(course.id) ? <FcLike fontSize= "1.5rem" /> : <FcLikePlaceholder fontSize= "1.5rem" />
                }
            </button>
        </div>
      </div>
      <div className='p-2'>
        <p className='font-bold text-xl'>{course.title}</p>
        <p className='text-justify'>{
          course.description.length>250 ? (course.description.substr(0, 250) + "...") : (course.description)
        }</p>
      </div>
    </div>
  )
}

export default Card
