import React from 'react';
import FriendsProfile from '../components/common/FriendsProfile';
import ChatBar from '../components/common/navBar/ChatBar';
import TextAndBackBar from '../components/common/navBar/TextAndBackBar';
import ShowCase from '../components/common/ShowCase';

const chatData = [
  {
    id: 1,
    name: '동네친구',
    profile: '',
    title: '프로틴 바/ 다크 초코씨솔트 프로틴 바/ 다크 초코씨솔트 프로틴 바/ 다크 초코씨솔트',
    postTimestamp: '2023년 06월 25일 오전 12:20',
    people: 5,
    unread: 10,
    me: true,
    messages: [
      {
        message: 'TODO님, 근처에서 다양한 물품들이 매일 올라오고 있어요',
        timestamp: '2023년 06월 25일 오전 12:20',
      },
      {
        message: '확인해보세요',
        timestamp: '2023년 06월 25일 오전 12:21',
      },
    ],
  },
  {
    id: 2,
    name: '친구2',
    profile: '',
    title: '프로틴 바/ 다크 초코씨솔트 프로틴 바/ 다크 초코씨솔트 프로틴 바/ 다크 초코씨솔트',
    people: 5,
    unread: 10,
    me: false,
    messages: [
      {
        message: 'TODO님, 근처에서 다양한 물품들이 매일 올라오고 있어요',
        timestamp: '2023년 06월 25일 오전 12:20',
      },
      {
        message: '확인해보세요',
        timestamp: '2023년 06월 25일 오전 12:21',
      },
    ],
  },
  {
    id: 3,
    name: '친구3',
    profile: '',
    title: '프로틴 바/ 다크 초코씨솔트 프로틴 바/ 다크 초코씨솔트 프로틴 바/ 다크 초코씨솔트',
    people: 5,
    unread: 10,
    me: false,
    messages: [
      {
        message: 'TODO님, 근처에서 다양한 물품들이 매일 올라오고 있어요',
        timestamp: '2023년 06월 25일 오전 12:20',
      },
      {
        message: '확인해보세요',
        timestamp: '2023년 06월 25일 오전 12:21',
      },
    ],
  },
  {
    id: 4,
    name: '친구1',
    profile: '',
    title: '프로틴 바/ 다크 초코씨솔트 프로틴 바/ 다크 초코씨솔트 프로틴 바/ 다크 초코씨솔트',
    people: 5,
    unread: 10,
    me: false,
    messages: [
      {
        message: 'TODO님, 근처에서 다양한 물품들이 매일 올라오고 있어요',
        timestamp: '2023년 06월 25일 오전 12:20',
      },
      {
        message: '확인해보세요',
        timestamp: '2023년 06월 25일 오전 12:21',
      },
    ],
  },
  {
    id: 5,
    name: '친구4',
    profile: '',
    title: '프로틴 바/ 다크 초코씨솔트 프로틴 바/ 다크 초코씨솔트 프로틴 바/ 다크 초코씨솔트',
    people: 5,
    unread: 10,
    me: false,
    messages: [
      {
        message: 'TODO님, 근처에서 다양한 물품들이 매일 올라오고 있어요',
        timestamp: '2023년 06월 25일 오전 12:20',
      },
      {
        message: '확인해보세요',
        timestamp: '2023년 06월 25일 오전 12:21',
      },
    ],
  },
];

const ChatPage = () => {
  return (
    <>
      <TextAndBackBar title={chatData[0].title} />
      <ShowCase
        contents={
          <>
            <div className="sticky top-0 bg-white bg-opacity-90">
              <h3 className="pt-[23px] pb-[4px] text-[16px] leading-[20px] z-10">파티구성원</h3>
              <FriendsProfile />
            </div>
            <div className="w-[96px] h-[20px] mt-[20px] mb-[25px] mx-auto bg-gray rounded-[37px]">
              <p className="text-deepGray text-[10px] leading-[20px] text-center">
                {chatData[0].postTimestamp.substring(0, 13)}
              </p>
            </div>
            <div className="flex flex-column flex-wrap w-full">
              {chatData.map(chat => (
                <div key={chat.id} className={`flex ${chat.me ? 'flex-row-reverse w-full' : ''}`}>
                  {!chat.me && (
                    <div className="w-[45px] h-[45px] rounded-full bg-deepGray overflow-hidden">
                      <img src={chat.profile} alt="profile" className="w-full h-full" />
                    </div>
                  )}
                  <div className="ml-[12px]">
                    {!chat.me && <p className="text-[13px] leading-[20px] mb-[8px]">{chat.name}</p>}
                    {chat.messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex items-end mb-[10px] ${chat.me ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div
                          key={index}
                          className={`
                        ${chat.me ? 'bg-deepGray rounded-tl-[20px]' : 'bg-mainColor rounded-tr-[20px]'}
                        max-w-[208px] w-fit text-white text-[13px] leading-[20px] py-[7px] px-[10px] rounded-b-[20px]`}>
                          <p>{msg.message}</p>
                        </div>
                        {/* 추후 메세지 보낸 시간이 1분 지나면 보여지도록 설정 */}
                        <div
                          className={`text-[10px] text-[#6b6b6b] ${
                            chat.me ? 'text-right mr-[10px]' : 'text-left ml-[10px]'
                          }`}>
                          {msg.timestamp.substring(14, 22)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      />
      <ChatBar />
    </>
  );
};

export default ChatPage;
