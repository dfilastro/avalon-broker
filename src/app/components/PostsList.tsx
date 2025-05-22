'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { calculateReadingTime } from '@/lib/utils';
import { Post, PostsListProps } from '@/lib/types';

export default function PostsList({ initialPosts }: PostsListProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts.slice(0, 8));
  const [page, setPage] = useState(1);
  const [filterText, setFilterText] = useState('');
  const postsPerPage = 8;

  // Filter posts based on search text
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(filterText.toLowerCase()) ||
      post.body.toLowerCase().includes(filterText.toLowerCase())
  );

  const clearSearch = () => {
    setFilterText('');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const nextPage = page + 1;
          const start = (nextPage - 1) * postsPerPage;
          const end = start + postsPerPage;
          const newPosts = initialPosts.slice(start, end);

          if (newPosts.length > 0) {
            setPosts((prev) => [...prev, ...newPosts]);
            setPage(nextPage);
          }
        }
      },
      { threshold: 0.1 }
    );

    const loadMoreTrigger = document.getElementById('load-more-trigger');
    if (loadMoreTrigger) {
      observer.observe(loadMoreTrigger);
    }

    return () => {
      if (loadMoreTrigger) {
        observer.unobserve(loadMoreTrigger);
      }
    };
  }, [page, initialPosts]);

  return (
    <div className='flex flex-col gap-6 w-full max-w-[1500px] mx-auto'>
      <div className='w-full mx-auto relative'>
        <input
          type='text'
          placeholder='Search posts...'
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className='w-full px-4 py-2 rounded-lg border border-[#1CC68E] focus:outline-none focus:ring-2 focus:ring-[#1CC68E]'
        />
        {filterText && (
          <button
            onClick={clearSearch}
            className='absolute right-3 top-1/2 -translate-y-1/2 text-[#1CC68E] hover:text-[#169c6e] text-xl font-bold'
            aria-label='Clear search'
          >
            ×
          </button>
        )}
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 gap-6 justify-center w-full'>
        {filteredPosts.length === 0 && (
          <div className='w-full flex justify-center items-center'>
            <p className='w-full text-center text-gray-500'>No posts found</p>
          </div>
        )}

        {Array.isArray(filteredPosts) &&
          filteredPosts.length > 0 &&
          filteredPosts.map((post) => {
            const readingTime = calculateReadingTime(post.body);
            return (
              <Link
                key={`post-${post.id}`}
                href={`/post/${post.id}`}
                tabIndex={0}
                className='w-full capitalize flex flex-col justify-between hover:bg-[#1CC68E] border-[1px] border-[#1CC68E] border-solid hover:text-white rounded-2xl p-4 h-auto min-h-48 sm:min-h-64 hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1CC68E] focus:ring-offset-2'
              >
                <div className='text-ellipsis overflow-hidden flex flex-col gap-3'>
                  <h3 className='text-ellipsis overflow-hidden line-clamp-2'>{post.title}</h3>
                  <p className='opacity-80'>{post.body.slice(0, 50)}</p>
                </div>
                <p className='text-sm opacity-70'>{readingTime} min read</p>
              </Link>
            );
          })}
      </div>
      <div id='load-more-trigger' className='h-10 w-full' />
    </div>
  );
}
