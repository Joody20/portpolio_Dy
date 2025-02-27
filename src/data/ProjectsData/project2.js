import council from "../../assets/images/council.png";
import git from "../../assets/images/github.png";
import close_btn from "../../assets/images/close.png";
import admin from "../../assets/images/admin.png";
import user from "../../assets/images/unic_mobile.png";
import unic1 from "../../assets/images/unic1.png";
import unic2 from "../../assets/images/unic2.png";
import unic3 from "../../assets/images/unic3.png";
import unic4 from "../../assets/images/unic4.png";
import unic5 from "../../assets/images/unic5.png";

export const project2 = [
  {
    image: council,
    title: "학생회 및 학부생 웹 서비스",
    date: "2024/03 ~ 2024/11",
    description:
      "UNIC은 학부생들이 학교 내 생활을 편리하게 관리할 수 있도록 지원하고, 학생회의 업무 효율을 높이는 것을 목표로 하여 학사 운영과 학생 간 소통을 디지털화하여 학생들이 필요한 정보와 서비스에 더 쉽게 접근할 수 있도록 기획하였습니다. 학생 편의성을 증대하기 위해 공지사항, 설문조사, 물품대여, 커뮤니티 등을 통합하여 학교 내 생활에 자주 필요한 기능을 한 곳에 모았으며 학생회 운영을 효율적으로 하기 위해 공지글 작성, 설문 관리, 물품대여 로그, 학생회비 확인 등의 기능을 통해 학생회가 더 체계적인 운영을 관리할 수 있도록 하였습니다.",
    github: "https://github.com/kw-infoconv-program/unic",
    git: git,
    close: close_btn,
    features: "▷ 주요 특징 및 기능",
    user_feat: " 사용자(학생)모드",
    user_feat1: "공지사항 : 학과 , 학생회 관련 중요 공지 확인 가능",
    user_feat2: "설문조사 : 학과 내 의견 수립을 위한 설문 기능",
    user_feat3: "물품대여 : 필요한 물품을 신청 및 대여 가능",
    user_feat4: "커뮤니티 : 학생들 간에 서로 소통할 수 있는 공간 제공",
    user_feat5: "소모임 : 학과 내 소모임 정보 제공",
    user_feat6: "마이페이지: 본인 대여 정보 확인 및 물품 반납",
    user_feat7:
      "DB에 저장되어 있는 학생들만 물품대여를 가능하게끔 권한을 설정해놓음. 졸업생 및 타과학생들은 물품대여를 할 수 없도록 관리를 해놨음.",
    user: user,
    admin_feat: " 관리자(학생회)모드",
    admin_feat1:
      "회원가입 신청 : 학생회 부원이 회원가입을 요청하면, 회장에게 승인요청이 전달됨.",
    admin_feat2:
      "회장승인 : 학생회 회장이 신청을 검토하고 승인을 해야만 로그인이 가능함.",
    admin_feat3:
      "로그인 : 승인된 학생회 부원만이 관리자 모드에 로그인할 수 있음.",
    admin_feat4:
      "회장전용 접근 설정 : 회장은 모든 도메인에 접근 가능하며, 특정 도메인에 대해 각 학생회 부원들의 접근 권한을 설정할 수 있음.",
    admin_feat5:
      "일반 학생회원 접근 제한 : 회장이 설정한 권한에 따라 일반 학생회 부원은 승인된 도메인에만 접근 가능함.",
    admin: admin,
    window: "주요 화면",
    photo1: unic1,
    photo2: unic2,
    photo3: unic3,
    photo4: unic4,
    photo5: unic5,
  },
];
