import React, { useState } from 'react';
import { addDocument } from '@/firebase/fireStore';
import Link from 'next/link';

const AddPostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 입력된 데이터 유효성 검사
    if (!title || !content) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    // Firebase에 데이터 추가
    try {
      await addDocument('posts', { title, content });
      alert('새 게시물이 추가되었습니다.');
      setTitle(''); // 입력된 제목 데이터 초기화
      setContent(''); // 입력된 본문 데이터 초기화
    } catch (error) {
      console.error('게시물 추가 중 오류 발생:', error);
      alert('게시물 추가에 실패했습니다.');
    }
  };

  return (
    <div>
      <h2>게시물 추가</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex w-full mb-8">
          <label htmlFor="title" className="min-w-[100px] mt-[8px]">
            <span className="text-red-500 required-dot">*</span>
            제목:
          </label>
          <input
            id="title"
            type="text"
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
            추가하기
          </button>
          <Link href="/post">
            <button type="submit" className="p-2  bg-gray-500 rounded ">
              목록으로
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddPostPage;
