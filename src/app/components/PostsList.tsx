'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { calculateReadingTime } from '@/lib/utils';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsListProps {
  initialPosts: Post[];
}

export default function PostsList({ initialPosts }: PostsListProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts.slice(0, 8));
  const [page, setPage] = useState(1);
  const postsPerPage = 8;

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
    <div className='flex flex-col'>
      <div className='flex flex-col sm:flex-row flex-wrap gap-6 justify-center'>
        {posts.map((post) => {
          const readingTime = calculateReadingTime(post.body);
          return (
            <Link
              key={`post-${post.id}`}
              href={`/post/${post.id}`}
              className='w-full sm:w-1/5 capitalize flex flex-col justify-between hover:bg-[#1CC68E] border-[1px] border-[#1CC68E] border-solid hover:text-white rounded-2xl p-4 h-auto min-h-48 sm:min-h-64 hover:scale-105 transition-all duration-300 cursor-pointer'
            >
              <div className='flex flex-col gap-2'>
                <h3 className=''>{post.title}</h3>
                <p>{post.body.slice(0, 50)}</p>
              </div>
              <p className='text-sm'>{readingTime} min read</p>
            </Link>
          );
        })}
      </div>
      <div id='load-more-trigger' className='h-10 w-full' />
    </div>
  );
}
