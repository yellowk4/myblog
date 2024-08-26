// src/types/types.ts

export type LayoutProps = {
  children: React.ReactNode;
};

export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string; // 날짜는 ISO 형식 (예: "2024-01-01")으로 나타냅니다.
  tags?: string[]; // 태그는 선택적으로 배열 형태로 나타냅니다.
  // undefined일 수 있기 때문에 옵셔널 체이닝 연산자(?.)를 사용합니다.
}
