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
    features: "▷ 주요 특징 및 기능",
    feat1:
      "키, 몸무게, 선호 패션 데이터를 바탕으로 사용자와 유사한 체형 및 취향의 스타일 정보를 탐색할 수 있도록 설계했습니다.",
    feat2:
      "실시간 투표 기능을 통해 착장에 대한 피드백을 빠르게 수집하고, 스타일 선택에 도움을 줄 수 있도록 구성했습니다.",
    feat3:
      "다른 유저와의 소통을 기반으로 개인에게 어울리는 스타일 기준을 만들어갈 수 있는 패션 커뮤니티 경험을 제공합니다.",
    feat4:
      "기존 SNS의 단순 피드 소비를 넘어, 스타일 추천과 상호작용 중심의 패션 SNS 방향으로 기획한 프로젝트입니다.",
    feature_groups_title: "▷ 주요 기능",
    feature_groups: [
      {
        title: "홈 피드",
        items: [
          "추천 사용자와 피드 게시물을 한 화면에서 제공합니다.",
          "무한 스크롤 및 가상화를 적용해 많은 게시물도 효율적으로 렌더링합니다.",
          "좋아요, 북마크, 상세 이동 등 피드 중심 상호작용을 지원합니다.",
        ],
      },
      {
        title: "게시물",
        items: [
          "이미지 포함 게시물 작성, 수정, 삭제를 지원합니다.",
          "댓글 작성, 수정, 삭제 기능을 제공합니다.",
          "좋아요/좋아요 취소, 북마크/북마크 취소 기능을 제공합니다.",
          "상세 페이지 캐시 무효화 및 재검증 처리를 지원합니다.",
        ],
      },
      {
        title: "검색",
        items: [
          "사용자 검색을 지원합니다.",
          "게시물 및 해시태그 기반 검색을 지원합니다.",
          "검색 전/후 상태를 분리한 탐색 UX를 제공합니다.",
        ],
      },
      {
        title: "프로필",
        items: [
          "내 프로필 및 다른 사용자 프로필 조회가 가능합니다.",
          "작성 게시물, 북마크, 투표 내역을 확인할 수 있습니다.",
          "프로필 이미지 및 사용자 정보 수정을 지원합니다.",
          "팔로워/팔로잉 목록 조회 기능을 제공합니다.",
        ],
      },
      {
        title: "투표",
        items: [
          "이미지 기반 투표 생성 기능을 제공합니다.",
          "카드 스택 UI를 활용한 투표 참여 경험을 구현했습니다.",
          "결과 조회 및 내 투표 목록 관리를 지원합니다.",
        ],
      },
      {
        title: "채팅",
        items: [
          "내가 참여한 채팅방과 오픈 채팅방 목록을 제공합니다.",
          "채팅방 생성, 참여, 수정, 삭제, 나가기 기능을 지원합니다.",
          "실시간 메시지 송수신 기능을 제공합니다.",
          "대화 목록 가상화 및 상향 무한 스크롤 최적화를 적용했습니다.",
        ],
      },
      {
        title: "알림",
        items: [
          "SSE 기반 실시간 알림 수신을 지원합니다.",
          "읽음 처리 및 알림 목록 무한 스크롤을 지원합니다.",
          "토스트 알림과 알림 페이지를 연동했습니다.",
        ],
      },
    ],
    improvements_title: "▷ 개선 기록",
    improvements: [
      {
        title: "홈피드 LCP 개선 및 렌더링 전략",
        summary:
          "홈피드의 초기 렌더링 구조를 다시 설계하고, LCP를 늦추는 원인을 단계적으로 제거해 첫 화면 체감 속도를 개선했습니다.",
        keywords: [
          "서버-클라이언트 역할 분리",
          "Prefetching을 통한 초기 데이터 주입",
          "인터랙션 최적화",
        ],
        detailCategory: "성능 개선",
        detailTitle: "홈피드 LCP 개선 및 렌더링 전략",
        detailLead:
          "리팩토링 이후 점수는 개선되었지만 기대했던 수준의 유의미한 향상은 보이지 않았습니다. 그래서 단순 구조 변경이 아니라, 실제로 LCP를 늦추는 병목을 다시 분석하고 로딩 우선순위 자체를 재설계했습니다.",
        detailSections: [
          {
            title: "구조 리팩토링",
            items: [
              "Server Component는 레이아웃 렌더링을 담당하고, Client Component는 무한 스크롤과 React Query 기반 상호작용 처리를 담당하도록 역할을 분리했습니다.",
              "서버에서 prefetchInfiniteQuery로 초기 데이터를 주입한 뒤 HydrationBoundary로 클라이언트 캐시를 연결해 첫 화면이 즉시 보이도록 구성했습니다.",
              "좋아요와 북마크 같은 상호작용은 클라이언트 캐시 기반으로 즉시 반영되도록 처리해 이후 인터랙션 지연도 줄였습니다.",
            ],
          },
          {
            title: "LCP 저하 원인 분석",
            items: [
              "인증 완료(ready) 이후에만 데이터 페칭이 시작되어, 첫 화면의 핵심 이미지 요청 자체가 늦어지고 있었습니다.",
              '모든 이미지에 loading="lazy"를 일괄 적용해 viewport 안에 있는 LCP 이미지까지 지연 로딩되고 있었습니다.',
              "기존 <img> 태그와 원본 이미지 전송 방식으로 인해 네트워크 전송 비용이 커지고, LCP가 더 느려지고 있었습니다.",
            ],
          },
          {
            title: "개선 전략",
            items: [
              "인증 여부와 무관하게 초기 데이터 요청을 먼저 시작하도록 데이터 페칭 시점을 분리했습니다.",
              '첫 번째 LCP 이미지에는 priority, loading="eager", fetchPriority="high"를 적용해 브라우저가 가장 먼저 가져가야 할 리소스를 명확히 했습니다.',
              "next/image 도입, sizes 기반 반응형 이미지, quality=70 설정을 적용해 전송량을 줄이고 실제 로딩 속도를 개선했습니다.",
            ],
          },
        ],
        result:
          "이후 개선은 단순 점수 상승보다 실제 첫 화면 로딩 경로를 정리하는 데 초점을 맞췄고, 홈피드가 더 빠르게 보이도록 렌더링 전략을 고도화할 수 있었습니다.",
        images: [
          { src: homefeedBefore, label: "Before" },
          { src: homefeedAfter1, label: "After 1" },
          { src: homefeedAfter2, label: "After 2" },
        ],
      },
      {
        title: "홈 피드 리스트 가상 리스트 적용",
        summary:
          "무한스크롤 구조의 홈 피드에 가상 리스트를 도입해 DOM 수를 줄이고, 스크롤 성능과 렌더링 비용을 함께 최적화했습니다.",
        keywords: [
          "@tanstack/react-virtual",
          "Window Virtualizer",
          "WeakMap 캐싱",
          "React.memo",
        ],
        detailCategory: "성능 개선",
        detailTitle: "홈 피드 리스트 가상 리스트 적용",
        detailLead:
          "홈피드는 스크롤을 내릴수록 게시글이 계속 추가되는 무한스크롤 구조이기 때문에, 데이터가 많아질수록 DOM 노드 수가 빠르게 증가하고 렌더링 비용, 스크롤 성능 저하, Layout/Paint 비용 증가가 함께 발생했습니다. 이를 해결하기 위해 현재 화면에 보이는 카드만 렌더링하는 가상 리스트 기반 구조로 전환했습니다.",
        detailSections: [
          {
            title: "가상 리스트 도입 배경",
            items: [
              "피드 데이터가 많아질수록 DOM 노드 수가 빠르게 증가해 렌더링 비용과 브라우저 부담이 커졌습니다.",
              "가상 리스트를 적용해 화면에 보이는 카드만 렌더링하도록 변경했습니다.",
              "사용 라이브러리는 @tanstack/react-virtual이며, estimateSize, measureElement, overscan을 함께 활용했습니다.",
            ],
          },
          {
            title: "구현 전략",
            items: [
              "Window Virtualizer를 사용해 전체 데이터를 모두 그리지 않고 현재 보이는 영역과 overscan 범위만 렌더링했습니다.",
              "scrollMargin을 적용해 피드가 페이지 중간에서 시작하더라도 translateY 계산이 어긋나지 않도록 보정했습니다.",
              "onChange와 loaderIndex를 연동해 사용자가 보고 있는 마지막 아이템을 추적하고, 끝에 닿기 직전 다음 데이터를 미리 불러오도록 구성했습니다.",
            ],
          },
          {
            title: "리렌더링 최소화 전략",
            items: [
              "WeakMap 캐싱 전략으로 API 원본 객체가 동일하면 HomePost 객체의 메모리 주소도 동일하게 유지되도록 설계했습니다.",
              "원본 객체가 메모리에서 사라질 때 캐시도 함께 정리되도록 해 메모리 누수 부담을 줄였습니다.",
              "HomePostCard는 memo와 커스텀 비교 함수를 적용해, 스크롤 중 부모가 다시 계산되더라도 기존 카드의 Virtual DOM 비교 자체를 생략하도록 최적화했습니다.",
            ],
          },
        ],
        result:
          "피드 데이터가 1000개 이상 존재하더라도 실제 DOM에는 20~30개 수준의 카드만 렌더링되도록 제어할 수 있었고, Layout 비용, Paint 비용, 불필요한 리스트 DOM, 이미지 디코딩 부담을 함께 줄일 수 있었습니다.",
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
          "탐색 리스트에 가상 스크롤을 적용해 수천 개의 포스트도 성능 저하 없이 렌더링할 수 있도록 구조를 최적화했습니다.",
        keywords: [
          "react-window",
          "Infinite Loader",
          "3열 그리드 가상화",
          "동적 레이아웃 계산",
        ],
        detailCategory: "성능 개선",
        detailTitle: "탐색 리스트 가상 스크롤 적용",
        detailLead:
          "탐색 리스트는 많은 포스트를 한 번에 노출해야 하는 화면이기 때문에 DOM 노드 수가 빠르게 증가할 수 있습니다. 이를 해결하기 위해 react-window 기반의 가상 스크롤과 동적 레이아웃 계산을 적용해, 수천 개의 포스트도 부드럽게 탐색할 수 있는 구조로 개선했습니다.",
        detailSections: [
          {
            title: "데이터 구조 최적화",
            items: [
              "가상 리스트 라이브러리는 행 단위 렌더링에 최적화되어 있기 때문에, 3열 그리드를 만들기 위해 데이터를 행 기준으로 재구성했습니다.",
              "Math.ceil(전체 데이터 / 3) 방식으로 전체 행 수를 계산하고, 각 행 컴포넌트에서 해당 인덱스에 맞는 데이터 3개를 slice하여 렌더링했습니다.",
            ],
          },
          {
            title: "반응형 및 동적 크기 계산",
            items: [
              "고정 픽셀 대신 부모 컨테이너 너비를 실시간으로 추적해 사용자의 기기 환경에 맞는 유연한 레이아웃을 보장했습니다.",
              "카드 섹션의 시각적 일관성을 위해 3:4 비율을 적용하고, 각 행의 높이를 동적으로 계산했습니다.",
            ],
          },
          {
            title: "DOM 안정성 및 메모리 관리",
            items: [
              "현재 뷰포트에 보이는 행과 상하단 overscan 영역만 실제 DOM에 유지했습니다.",
              "스크롤 시 화면 밖으로 나간 요소는 제거하고 새로운 요소를 재사용해 메모리 점유율을 최소화했습니다.",
            ],
          },
          {
            title: "사용자 경험을 위한 추가 로직",
            items: [
              "react-window-infinite-loader를 연동해 스크롤이 끝에 닿기 전 loadMore를 트리거하도록 구성했습니다.",
              "렌더링 성능 개선뿐 아니라 사용자가 끊김 없이 탐색할 수 있도록 데이터 페이징 흐름도 자동화했습니다.",
            ],
          },
        ],
        result:
          "탐색 리스트가 많은 데이터를 다루더라도 브라우저 부담을 줄이면서 안정적인 스크롤 성능을 유지할 수 있었고, 3열 카드 UI와 가상화 구조를 함께 만족시키는 탐색 경험을 구현했습니다.",
        images: [
          { src: searchVirtualBefore, label: "Before" },
          { src: searchVirtualAfter, label: "After 1" },
        ],
        imageTabs: ["compare", "before", "after1"],
      },
      {
        title: "실시간 채팅 WebSocket 연동",
        summary:
          "WebSocket + STOMP Pub/Sub 구조를 기반으로, 메시지 전송과 읽음 상태를 새로고침 없이 반영하는 실시간 채팅 흐름을 구현했습니다.",
        keywords: [
          "WebSocket",
          "STOMP Pub/Sub",
          "Optimistic UI",
          "S3 Presigned URL",
        ],
        detailCategory: "실시간 처리",
        detailTitle: "실시간 채팅 WebSocket 연동",
        detailLead:
          "채팅 기능에서는 메시지 전송, 읽음 상태, 안읽음 수 변화가 새로고침 없이 즉시 반영되어야 했습니다. 이를 위해 WebSocket 기반 실시간 통신을 도입하고, WebSocket 연결 관리, 채팅방 구독, 메시지 상태 관리 로직을 구조적으로 분리해 실시간 채팅 흐름을 처리했습니다.",
        detailSections: [
          {
            title: "WebSocket 연결 관리",
            items: [
              "WebSocket 연결은 useChatSocketConnection 훅에서 관리했습니다.",
              "STOMP Client를 생성하고 /ws/chat 엔드포인트에 연결했습니다.",
              "Authorization: Bearer JWT 인증 헤더를 포함해 연결했고, 연결 상태도 함께 관리했습니다.",
            ],
          },
          {
            title: "채팅방 단위 채널 구독",
            items: [
              "채팅방 입장 시 messages 채널과 read-state 채널 두 개를 구독했습니다.",
              "messages 채널에서는 실시간 채팅 메시지를 수신하고, read-state 채널에서는 참여자별 읽음 상태 변화를 수신하도록 구성했습니다.",
            ],
          },
          {
            title: "메시지 전송 및 이미지 처리",
            items: [
              "메시지 전송 시 서버 응답을 기다리지 않고 먼저 UI에 반영하는 Optimistic UI를 적용해 즉시 반응하는 채팅 UX를 구현했습니다.",
              "이미지는 WebSocket으로 직접 전송하지 않고, Presigned URL 발급 → S3 업로드 → imageObjectKey 획득 후 STOMP SEND로 payload를 전송하는 구조로 구현했습니다.",
            ],
          },
          {
            title: "읽음 상태 및 초기 메시지 로딩 전략",
            items: [
              "읽음 상태는 /topic/chat/rooms/{roomId}/read-state 채널로 분리해 관리했습니다.",
              "서버에서 내려오는 participants snapshot과 단건 read event 두 형태를 모두 처리해 참여자별 lastReadMessageId 상태를 유지했습니다.",
              "초기 메시지 로딩은 REST API, 실시간 메시지는 WebSocket, 과거 메시지 조회는 cursor 기반 infinite scroll로 역할을 분리했습니다.",
            ],
          },
          {
            title: "안읽음 수(Unread Count) 클라이언트 계산",
            items: [
              "서버가 메시지별 unread count를 직접 내려주지 않고, 참여자별 lastReadMessageId만 전달하는 구조였기 때문에 프론트엔드에서 unread count를 직접 계산하도록 구현했습니다.",
              "예를 들어 3명의 참여자가 있고 메시지 ID가 7일 때, A=10, B=8, C=5라면 A와 B는 읽음, C는 안읽음으로 판단할 수 있습니다.",
              "각 메시지에 대해 발신자를 제외한 참여자 중 lastReadMessageId >= messageId 조건을 만족하는 사용자를 필터링해 readCount를 계산했습니다.",
              "이후 totalOtherParticipants - readCount 방식으로 unreadCount를 계산해 메시지별 안읽음 수를 구했습니다.",
              "계산 결과는 messageId → unreadCount 형태의 맵으로 저장해 각 메시지의 안읽음 수를 즉시 조회할 수 있는 상태 구조를 만들었습니다.",
            ],
          },
        ],
        result:
          "실시간 메시지 흐름, 이미지 메시지 업로드, 읽음 상태 반영을 역할별로 분리하면서 채팅 UX를 안정적으로 구현할 수 있었고, 이후 안읽음 수 처리 같은 클라이언트 로직도 확장 가능한 구조를 마련했습니다.",
      },
      {
        title: "게시글 상세 페이지 렌더링 최적화",
        summary:
          "게시글 상세 페이지는 정적 캐싱 기반으로 빠르게 제공하되, 사용자 액션 이후에는 필요한 범위만 즉시 최신화되도록 On-demand ISR 구조를 설계했습니다.",
        keywords: [
          "On-demand ISR",
          "force-static",
          "revalidateTag",
          "keepalive",
        ],
        detailCategory: "렌더링 최적화",
        detailTitle: "게시글 상세 페이지 렌더링 최적화",
        detailLead:
          "게시글 상세 페이지의 조회 성능을 극대화하면서도 사용자 액션 이후에는 최신 데이터가 반영되어야 했기 때문에, Next.js의 On-demand ISR을 적용해 정적 캐싱과 실시간 무효화 전략을 함께 가져가는 구조를 설계했습니다.",
        detailSections: [
          {
            title: "On-demand ISR 설계",
            items: [
              'dynamic = "force-static", revalidate = false 설정으로 기본 페이지 렌더링 비용을 최소화하고 강한 정적 캐싱을 적용했습니다.',
              "데이터 페칭 시 force-cache와 revalidateTags([`post-detail:{id}`])를 결합해 캐시 무효화 단위를 게시글 ID 기준으로 파편화했습니다.",
            ],
          },
          {
            title: "캐시 무효화 파이프라인",
            items: [
              "/revalidate/post/[postId] 전용 엔드포인트를 구축해 revalidateTag와 revalidatePath를 병행 호출하도록 설계했습니다.",
              "update 시에는 특정 게시글 상세와 관련 경로만 무효화하고, delete 시에는 상세 페이지를 포함해 홈, 검색, 프로필 피드까지 무효화 범위를 확장했습니다.",
            ],
          },
          {
            title: "클라이언트 호출 안정성",
            items: [
              "클라이언트에서 무효화 API를 호출할 때 keepalive = true 옵션을 적용해 사용자의 페이지 이동이나 브라우저 종료 상황에서도 요청이 유실되지 않도록 보장했습니다.",
            ],
          },
        ],
        result:
          "정적 캐싱 기반의 빠른 조회 성능을 유지하면서도, 게시글 수정·삭제 이후 필요한 경로만 선택적으로 최신화할 수 있는 상세 페이지 캐시 전략을 구현했습니다.",
        images: [
          { src: postIsrBefore, label: "Before" },
          { src: postIsrAfter, label: "After 1" },
        ],
        imageTabs: ["compare", "before", "after1"],
      },
      {
        title: "이미지 전처리 및 업로드 파이프라인 설계",
        summary:
          "고해상도 이미지 업로드로 인한 전송 비용과 서버 부하를 줄이기 위해, 클라이언트 전처리와 Presigned URL 기반 업로드 구조를 결합한 이미지 파이프라인을 설계했습니다.",
        keywords: [
          "HEIC → JPEG",
          "Canvas WebP 압축",
          "Presigned URL",
          "CloudFront 캐싱",
        ],
        detailCategory: "이미지 최적화",
        detailTitle: "이미지 전처리 및 업로드 파이프라인 설계",
        detailLead:
          "패션 SNS 특성상 사용자가 업로드하는 이미지 수와 크기가 많아 업로드 실패, 네트워크 비용 증가, 렌더링 성능 저하 문제가 발생했습니다. 이를 해결하기 위해 클라이언트 이미지 전처리와 Presigned URL 기반 업로드 구조를 결합한 이미지 처리 파이프라인을 설계했습니다.",
        detailSections: [
          {
            title: "문제 상황",
            items: [
              "초기 구현에서는 사용자가 업로드한 고해상도 이미지를 그대로 서버로 전송하고 있었습니다.",
              "그 결과 네트워크 전송량이 커지고 클라우드 비용과 API 서버 부하가 함께 증가했습니다.",
            ],
          },
          {
            title: "클라이언트 이미지 전처리",
            items: [
              "heic2any 라이브러리를 활용해 HEIC 파일을 JPEG로 변환하고 이미지 포맷을 정규화했습니다.",
              "이미지의 긴 쪽 기준으로 maxLongSide = 1440px 제한을 두고, 원본 비율을 유지하는 scale 값을 계산해 해상도를 리사이징했습니다.",
              "리사이징된 이미지는 Canvas에 렌더링한 뒤 WebP 파일로 변환해 업로드하도록 구현했습니다.",
            ],
          },
          {
            title: "이미지 업로드 파이프라인 설계",
            items: [
              "이미지 업로드는 서버를 거치지 않고 S3에 직접 업로드하는 구조로 설계했습니다.",
              "사용자 → Presigned URL 요청 → Upload URL 발급 → S3 PUT 업로드 흐름으로 구현해, 서버는 업로드 URL만 발급하고 실제 파일 전송은 클라이언트가 직접 수행하도록 했습니다.",
              "이미지 조회 시에는 CloudFront가 사용자와 가장 가까운 Edge Server를 우선 사용하고, 캐시가 없을 때만 S3에서 이미지를 가져온 뒤 캐싱하도록 구성했습니다.",
            ],
          },
        ],
        result:
          "이미지 업로드 과정의 네트워크 부담과 서버 부하를 줄이면서, 업로드 성공률과 조회 성능을 함께 개선할 수 있는 파이프라인을 마련했습니다.",
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
