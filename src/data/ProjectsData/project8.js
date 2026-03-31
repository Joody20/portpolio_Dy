import fitcheckMain from "../../assets/images/fitcheck_main.png";
import close_btn from "../../assets/images/close.png";
import git from "../../assets/images/github.png";
import project8Img1 from "../../assets/images/project8/img_1.PNG";
import project8Img2 from "../../assets/images/project8/img_2.jpg";
import project8Img3 from "../../assets/images/project8/img_3.png";
import project8Img4 from "../../assets/images/project8/img_4.PNG";
import project8Img5 from "../../assets/images/project8/img_5.PNG";
import project8Img6 from "../../assets/images/project8/img_6.png";
import project8Img7 from "../../assets/images/project8/img_7.PNG";
import project8Img8 from "../../assets/images/project8/img_8.jpg";
import project8Img9 from "../../assets/images/project8/img_9.PNG";
import homefeedBefore from "../../assets/images/homefeed_before.png";
import homefeedAfter1 from "../../assets/images/homefeed_after1.png";
import homefeedAfter2 from "../../assets/images/homeFeed_after2.png";
import virtualBefore from "../../assets/images/pro8_second_vir_before.gif";
import virtualAfter from "../../assets/images/pro8_second_vir_after.gif";
import searchVirtualBefore from "../../assets/images/pro8_third_before.gif";
import searchVirtualAfter from "../../assets/images/pro8_third_after.gif";
import postIsrBefore from "../../assets/images/post_ISR_before.png";
import postIsrAfter from "../../assets/images/post_ISR_after.png";

