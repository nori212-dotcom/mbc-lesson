## 요청사항
생성스토리보드를 구현할거야
Vanilla HTML,CSS,JavaScript를 사용하며, 페이지 이동이 필요할 경우 MPA(Multi-Page Application)구조를 따를거야

아래 피그마 시안을 철저히 분석해서 각 페이지를 완성도 있게 코딩해 줘
시안 주소:
https://www.figma.com/design/Bd0F8xQyiBdNV6aib1Fgu5/ARC---Bend-your-type---%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0-?node-id=5-157&t=qpFYzY8QJ2kgtEi7-4
[개발 규칙 및 요구사항]
1.엄격한 레거시 MPA 구조 유지 (라우터 금지)Single Page Application(SPA) 라이브러리나 JS 기반의 가상 라우터를 절대 사용하지 않습니다.메뉴 이동, 상세 보기, 글쓰기 완료 등 모든 화면 전환은 실제 개별 HTML 파일 간의 물리적인 이동(<a href="페이지.html">)으로 처리합니다.
2.Vanilla JS 기반의 텍스트 곡선(Arc) 렌더링 엔진 구현외부 폰트/그래픽 라이브러리 없이 순수 자바스크립트 DOM 조작만으로 실시간 텍스트 곡선을 구현합니다.입력된 텍스트의 각 글자를 <span> 태그로 분리하고, 슬라이더 값(반지름, 각도, 방향)에 따라 수학적 좌표(Trigonometry: Sin, Cos) 및 transform: rotate() translate() 속성을 계산하여 실시간으로 렌더링합니다.
3.피그마 시안 UI/UX의 철저한 컴포넌트화 (CSS Flex/Grid)시안에 명시된 다크/라이트 테마 인스턴스, 사이드바 컨트롤러, 메인 캔버스, 커뮤니티 피드 그리드, 댓글 창을 시각적으로 정확히 재현합니다.Tailwind CSS 같은 프레임워크 대신 유지보수가 쉬운 Vanilla CSS(Flexbox, CSS Grid, CSS Variables)를 활용하여 정교한 UI 레이아웃을 구성합니다.
4.웹 스토리지(LocalStorage)를 활용한 페이지 간 데이터 동기화서버가 없는 환경이므로, 메인 페이지에서 제작한 곡선 텍스트 디자인 데이터(텍스트 내용, 폰트 종류, 곡률 수치 등)를 localStorage에 저장합니다.커뮤니티 목록 페이지(community.html)와 상세 페이지(detail.html)에서 해당 데이터를 읽어와 사용자가 방금 만든 디자인이 게시판에 등록된 것처럼 심리스하게 연동합니다.
