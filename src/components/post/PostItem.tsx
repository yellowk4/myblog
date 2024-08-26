import React from 'react';
import type { Post } from '@/types/types';
import Link from 'next/link';
import classes from '@/styles/Post.module.css';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className={classes.post}>
      <h2>
        <Link href={`/post/${post.id}`}>
          <span className={classes.postTitle}>{post.title}</span>
        </Link>
      </h2>
      {/* <p
        style={{ whiteSpace: 'nowrap', width: '80%', overflow: 'hidden', textOverflow: 'ellipsis' }}
      > */}
      <p className={classes.postContent}>{post.content}</p>
      <p className={classes.postDate}>{post.date}</p>
    </div>
  );
};

export default PostItem;
