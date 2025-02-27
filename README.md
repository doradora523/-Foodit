
![쿠키즈_최종산출물](https://github.com/doradora523/-Foodit/assets/94670754/706d8311-b903-4765-a169-67f33b40a375)

## Links
[푸딧DEMO](http://223.130.131.215/)

[Figma](https://www.figma.com/file/qDaPGBD7i6fvmwNMzNzAhj/%ED%8F%AC%ED%85%90%EB%8D%B0%EC%9D%B4?type=design&node-id=0-1&mode=design&t=V4JUb95BDgFiVHHp-0)

[Notion](https://free-ceder-650.notion.site/e7a1260d23c84741899e1f8200b863fa)

[푸딧PPT](https://github.com/doradora523/-Foodit/files/11971926/_.pdf)

## Stacks
```
React, Redux-Toolkit, Axios, TailwindCSS, Styled-Components, Crypto-js
```

## Description

- 우리 동네를 설정하여 지역 주민과 더 합리적인 가격으로, 사용자의 필요에 딱 맞는 분량만큼 식재료를 쉐어 구매할 수 있는 웹 어플리케이션 입니다.
- 로그인 / 회원가입 / 로그아웃 / 사용자정보 수정 / 카테고리 즐겨찾기 / 검색 / 글작성 / 채팅 등
- Axios를 사용하여 CRUD 기능 구현

## My Part

- 푸딧(Foodit) 서비스 아이디어 제공
- 로그인, 회원가입, 로그아웃, 닉네임 변경, 비밀번호 변경, 카테고리 즐겨찾기, 랜딩 페이지 기능 구현
- 카테고리 즐겨찾기 API 코드 수정 및 채팅기능 업데이트 예정

## **Development Detail**

- **crypto-js 로 회원 정보 암호화 & 복호화 후 데이터 저장**
    
    사용자의 회원가입 시 위치 설정을 위해 입력한 회원 정보를 crypto-js를 사용하여 암호화한 후 로컬 스토리지에 저장하고, 위치 설정이 완료되면 서버로 전송하는 데이터에 대해 암호화한 정보를 받아와 복호화하여 위치 데이터와 함께 전송하여 회원가입을 완료하는 기능 구현. 또한, 회원가입 완료 페이지에 가입한 회원의 닉네임을 표시하기 위해 닉네임을 로컬 스토리지에 저장함.
    

- **회원가입 / 로그인 / 비밀번호 변경 시 유효성 검사 기능 구현**
    
    정규식 표현을 사용하여 Validation Check를 구현하고, 중복 이메일 체크를 위해 서버로 데이터를 전송하여 동일한 값이 있는지 확인하는 절차도 수행.
    

- **상태전역관리 & 컴포넌트 재사용성 고려**
    
    상태 관리 라이브러리인 Redux-Toolkit을 사용하여 상태 관리 진행. 컴포넌트 분리와 재사용성을 고려하여 공통으로 사용되는 부분은 components 폴더 내의 common 폴더를 생성하여 모듈화하여 사용.
    

- **createAsyncThunk로 비동기 액션 실행**
    
    Redux-Toolkit에서 제공하는 createAsyncThunk를 사용하여 pending, fulfilled, rejected 상태에 따라 비동기 액션을 실행하는 기능 구현.
    

- **useLocation 훅 사용으로 비동기 작업을 수행할 때 경로에 따라 필요한 데이터 요청**
    
    즐겨찾기 등록과 검색페이지에서 카테고리 선택 컴포넌트가 재활용 되면서 현재 경로를 기반으로 해당하는 데이터를 호출할 수 있도록 기능 구현. 
    
    TabBar를 개발 할 때에도 마찬가지로 현재경로에 필요한 데이터를 불러오며 실시간으로 TabBar의 css 및 content 가 변경되도록 처리.
    

## What I Learned

- 이번 프로젝트에서는 기획자, 디자이너, 프론트엔드, 백엔드 4개의 직군이 함께 협업하여 10일 동안 작업을 진행했습니다. 짧은 기간 동안 우선순위를 정하고 기능을 구현하였으나 기간에 비해 프로젝트 사이즈가 컸기에 완성되지 않은 상태로 제출하게 되었습니다. 그러나 팀원들과의 소통과 협업이 원활하여 프로젝트가 미완성으로 끝나는 것이 아닌 이후에도 완성도를 높이기 위해 노력하고 있습니다. 특히 채팅 기능 및 추가 기능을 구현하여 프로젝트를 완성하기 위해 지속적으로 개발중에 있습니다.
- 다른 프론트엔드 개발자의 코드를 리뷰하면서 constants.js에 text를 변수에 담아 설정하는 부분이 인상 깊었습니다. 이러한 관리 방식을 적용하면 코드의 가독성과 유지보수성을 향상시킬 수 있다는 것을 알게 되었습니다.

<img width="732" alt="스크린샷 2023-07-07 오전 5 21 30" src="https://github.com/doradora523/-Foodit/assets/94670754/ab37a221-db64-4880-82bb-8f3fe3f45d7a">
