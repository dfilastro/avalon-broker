import { AuthorAvatar } from '@/app/components/AuthorAvatar';
import PostsList from '@/app/components/PostsList';
import { Params } from '@/lib/types';

export const revalidate = 3600; // 1 hour

export async function generateStaticParams() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

  return users.map((user: { id: number }) => ({
    id: user.id.toString(),
  }));
}

export default async function UserPage(props: { params: Promise<Params> }) {
  const params = await props.params;

  const [user, posts] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).then((res) => res.json()),
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`).then((res) =>
      res.json()
    ),
  ]);

  if (!user) throw new Error('User not found');
  if (!posts) throw new Error('Posts not found');

  const userInfo = [
    {
      label: 'Phone',
      value: user.phone,
    },
    {
      label: 'Website',
      value: user.website,
    },
    {
      label: 'Catchphrase',
      value: user.company.catchPhrase,
    },
    {
      label: 'Company',
      value: user.company.name,
    },
  ];

  return (
    <div className='flex flex-col gap-6 min-h-screen w-full p-4 sm:p-10 items-center max-w-[1500px] mx-auto'>
      <AuthorAvatar user={user} post={posts} large />

      <div className='flex flex-col gap-2 p-4 sm:p-10 border-[1px] border-gray-200 bg-white rounded-2xl w-full'>
        {userInfo.map((info) => (
          <div key={info.label} className='text-gray-500'>
            <p className='font-bold text-[#1CC68E]'>{info.label}</p>
            <p>{info.value}</p>
          </div>
        ))}
      </div>

      <h3 className='text-gray-500 mr-auto'>{user.name.split(' ')[0]}&apos;s posts</h3>
      <PostsList initialPosts={posts} />
    </div>
  );
}
