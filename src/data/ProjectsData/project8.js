import fitcheckMain from "../../assets/images/fitcheck_main.png";
import close_btn from "../../assets/images/close.png";
import git from "../../assets/images/github.png";
import fitcheckPro1 from "../../assets/images/fitcheck_pro1.png";
import fitcheckPro2 from "../../assets/images/fitcheck_pro2.png";
import fitcheckPro3 from "../../assets/images/fitcheck_pro3.png";

export const project8 = [
  {
    image: fitcheckMain,
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
          "SSE 기반 실시간 알림 수신 기능을 제공합니다.",
          "읽음 처리 및 알림 목록 무한 스크롤을 지원합니다.",
          "토스트 알림과 알림 페이지를 연동했습니다.",
        ],
      },
    ],
    window: "▷ 주요 화면",
    galleryColumns: 1,
    photo1: fitcheckPro1,
    photo2: fitcheckPro2,
    photo3: fitcheckPro3,
  },
];
