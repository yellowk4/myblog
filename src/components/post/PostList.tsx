import { posts } from '@/data/posts';
import PostItem from './PostItem';

const PostList = () => {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} /> // PostItem 컴포넌트에 post 데이터를 전달
      ))}
    </div>
  );
};

export default PostList;
