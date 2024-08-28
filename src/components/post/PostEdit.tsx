import React, { useState } from 'react';
import { updateDocument } from '@/firebase/fireStore';
import Link from 'next/link';

interface PostEditProps {
  id: string;
  initialTitle: string;
  initialContent: string;
  onCancel: () => void;
  onUpdate: () => void;
}

const PostEdit: React.FC<PostEditProps> = ({
  id,
  initialTitle,
  initialContent,
  onCancel,
  onUpdate,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateDocument('posts', id, { title, content });
    onUpdate();
  };

  return (
    <div>
      <h2>게시글 수정</h2>
      <form onSubmit={handleUpdate}>
        <div className="flex w-full mb-8">
          <label htmlFor="title" className="min-w-[100px] mt-[8px]">
            <span className="text-red-500 required-dot">*</span>
            제목:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border shadow-sm border-slate-300 rounded-md text-zinc-900"
          />
        </div>
        <div className="flex w-full mb-8">
          <label htmlFor="content" className="min-w-[100px] mt-[8px]">
            <span className="text-red-500 required-dot">*</span>
            내용:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-80 p-2 border shadow-sm border-slate-300 rounded-md text-zinc-900"
          />
        </div>

        <div className="flex justify-center mt-10 gap-8">
          <button type="submit" className="p-2  bg-green-500 rounded ">
            수정하기
          </button>
          <Link href="/post">
            <button type="button" onClick={onCancel} className="p-2  bg-gray-500 rounded ">
              취소하기
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PostEdit;