export const project8 = [
  {
    image: fitcheckMain,
    themeColor: "#353535",
    headerLightText: true,
    title: "FitCheck 패션 SNS",
    date: "2025/12 ~ 2026/03",
    description:
      "패션 SNS에 해당하는 '핏체크(Fit Check)'는 나에게 어울리는 스타일을 찾기 어려워하는 사용자를 위한 서비스입니다. 불특정 다수의 착장만 보여주는 기존 SNS나 판매 목적의 쇼핑몰과 달리, 개인의 신체 정보와 선호 데이터(키, 몸무게, 선호 패션)를 기반으로 유사 사용자 매칭과 실시간 투표 기능을 제공하며 사용자가 다른 유저와 소통하면서 '어울림의 기준'을 함께 만들어갈 수 있도록 돕습니다.",
    close: close_btn,
    git: git,
    github: "https://github.com/100-hours-a-week/16-team-katopia-fe",
    wiki: "https://github.com/100-hours-a-week/16-team-katopia-fe/wiki",
    designDoc:
      "https://github.com/100-hours-a-week/16-team-katopia-fe/wiki/Front%E2%80%90end-Architecture",
    noFeatureSectionStyle: true,
    // features: "▷ 주요 특징 및 기능",
    // feat1:
    //   "키, 몸무게, 선호 패션 데이터를 바탕으로 사용자와 유사한 체형 및 취향의 스타일 정보를 탐색할 수 있도록 설계했습니다.",
    // feat2:
    //   "실시간 투표 기능을 통해 착장에 대한 피드백을 빠르게 수집하고, 스타일 선택에 도움을 줄 수 있도록 구성했습니다.",
    // feat3:
    //   "다른 유저와의 소통을 기반으로 개인에게 어울리는 스타일 기준을 만들어갈 수 있는 패션 커뮤니티 경험을 제공합니다.",
    // feat4:
    //   "기존 SNS의 단순 피드 소비를 넘어, 스타일 추천과 상호작용 중심의 패션 SNS 방향으로 기획한 프로젝트입니다.",
    feature_groups_title: "▷ 주요 기능",
    feature_groups: [
      {
        title: "홈 피드",
        items: [
          "추천 사용자와 피드 게시물을 한 화면에서 제공.",
          "무한 스크롤 및 가상화 적용. 많은 게시물도 효율적으로 렌더링.",
          "좋아요, 북마크, 상세 이동 등 피드 중심 상호작용 지원.",
        ],
      },
      {
        title: "게시물",
        items: [
          "이미지 포함 게시물 작성, 수정, 삭제 지원.",
          "댓글 작성, 수정, 삭제 기능 구현.",
          "좋아요/좋아요 취소, 북마크/북마크 취소 기능 제공.",
          "상세 페이지 캐시 무효화 및 재검증 처리 지원.",
        ],
      },
      {
        title: "검색",
        items: [
          "사용자 검색 지원.",
          "게시물 및 해시태그 기반 검색 지원.",
          "검색 전/후 상태를 분리한 탐색 UX 제공.",
        ],
      },
      {
        title: "프로필",
        items: [
          "내 프로필 및 다른 사용자 프로필 조회 가능.",
          "작성 게시물, 북마크, 투표 내역 확인 가능.",
          "프로필 이미지 및 사용자 정보 수정 지원.",
          "팔로워/팔로잉 목록 조회 기능 제공.",
        ],
      },
      {
        title: "투표",
        items: [
          "이미지 기반 투표 생성 기능 제공.",
          "카드 스택 UI 기반 투표 참여 경험 구현.",
          "결과 조회 및 내 투표 목록 관리 지원.",
        ],
      },
      {
        title: "채팅",
        items: [
          "참여 채팅방과 오픈 채팅방 목록 제공.",
          "채팅방 생성, 참여, 수정, 삭제, 나가기 기능 지원.",
          "실시간 메시지 송수신 기능 제공.",
        ],
      },
      {
        title: "알림",
        items: [
          "SSE 기반 실시간 알림 수신 지원.",
          "읽음 처리 및 알림 목록 무한 스크롤 지원.",
          "토스트 알림과 알림 페이지 연동.",
        ],
      },
    ],
    improvements_title: "▷ 개선 기록",
    improvements: [
      {
        title: "홈피드 LCP 개선 및 렌더링 전략",
        summary:
          "홈피드 초기 렌더링 구조 재설계. LCP 병목 제거. 첫 화면 체감 속도 개선.",
        keywords: [
          "서버-클라이언트 역할 분리",
          "Prefetching을 통한 초기 데이터 주입",
          "인터랙션 최적화",
        ],
        detailCategory: "성능 개선",
        detailTitle: "홈피드 LCP 개선 및 렌더링 전략",
        detailLead:
          "리팩토링 이후 점수는 개선됐지만 기대했던 수준의 향상은 제한적. 단순 구조 변경이 아니라 실제 LCP 병목 재분석, 로딩 우선순위 재설계 진행.",
        detailSections: [
          {
            title: "구조 리팩토링",
            items: [
              "Server Component는 레이아웃 렌더링, Client Component는 무한 스크롤과 React Query 기반 상호작용 처리로 역할 분리.",
              "서버에서 prefetchInfiniteQuery로 초기 데이터 주입, HydrationBoundary로 클라이언트 캐시 연결.",
              "좋아요·북마크는 클라이언트 캐시 기반 즉시 반영 구조 적용.",
            ],
          },
          {
            title: "LCP 저하 원인 분석",
            items: [
              "인증 완료(ready) 이후에만 데이터 페칭 시작. 핵심 이미지 요청 지연.",
              '모든 이미지에 loading="lazy" 일괄 적용. viewport 내 LCP 이미지까지 지연 로딩.',
              "기존 <img> 태그와 원본 이미지 전송 구조. 네트워크 비용 증가, LCP 저하.",
            ],
          },
          {
            title: "개선 전략",
            items: [
              "인증 여부와 무관하게 초기 데이터 요청 선실행. 데이터 페칭 시점 분리.",
              '첫 번째 LCP 이미지에 priority, loading="eager", fetchPriority="high" 적용.',
              "next/image 도입, sizes 기반 반응형 이미지, quality=70 적용.",
            ],
          },
        ],
        result:
          "단순 점수 상승보다 실제 첫 화면 로딩 경로 정리에 집중. 홈피드 렌더링 전략 고도화.",
        images: [
          { src: homefeedBefore, label: "Before" },
          { src: homefeedAfter1, label: "After 1" },
          { src: homefeedAfter2, label: "After 2" },
        ],
      },
      {
        title: "홈 피드 리스트 가상 리스트 적용",
        summary:
          "무한스크롤 홈 피드에 가상 리스트 도입. DOM 수 축소. 스크롤 성능과 렌더링 비용 최적화.",
        keywords: [
          "@tanstack/react-virtual",
          "Window Virtualizer",
          "WeakMap 캐싱",
          "React.memo",
        ],
        detailCategory: "성능 개선",
        detailTitle: "홈 피드 리스트 가상 리스트 적용",
        detailLead:
          "홈피드는 무한스크롤 구조라 데이터가 많아질수록 DOM 노드 수, 렌더링 비용, Layout/Paint 비용이 함께 증가. 이를 줄이기 위해 현재 화면에 보이는 카드만 렌더링하는 가상 리스트 구조 적용.",
        detailSections: [
          {
            title: "가상 리스트 도입 배경",
            items: [
              "피드 데이터 증가에 따라 DOM 노드 수와 렌더링 비용 급증.",
              "가상 리스트 적용. 화면에 보이는 카드만 렌더링.",
              "@tanstack/react-virtual 기반 구현. estimateSize, measureElement, overscan 활용.",
            ],
          },
          {
            title: "구현 전략",
            items: [
              "Window Virtualizer 적용. 현재 보이는 영역과 overscan 범위만 렌더링.",
              "scrollMargin 적용. 페이지 중간 시작 지점에서도 translateY 계산 보정.",
              "onChange와 loaderIndex 연동. 끝에 닿기 직전 다음 데이터 선로딩.",
            ],
          },
          {
            title: "리렌더링 최소화 전략",
            items: [
              "WeakMap 캐싱 전략 적용. 동일 API 원본에 대해 HomePost 객체 주소 고정.",
              "원본 객체 해제 시 캐시도 함께 정리되도록 설계. 메모리 누수 부담 축소.",
              "HomePostCard에 memo와 커스텀 비교 함수 적용. 기존 카드의 Virtual DOM 비교 생략.",
            ],
          },
        ],
        result:
          "피드 1000개 이상에서도 실제 DOM은 20~30개 수준으로 유지. Layout 비용, Paint 비용, 불필요한 리스트 DOM, 이미지 디코딩 부담 감소.",
        imageViewMode: "compare-only",
        images: [
          { src: virtualBefore, label: "Before" },
          { src: virtualAfter, label: "After 1" },
        ],
        imageTabs: ["compare"],
      },
      {
        title: "탐색 리스트 가상 스크롤 적용",
        summary:
          "탐색 리스트에 가상 스크롤 적용. 수천 개 포스트도 안정적으로 렌더링하도록 구조 최적화.",
        keywords: [
          "react-window",
          "Infinite Loader",
          "3열 그리드 가상화",
          "동적 레이아웃 계산",
        ],
        detailCategory: "성능 개선",
        detailTitle: "탐색 리스트 가상 스크롤 적용",
        detailLead:
          "탐색 리스트는 많은 포스트를 한 번에 노출하는 화면이라 DOM 노드 수가 빠르게 증가. 이를 줄이기 위해 react-window 기반 가상 스크롤과 동적 레이아웃 계산 적용.",
        detailSections: [
          {
            title: "데이터 구조 최적화",
            items: [
              "3열 그리드 구현을 위해 데이터를 행 기준으로 재구성.",
              "Math.ceil(전체 데이터 / 3)로 전체 행 수 계산, 각 행에서 3개씩 slice 렌더링.",
            ],
          },
          {
            title: "반응형 및 동적 크기 계산",
            items: [
              "부모 컨테이너 너비를 실시간 추적. 기기 환경에 맞는 유연한 레이아웃 구성.",
              "카드 3:4 비율 적용, 각 행 높이 동적 계산.",
            ],
          },
          {
            title: "DOM 안정성 및 메모리 관리",
            items: [
              "현재 뷰포트와 상하단 overscan 영역만 실제 DOM에 유지.",
              "화면 밖 요소 제거, 새 요소 재사용. 메모리 점유율 최소화.",
            ],
          },
          {
            title: "사용자 경험을 위한 추가 로직",
            items: [
              "react-window-infinite-loader 연동. 끝에 닿기 전 loadMore 트리거.",
              "렌더링 성능 개선과 함께 데이터 페이징 흐름 자동화.",
            ],
          },
        ],
        result:
          "브라우저 부담을 줄이면서 안정적인 스크롤 성능 유지. 3열 카드 UI와 가상화 구조 동시 만족.",
        images: [
          { src: searchVirtualBefore, label: "Before" },
          { src: searchVirtualAfter, label: "After 1" },
        ],
        imageTabs: ["compare", "before", "after1"],
      },
      {
        title: "실시간 채팅 WebSocket 연동",
        summary:
          "WebSocket + STOMP Pub/Sub 기반 실시간 채팅 흐름 구현. 메시지 전송과 읽음 상태 실시간 반영.",
        keywords: [
          "WebSocket",
          "STOMP Pub/Sub",
          "Optimistic UI",
          "S3 Presigned URL",
        ],
        detailCategory: "실시간 처리",
        detailTitle: "실시간 채팅 WebSocket 연동",
        detailLead:
          "메시지 전송, 읽음 상태, 안읽음 수 변화의 즉시 반영이 필요. 이를 위해 WebSocket 기반 실시간 통신 도입, 연결 관리·채널 구독·메시지 상태 관리 로직 분리.",
        detailSections: [
          {
            title: "WebSocket 연결 관리",
            items: [
              "WebSocket 연결은 useChatSocketConnection 훅에서 관리.",
              "STOMP Client 생성, /ws/chat 엔드포인트 연결.",
              "Authorization: Bearer JWT 인증 헤더 포함, 연결 상태 동시 관리.",
            ],
          },
          {
            title: "채팅방 단위 채널 구독",
            items: [
              "채팅방 입장 시 messages 채널과 read-state 채널 구독.",
              "messages는 실시간 메시지 수신, read-state는 참여자별 읽음 상태 수신.",
            ],
          },
          {
            title: "메시지 전송 및 이미지 처리",
            items: [
              "메시지 전송 시 Optimistic UI 적용. 서버 응답 전 즉시 UI 반영.",
              "이미지는 Presigned URL 발급 → S3 업로드 → imageObjectKey 획득 → STOMP SEND 구조 적용.",
            ],
          },
          {
            title: "읽음 상태 및 초기 메시지 로딩 전략",
            items: [
              "읽음 상태는 /topic/chat/rooms/{roomId}/read-state 채널로 분리 관리.",
              "participants snapshot, 단건 read event 두 형태 모두 처리. lastReadMessageId 상태 유지.",
              "초기 메시지는 REST API, 실시간 메시지는 WebSocket, 과거 메시지는 cursor 기반 infinite scroll로 역할 분리.",
            ],
          },
          {
            title: "안읽음 수(Unread Count) 클라이언트 계산",
            items: [
              "서버는 메시지별 unread count 대신 참여자별 lastReadMessageId만 전달. unread count는 클라이언트에서 직접 계산.",
              "예시: 메시지 ID 7, A=10, B=8, C=5라면 A·B는 읽음, C는 안읽음.",
              "발신자를 제외한 참여자 중 lastReadMessageId >= messageId 조건으로 readCount 계산.",
              "totalOtherParticipants - readCount 방식으로 unreadCount 계산.",
              "계산 결과는 messageId → unreadCount 맵으로 저장.",
            ],
          },
        ],
        result:
          "실시간 메시지 흐름, 이미지 업로드, 읽음 상태 반영을 역할별로 분리. 안읽음 수 처리까지 확장 가능한 구조 확보.",
      },
      {
        title: "게시글 상세 페이지 렌더링 최적화",
        summary:
          "게시글 상세 페이지는 정적 캐싱 기반으로 빠르게 제공, 사용자 액션 이후에는 필요한 범위만 즉시 최신화되도록 On-demand ISR 구조 설계.",
        keywords: [
          "On-demand ISR",
          "force-static",
          "revalidateTag",
          "keepalive",
        ],
        detailCategory: "렌더링 최적화",
        detailTitle: "게시글 상세 페이지 렌더링 최적화",
        detailLead:
          "조회 성능 극대화와 사용자 액션 이후 최신 데이터 반영을 동시에 만족시키기 위해 Next.js On-demand ISR 적용. 정적 캐싱과 실시간 무효화 전략 결합.",
        detailSections: [
          {
            title: "On-demand ISR 설계",
            items: [
              'dynamic = "force-static", revalidate = false 설정 적용. 강한 정적 캐싱 기반 구성.',
              "force-cache와 revalidateTags([`post-detail:{id}`]) 결합. 게시글 ID 단위 캐시 무효화.",
            ],
          },
          {
            title: "캐시 무효화 파이프라인",
            items: [
              "/revalidate/post/[postId] 전용 엔드포인트 구축. revalidateTag와 revalidatePath 병행 호출.",
              "update는 특정 게시글 상세 중심 무효화, delete는 홈·검색·프로필 피드까지 무효화 범위 확장.",
            ],
          },
          {
            title: "클라이언트 호출 안정성",
            items: [
              "무효화 API 호출 시 keepalive = true 적용. 페이지 이동·브라우저 종료 상황에서도 요청 유실 방지.",
            ],
          },
        ],
        result:
          "정적 캐싱 기반 조회 성능 유지. 게시글 수정·삭제 이후 필요한 경로만 선택적으로 최신화.",
        images: [
          { src: postIsrBefore, label: "Before" },
          { src: postIsrAfter, label: "After 1" },
        ],
        imageTabs: ["compare", "before", "after1"],
      },
      {
        title: "이미지 전처리 및 업로드 파이프라인 설계",
        summary:
          "고해상도 이미지 업로드로 인한 전송 비용과 서버 부하를 줄이기 위한 클라이언트 전처리 + Presigned URL 기반 업로드 파이프라인 설계.",
        keywords: [
          "HEIC → JPEG",
          "Canvas WebP 압축",
          "Presigned URL",
          "CloudFront 캐싱",
        ],
        detailCategory: "이미지 최적화",
        detailTitle: "이미지 전처리 및 업로드 파이프라인 설계",
        detailLead:
          "패션 SNS 특성상 업로드 이미지 수와 크기가 많아 업로드 실패, 네트워크 비용 증가, 렌더링 성능 저하 발생. 이를 줄이기 위한 클라이언트 전처리 + Presigned URL 기반 업로드 파이프라인 설계.",
        detailSections: [
          {
            title: "문제 상황",
            items: [
              "초기 구현에서는 고해상도 원본 이미지를 그대로 서버로 전송.",
              "네트워크 전송량 증가, 클라우드 비용 증가, API 서버 부하 증가.",
            ],
          },
          {
            title: "클라이언트 이미지 전처리",
            items: [
              "heic2any로 HEIC 파일을 JPEG로 변환. 이미지 포맷 정규화.",
              "긴 쪽 기준 maxLongSide = 1440px 제한, 원본 비율 유지 리사이징.",
              "Canvas 렌더링 후 WebP 변환 업로드 구조 구현.",
            ],
          },
          {
            title: "이미지 업로드 파이프라인 설계",
            items: [
              "이미지 업로드는 서버를 거치지 않고 S3에 직접 업로드하는 구조 설계.",
              "사용자 → Presigned URL 요청 → Upload URL 발급 → S3 PUT 업로드 흐름 구현.",
              "이미지 조회는 CloudFront Edge 캐시 우선 구조 적용.",
            ],
          },
        ],
        result:
          "네트워크 부담과 서버 부하 감소. 업로드 성공률과 조회 성능 동시 개선.",
      },
    ],
    window: "▷ 주요 화면",
    photo1: project8Img1,
    photo2: project8Img2,
    photo3: project8Img3,
    photo4: project8Img4,
    photo5: project8Img5,
    photo6: project8Img6,
    photo7: project8Img7,
    photo8: project8Img8,
    photo9: project8Img9,
  },
];
