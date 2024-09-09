import PostDetail from '@/components/post/PostDetail';
// import { posts } from '@/data/posts';
import type { Post } from '@/types/types'; // Post 타입 불러오기

import { db } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const docRef = doc(db, 'posts', id.toString());
        const data = await getDoc(docRef);
        const postData = data.data();
        if (postData) {
          setPost(postData as Post);
        } else {
          console.error('No such document!');
        }
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div>
      <h1>게시글 상세</h1>
      {post ? <PostDetail post={post} /> : <p>Loading...</p>}
    </div>
  );
};

export default Post;
