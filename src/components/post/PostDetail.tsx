import type { Post } from '@/types/types';
import Link from 'next/link';

interface PostDetailProps {
  post: Post;
}

const PostDetail = ({ post }: PostDetailProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="my-8 text-pretty">{post.content}</p>
      <div className="flex justify-start gap-8 mb-4">
        <p className="text-gray-100/50">{post.author}</p>
        <p className="text-gray-100/50">{post.date}</p>
      </div>
      {/* && 연산자를 사용하여 post.tags가 존재하는 경우에만 태그 목록을 출력합니다. */}
      <ul className="flex justify-start gap-8 list-disc list-inside">
        {post.tags && post.tags.map((tag, index) => <li key={index}>{tag}</li>)}
      </ul>
      {/* <div className="flex justify-center gap-6 mt-10">
        <Link href={`/post/${post.id}`}>
          <button className="block p-2 bg-yellow-500 rounded ">게시글 수정</button>
        </Link>
      </div> */}
    </div>
  );
};

export default PostDetail;
