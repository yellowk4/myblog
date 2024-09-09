// import { posts } from '@/data/posts';
// import PostItem from './PostItem';
import PostEdit from './PostEdit';
import React, { useEffect, useState } from 'react';
import { db } from '@/firebase/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { deleteDocument } from '@/firebase/fireStore';
import classes from '@/styles/Post.module.css';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid';

interface Post {
  id: string;
  title: string;
  content: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);

  // Firestore에서 모든 글을 가져와 상태로 설정
  const fetchPosts = async () => {
    const querySnapshot = await getDocs(query(collection(db, 'posts'), orderBy('title')));
    const postsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      content: doc.data().content,
    }));
    setPosts(postsData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // 글 삭제
  const handleDelete = async (id: string) => {
    const confirmed = window.confirm('정말로 이 게시물을 삭제하시겠습니까?');
    if (!confirmed) {
      return;
    }

    await deleteDocument('posts', id);
    fetchPosts(); // 목록을 다시 불러옵니다.
  };

  // 글 편집 완료
  const handleUpdate = () => {
    setEditingPostId(null);
    fetchPosts(); // 업데이트된 목록을 불러옵니다.
  };

  return (
    <div>
      {editingPostId ? (
        <PostEdit
          id={editingPostId}
          initialTitle={posts.find((post) => post.id === editingPostId)?.title ?? ''}
          initialContent={posts.find((post) => post.id === editingPostId)?.content ?? ''}
          onCancel={() => setEditingPostId(null)}
          onUpdate={handleUpdate}
        />
      ) : (
        <>
          {posts.length > 0 ? (
            <>
              <h2>게시글 리스트</h2>
              <ul>
                {posts.map((post) => (
                  <li key={post.id} className={classes.post}>
                    <Link href={`/post/${post.id}`}>
                      <h3 className={classes.postTitle}>{post.title}</h3>
                    </Link>
                    <p className={classes.postContent}>{post.content}</p>
                    {/* <p className={classes.postDate}>{post.date}</p> */}
                    <div className="flex gap-6 my-5">
                      <Button variant="destructive" onClick={() => setEditingPostId(post.id)}>
                        <PencilSquareIcon className="mr-1 h-4 w-4" />
                        Edit
                      </Button>

                      <Button variant="secondary" onClick={() => handleDelete(post.id)}>
                        <TrashIcon className="mr-1 h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center gap-6 mt-10">
                <Link href="/new">
                  <button className="block p-2 bg-green-500 rounded ">게시글 추가</button>
                </Link>
              </div>
            </>
          ) : (
            <p>게시물을 찾을 수 없습니다.</p>
          )}
        </>
      )}
    </div>
  );
};

export default PostList;
