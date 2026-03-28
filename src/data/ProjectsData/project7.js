import katelog from "../../assets/images/katelog.png";
import close_btn from "../../assets/images/close.png";
import git from "../../assets/images/github.png";
import per1 from "../../assets/images/per_1.png";
import per2 from "../../assets/images/per_2.png";
import per3 from "../../assets/images/per_3.png";
import per4 from "../../assets/images/per_4.png";
import per5 from "../../assets/images/per_5.png";
import per6 from "../../assets/images/per_6.png";
import trouble1 from "../../assets/images/pr_7_trouble_1.png";
import trouble2Before from "../../assets/images/pr7_trou_2_before.png";
import trouble2After from "../../assets/images/pr7_trou_2_after.png";
import trouble3 from "../../assets/images/pr7_trou3.png";
import trouble4 from "../../assets/images/pr7_trou_4.png";

export const project7 = [
  {
    image: katelog,
    themeColor: "#239b5d",
    title: "Katelog(카테부 소통 커뮤니티)",
    date: "2025/11 ~ 2025/12",
    description:
      "카카오테크 부트캠프 교육생분들과 운영진분들 및 강사진분들이 각자의 경험을 공유하고 일상을 공유할 수 있는 커뮤니티 서비스입니다. Vanilla JS로 시작하여 Virtual DOM 기반 SPA 구조로 고도화하고, 이후 React로 마이그레이션하며 프론트엔드 아키텍처를 단계적으로 개선했습니다.",
    close: close_btn,
    git: git,
    github: "https://github.com/100-hours-a-week/joody_front",
    features: "▷ 주요 특징 및 기능",
    feat1:
      "카카오테크 부트캠프 구성원들이 경험과 일상을 자유롭게 공유할 수 있는 커뮤니티 서비스를 구현했습니다.",
    feat2:
      "Vanilla JS 기반 구현에서 출발해 Virtual DOM 기반 SPA 구조로 고도화하며 상태 관리와 렌더링 구조를 개선했습니다.",
    feat3:
      "이후 React로 마이그레이션하며 컴포넌트 구조와 재사용성을 강화하고 프론트엔드 아키텍처를 단계적으로 개선했습니다.",
    feat4:
      "한 프로젝트 안에서 Vanilla JS → Custom Virtual DOM SPA → React로 이어지는 단계적 전환 과정을 직접 설계하고 구현했습니다.",
    journey_title: "▷ 아키텍처 개선 과정",
    journey_sections: [
      {
        step: "01",
        title: "Vanilla JS의 한계 인식",
        summary:
          "초기 구현 단계에서는 기능 자체는 빠르게 붙일 수 있었지만, 상태와 UI가 커질수록 구조적인 한계가 분명해졌습니다.",
        points: [
          "컴포넌트 단위 상태 관리 시스템이 없어 UI 상태와 DOM을 직접 동기화해야 했습니다.",
          "querySelector, innerHTML, appendChild 중심의 직접 DOM 조작이 반복되며 유지보수 비용이 커졌습니다.",
          "컴포넌트 개념 부재로 UI 재사용성과 파일 구조 확장성에 한계가 있었습니다.",
        ],
      },
      {
        step: "02",
        title: "Custom Virtual DOM SPA로 구조 개선",
        summary:
          "문제를 해결하기 위해 Virtual DOM 기반 SPA 구조로 한 차례 직접 마이그레이션하며 렌더링과 상태 관리의 기반을 다시 설계했습니다.",
        points: [
          "createDom / updateElement 구조로 초기 마운트와 업데이트 로직을 분리했습니다.",
          "Virtual DOM Diffing으로 변경된 영역만 실제 DOM에 반영해 전체 재렌더링을 줄였습니다.",
          "initState / getState / setState / subscribe / watch 기반 전역 Store 패턴을 설계했습니다.",
          "Observer 패턴과 페이지별 상태 초기화 전략으로 필요한 컴포넌트만 다시 렌더링하고 상태 오염을 방지했습니다.",
          "hashchange 기반 라우팅과 Route Guard를 구현해 보호 라우트 접근 제어까지 처리했습니다.",
        ],
      },
      {
        step: "03",
        title: "React로 마이그레이션하며 실서비스 품질 강화",
        summary:
          "이후 React로 옮기면서 구조적 안정성 위에 실제 사용성을 높이는 기능들을 추가해 사용자 경험과 인증 안정성을 개선했습니다.",
        points: [
          "Axios 인터셉터로 401 응답 시 Access Token 자동 재발급 및 대기 요청 순차 재시도 로직을 구현했습니다.",
          "JWT 자동 재발급 기반 인증 흐름으로 로그인 세션이 끊기지 않도록 안정화했습니다.",
          "IntersectionObserver 기반 커서 무한스크롤과 debounce 검색 최적화를 적용했습니다.",
          "좋아요 기능에는 낙관적 업데이트와 실패 시 롤백 처리를 적용해 즉각적인 반응성을 확보했습니다.",
        ],
      },
    ],
    troubleshooting_title: "▷ 트러블 슈팅",
    troubleshooting_items: [
      {
        title: "렌더링 루트 중복 및 DOM 중첩 이슈",
        problem:
          "로그인 페이지 진입 시 로그인 폼이 두 개씩 나타나거나, 입력할 때마다 동일한 UI가 아래로 계속 추가되는 현상이 발생했습니다.",
        cause:
          "renderApp()에서 첫 렌더링과 이후 업데이트를 구분하지 않아 상태 변경마다 기존 내용을 비우지 않고 appendChild()가 반복 실행되었습니다. 또한 HTML에 이미 존재하는 #login_container를 mount 타겟으로 사용하면서, App() 내부에서도 동일한 ID를 가진 루트를 다시 생성해 VDOM과 실제 DOM 구조가 어긋났습니다.",
        solution:
          '첫 렌더링에서는 root.innerHTML = "" 이후 appendChild()를 수행하고, 이후 렌더링부터는 updateElement()가 동작하도록 Mount / Update 흐름을 분리했습니다. 동시에 App() 내부의 중복 루트 컨테이너 ID를 제거해 외부 mount 타겟과 렌더링 구조를 일치시켰습니다.',
        image: trouble1,
      },
      {
        title: "Debouncing & Throttling을 통한 성능 최적화",
        problem:
          "검색창 입력 시 한 글자마다 API가 호출되어 서버 부하가 커졌고, 제목·내용 검색어 입력마다 Virtual DOM 전체 diff 및 리렌더링이 발생해 타이핑 도중 지연이 발생했습니다. 또한 검색 버튼과 엔터 키를 연타할 경우 중복 결과가 누적되거나 UI가 튀는 현상, 게시글 작성 버튼 더블 클릭 시 동일 게시글이 중복 생성되는 문제도 있었습니다.",
        solution:
          "검색 입력과 게시글 작성 이벤트에는 300ms 디바운스를 적용해 사용자가 입력을 잠시 멈춘 시점에만 상태 업데이트와 API 요청이 수행되도록 제어했습니다. 검색 실행 및 제출 함수에는 1000ms 스로틀링을 적용해 중복 검색, 중복 제출, 이미지 선택 시 빠른 연속 변경으로 인한 과도한 렌더링을 방지했습니다.",
        result:
          "불필요한 API 요청 수와 리렌더링 빈도를 줄여 입력 반응성을 개선했고, 버튼 연타나 빠른 상호작용에서도 중복 요청 없이 안정적인 UI 흐름을 유지하도록 만들었습니다.",
        images: [
          { src: trouble2Before, label: "Before" },
          { src: trouble2After, label: "After" },
        ],
      },
      {
        title: "SPA 환경의 게시글 리스트 렌더링 비효율",
        problem:
          "상태 하나만 변경되어도 페이지 전체가 다시 생성되며 불필요한 Virtual DOM diff 비용이 발생했고, 이벤트 리스너가 중복 등록되는 문제가 있었습니다. 또한 검색 시 기존 데이터에 새로운 검색 결과가 append되어 목록이 섞이거나, 페이지 이동 후에도 이전 페이지 상태가 남아 있는 현상도 함께 발생했습니다.",
        cause:
          "renderPage()가 Virtual DOM을 생성해 반영하는 과정과 실제 DOM 접근 시점이 어긋나면서, initPostListPage() 실행 시 아직 #post_list가 생성되지 않아 참조 코드가 중단되는 문제가 있었습니다. 여기에 SPA 특성상 이전 페이지의 prevNode와 DOM 상태가 메모리에 남아 재진입 시 VDOM 엔진이 동일 구조로 오판해 업데이트를 건너뛰었고, IntersectionObserver와 이벤트 리스너 클린업이 부족해 재바인딩 충돌까지 이어졌습니다.",
        solution:
          "페이지 진입 시 컨테이너를 비우고 이전 VDOM 노드 기록을 초기화해 항상 새 렌더링이 일어나도록 제어했습니다. 또한 프로필 이미지 등 헤더에 필요한 데이터를 먼저 로드한 뒤 레이아웃을 렌더링하도록 순서를 재설계해, DOM 접근 시점과 렌더링 타이밍을 맞췄습니다. 페이지를 떠날 때는 IntersectionObserver와 이벤트 리스너를 명시적으로 해제해 메모리 누수와 중복 바인딩을 방지했습니다.",
        result:
          "재진입 시 이전 상태가 섞이는 문제가 줄어들었고, 검색 결과와 페이지 상태가 안정적으로 초기화되도록 개선했습니다. 렌더링 흐름과 이벤트 생명주기를 분리하면서 SPA 환경에서도 보다 예측 가능한 게시글 리스트 동작을 확보했습니다.",
        image: trouble3,
      },
      {
        title: "데이터 - UI 불일치 문제 해결 : 댓글 목록 렌더링 오류",
        problem:
          "백엔드 API로부터 댓글 목록 데이터를 정상적으로 조회했지만 UI에는 댓글이 전혀 보이지 않아, 사용자 입장에서는 댓글이 없는 것처럼 보이는 심각한 오류가 발생했습니다.",
        cause:
          "백엔드 API의 실제 응답 구조와 프론트엔드 파싱 로직이 맞지 않았습니다. API는 commentsRes.data.data.content 경로에 댓글 배열을 담아 응답했지만, 기존 코드는 다른 구조를 기준으로 처리하고 있었고, 옵셔널 체이닝과 nullish 병합 연산자 조합으로 인해 유효한 데이터가 있어도 formattedComments가 빈 배열로 할당되는 문제가 있었습니다.",
        solution:
          "여러 가능한 데이터 경로를 안전하게 확인하도록 댓글 파싱 로직을 수정했습니다. commentsRes.data?.data?.content ?? commentsRes.data?.content ?? [] 형태로 순차 확인하여, 실제 댓글 배열이 들어오는 경로를 우선적으로 읽고 두 경로 모두 데이터가 없을 때만 빈 배열을 사용하도록 보완했습니다.",
        result:
          "백엔드에서 전달된 댓글 데이터가 안정적으로 UI와 연결되면서 댓글 목록이 정상 렌더링되었고, 데이터는 존재하지만 화면에는 보이지 않던 불일치 문제를 해소했습니다.",
        image: trouble4,
      },
      {
        title: "닉네임 수정 필드 최적화",
        problem:
          "닉네임 수정 입력 필드에서 한글 입력 시 심한 지연과 버벅임이 발생했고, 심한 경우 한 글자를 입력한 뒤 입력 필드가 멈추는 현상까지 나타났습니다.",
        cause:
          "React 제어 컴포넌트와 useRef를 함께 사용하는 안티패턴이 원인이었습니다. value={nicknameRef.current} 구조 때문에 한글 IME 조합 중 onChange로 리렌더링이 발생할 때마다 input 값이 이전 값으로 강제로 덮어써졌고, 그 과정에서 조합 중 상태가 깨지며 글자가 분리되거나 커서가 초기화되는 현상이 반복되었습니다.",
        solution:
          "해당 입력 필드를 제어 컴포넌트에서 비제어 컴포넌트로 전환했습니다. value 속성을 defaultValue로 변경해 초기 값만 설정하고, 이후 입력 상태 관리는 실제 DOM에 위임하도록 수정해 React 리렌더링과 IME 입력이 충돌하지 않도록 정리했습니다.",
        result:
          "한글 조합 입력이 자연스럽게 유지되면서 입력 지연과 버벅임이 사라졌고, 닉네임 수정 필드의 사용성이 안정적으로 개선되었습니다.",
      },
    ],
    window: "▷ 주요 화면",
    photo1: per1,
    photo2: per2,
    photo3: per3,
    photo4: per4,
    photo5: per5,
    photo6: per6,
  },
];
