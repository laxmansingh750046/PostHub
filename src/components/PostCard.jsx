import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
  <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300">
        <div className="w-full aspect-video flex items-center justify-center overflow-hidden rounded-xl mb-4 bg-white">
          <img
            src={appwriteService.getFileView(featuredImage)}
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">{title}</h2>
      </div>
   </Link>


  )
}

export default PostCard
