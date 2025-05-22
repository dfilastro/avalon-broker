import Link from 'next/link';
import Image from 'next/image';
import { AuthorAvatarProps } from '@/lib/types';

export const AuthorAvatar = ({ user, post, large }: AuthorAvatarProps) => {
  const Title = large ? 'h1' : 'h3';
  const Email = large ? 'h3' : 'p';

  return (
    <Link
      href={`/user/${user.id}`}
      className='flex gap-4 items-center justify-center cursor-pointer hover:scale-[1.01] transition-all duration-300'
    >
      <div
        className={`relative ${
          large ? 'h-24 sm:h-36' : 'h-12 sm:h-20'
        } aspect-square rounded-full overflow-hidden`}
      >
        <Image
          fill
          objectFit='cover'
          src={`https://avatar.iran.liara.run/public/${user.id}`}
          alt={Array.isArray(post) ? user.name : post.title}
        />
      </div>
      <div className='flex flex-col text-left'>
        <Title className='font-bold'>{user.name}</Title>
        <Email className='lowercase'>{user.email}</Email>
        {!large && (
          <p className='subtitle text-gray-500'>More posts from {user.name.split(' ')[0]}</p>
        )}
      </div>
    </Link>
  );
};
