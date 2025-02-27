import dashboard from "../../assets/images/dashboard.png";
import git from "../../assets/images/github.png";
import close_btn from "../../assets/images/close.png";
import dash2 from "../../assets/images/dash2.png";
import dash1 from "../../assets/images/dash1.png";
import dash3 from "../../assets/images/dash3.png";
import dash4 from "../../assets/images/dash4.png";

export const project6 = [
  {
    image: dashboard,
    title: "파킨슨병환자 대시보드",
    date: "2024/09 ~ 2024/12",
    description:
      "어떤 병원에서 검진용 모바일 어플리케이션을 운영하고 있다. 이 앱에서는 환자들의 운동 수행 정보를 서버로 보내어 저장한다. 이 정보 데이터들을 활용하여 서버의 API 정보를 토대로 운동 기록을 시각화하는 서비스를 개발함. 파킨슨 병은 세계 2위 퇴행성 노인 질환히며 국내 환자 수 2004년 대비 3.2배 증가하였으며, 최근 5년간 15%이상 증가함. 목소리 발성(지속 발성, 반복 발성) , 눈검사(화면주시, 빠른 깜빡임), 손가락 검사, 걸음 검사로 선정된 운동 데이터를 통해 의료진 대시보드를 구현하였습니다.",
    close: close_btn,
    git: git,
    github: "https://github.com/kw-ic-info/24-team-team10?tab=readme-ov-file",
    features: "주요 기능 및 특징",
    feat1: "각 검사에 대한 환자 리스트 및 환자 데이터 시각화",
    feat2:
      "손가락 검사 운동은 /api/tests/finger API 주소를 통해 총 데이터 수, 총 페이지 수, 현재 페이지, 현재 페이지 크기, 검사 목록, 검사 아이디, 검사한 손, 터치 횟수, 약 먹은 뒤 지난 시간(분), 생선시간, 검사자 아이디 데이터들을 가지고 년도별 환자 성별 추이를 확인할 수 잇도록 chart.js를 활용하여 막대 그래프를 구현하였으며, 언제 가장 손가락 운동을 가장 많이 하였는지 확인하기 위해 선 그래프로 구현하였습니다. ",
    feat3:
      "개별 환자 선택 시 이 환자에 대한 데이터 리스트 및 약 복용 후 경과시간에 따른 검사 결과 추세를 확인할 수 있으며 왼쪽, 오른쪽 손가락 검사 횟수에 대한 추이도 확인해볼 수 있습니다. 또한, 환자 데이터도 다운로드 할 수 있도록 구현하였음.",
    feat4:
      "개별 환자 선택 후 다른 운동을 선택할 경우 이 환자에 대한 데이터를 계속해서 확인할 수 있음.",
    window: "주요 화면",
    photo1: dashboard,
    photo2: dash1,
    photo3: dash2,
    photo4: dash3,
    photo5: dash4,
  },
];
