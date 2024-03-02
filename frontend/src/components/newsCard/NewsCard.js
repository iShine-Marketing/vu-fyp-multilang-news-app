import React from 'react'

export default function NewsCard({ title, summary, imageUrl }) {
    return (
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <img className="rounded-t-lg" src={imageUrl} alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
          <p className="mb-3 font-normal text-gray-700">{summary}</p>
        </div>
      </div>
    );
  }
  
