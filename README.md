# 주다영 포트폴리오

React, Styled Components, Framer Motion 기반으로 제작한 프론트엔드 포트폴리오입니다.  
`Home`, `About`, `Info`, `Projects`, `Footer` 섹션으로 구성되어 있으며, 프로젝트 상세 모달과 개선 기록 UI까지 포함하고 있습니다.

## 실행 방법

### 1. 패키지 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run start
```

실행 후 브라우저에서 아래 주소로 접속합니다.

```bash
http://localhost:3000
```

### 3. 프로덕션 빌드

```bash
npm run build
```

빌드 결과물은 `build/` 폴더에 생성됩니다.

## 기술 스택

- React 18
- Styled Components
- Framer Motion
- React Scripts (Create React App)

## 주요 구성

- `Home`
  첫 화면 인트로, 자동 스크롤, 네비게이션, 소개 문구

- `About`
  이모티콘, 키워드, 인터뷰 형식 자기소개

- `Info`
  학력, 기술 스택, 마키 애니메이션

- `Projects`
  프로젝트 카드, 상세 모달, 주요 화면 갤러리, 개선 기록, 트러블 슈팅

- `Footer`
  연락처 및 마무리 영역

## 프로젝트 구조

```bash
src
├── assets
│   └── images
├── components
│   ├── Layout.js
│   └── section
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Info.jsx
│       ├── Projects.jsx
│       └── Footer.jsx
├── data
│   └── ProjectsData
└── styles
    ├── Home
    ├── About
    ├── Info
    ├── Projects
    └── Footer
```

## 주요 특징

- 섹션 단위 포트폴리오 구성
- 프로젝트별 상세 모달 UI
- 주요 화면 이미지 확대 보기
- 프로젝트별 개선 기록 정리
- 반응형 레이아웃
- Framer Motion 기반 애니메이션

## 배포

Vercel 기준으로 정적 배포가 가능합니다.  
프로덕션 배포 전에는 아래 항목을 확인하는 것을 권장합니다.

- `npm run build` 정상 동작 여부
- 이미지 크기 및 반응형 레이아웃 확인
- 프로젝트 모달 동작 확인
