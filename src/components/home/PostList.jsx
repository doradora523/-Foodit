import React from 'react';
import Title from './Title';

const PostList = () => {
  const postTitle = ['실시간 인기글', '방금 올라온 글', '나를 위한 추천'];
  const posts = [
    {
      id: 1,
      image: '',
      title: '프로틴 바/ 다크 초코씨솔트&카라멜넛, 마이프로마이프로마이프로',
      address: '서울시 서초구 서초대로',
      price: '20,000원',
    },
    {
      id: 2,
      image: '',
      title: '프로틴 바/ 다크 초코씨솔트&카라멜넛, 마이프로마이프로마이프로',
      address: '서울시 서초구 서초대로',
      price: '20,000원',
    },
    {
      id: 3,
      image: '',
      title: '프로틴 바/ 다크 초코씨솔트&카라멜넛, 마이프로마이프로마이프로',
      address: '서울시 서초구 서초대로',
      price: '20,000원',
    },
    {
      id: 4,
      image: '',
      title: '프로틴 바/ 다크 초코씨솔트&카라멜넛, 마이프로마이프로마이프로',
      address: '서울시 서초구 서초대로',
      price: '20,000원',
    },
  ];

  return (
    <div>
      {postTitle.map((title) => (
        <div key={title}>
          <Title title={title} />
          <ul className="flex">
            {posts.map((post, index) => (
              <li
                key={post.id}
                className={`w-[132px] h-[233px] mb-[25px] ${
                  index === posts.length - 1 ? '' : 'mr-[20px]'
                } cursor-pointer`}
              >
                <div className="w-[132px] h-[132px] bg-gray overflow-hidden">
                  <img className="w-full" src={post.image} alt="" />
                </div>
                <h4 className="w-[132px] text-[13px] line-clamp-2 font-semibold whitespace-normal overflow-hidden leading-[20px] mt-[7px]">
                  {post.title}
                </h4>
                <p className="text-[10px] text-[#6b6b6b] overflow-hidden leading-[20px]">{post.address}</p>
                <h3 className="text-[16px] font-semibold leading-[30px]">{post.price}</h3>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PostList;
