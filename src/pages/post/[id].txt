import PostDetail from '@/components/post/PostDetail';
import { posts } from '@/data/posts';
import type { Post } from '@/types/types'; // Post 타입 불러오기
import { GetStaticProps, GetStaticPaths } from 'next';

interface PostProps {
  post: Post;
}

// getStaticPaths 함수를 사용하여 동적 경로를 생성합니다.
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false, // fallback: false로 설정하여 존재하지 않는 경로는 404 페이지로 이동합니다.
  };
};

// getStaticProps 함수를 사용하여 각 동적 경로에 필요한 데이터를 전달합니다.
export const getStaticProps: GetStaticProps<PostProps, { id: string }> = async ({ params }) => {
  // params.id 값을 사용하여 해당 포스트를 찾습니다.
  const post = posts.find((post) => post.id === Number(params?.id));
  // params.id는 문자열이므로 Number로 변환합니다.
  // params가 undefined인 경우를 대비하여 옵셔널 체이닝 연산자(?.)를 사용해 에러를 방지합니다.

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    // revalidate: 10,
  };
};

const Post = ({ post }: PostProps) => {
  return (
    <div>
      <h1>게시글 상세</h1>
      <PostDetail post={post} />
    </div>
  );
};

export default Post;
