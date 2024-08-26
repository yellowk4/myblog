import React from 'react';
import type { Post } from '@/types/types';
import Link from 'next/link';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className="mb-16">
      <Link
        href={`/post/${post.id}`}
        className="text-[24px] font-bold hover:cursor-pointer underline "
      >
        {post.title}
      </Link>
      {/* <p
        style={{ whiteSpace: 'nowrap', width: '80%', overflow: 'hidden', textOverflow: 'ellipsis' }}
      > */}
      <p className="text-overflow3">{post.content}</p>
      <p>{post.author}</p>
      <p className="">{post.date}</p>
    </div>
  );
};

export default PostItem;
