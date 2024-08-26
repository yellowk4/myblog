import type { Post } from '@/types/types';

interface PostDetailProps {
  post: Post;
}

const PostDetail = ({ post }: PostDetailProps) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.author}</p>
      <p>{post.date}</p>
      {/* && 연산자를 사용하여 post.tags가 존재하는 경우에만 태그 목록을 출력합니다. */}
      <ul>{post.tags && post.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
    </div>
  );
};

export default PostDetail;
