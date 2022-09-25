# Project Threemonths

<br>
<br>
<br>

## 0. 프로젝트 결과물

- http://threemonths.net
  (실제 서비스 중인 웹 페이지 입니다.)

---

<br>
<br>
<br>

## 1. 프로젝트 소개

- `실제로 운영 중인` 베이커리 샵의 홈페이지 제작하여 실제 서비스 제공

---

<br>
<br>
<br>

## 2. Threemonths 메인 서비스

- 카카오톡 소셜 로그인을 이용하여 간편한 로그인 서비스 제공
- 뜨리먼뜨 베이커리의 빵을 원하는 카페들과의 납품 제휴 신청서 서비스 제공
- 케이크 픽업 서비스 신청서 제공
- 행사장 등 기업 대량 답례품 신청서 제공
- 신청서 등록 시 카카오톡 알림 서비스 제공 (2차 기획 예정)

---

<br>
<br>
<br>

## 3. 프로젝트 참여 인원

- Frontend
  - 장형원 (https://github.com/HyungwonJang0327)
  - 이현정 (https://github.com/hyunny123)
- Backend
  - 김영빈 (https://github.com/tbhumblestar)

---

<br>
<br>
<br>

## 4. 프로젝트 기간

1. 1차 기획 및 개발 / 220629 ~ 220815
2. 2차 기획 및 개발 / 220817 ~

---

<br>
<br>
<br>

## 5. 프로젝트 Repository

- Frontend

https://github.com/HyungwonJang0327/threemonth-project-frontend

- Backend

https://github.com/tbhumblestar/threemonths_backend

#### private Repository 일 수 있습니다.

---

<br>
<br>
<br>

## 6. 프로젝트 기술 스택

- 공통
  - AWS S3
  - Git / Github
  - Postman
  - REST API
  - 협업 툴 - Notion
- Frontend
  - Javascript
  - HTML5 / CSS3
  - Styled-components
  - React.js
  - AWS Route 53
- Backend
  - Python
  - Django Rest FramWork
  - MYSQL
  - AWS EC2 / RDS

---

<br>
<br>
<br>

## 7. 본인 구현 사항

### 장형원

- 홈페이지 구현 사항
  - 상품 / 패키지 상세 페이지
    - 제품 타입이 cake인지 bread인지를 구별해 예약하기 버튼을 신청서 작성과 배달의 민족 링크로 구분
    - 현재 판매중이 아닌 cake의 경우 alert를 띄워 신청서 작성을 차단
  - 신청서 작성 페이지
    - 서버 측과 소통하여 최적화를 같이 하며 최대 입력 글자 수를 맞춤
    - POST 요청을 통해 신청서 데이터 서버에 저장
  - 신청서 수정 페이지
    - 기존 신청서에 작성되었던 데이터를 받아와 초기값으로 넣고, 새로운 값이 있다면 handling하여 업데이트 후 서버에 PATCH 요청을 보냄
    - staff 권한이 있는 유저인지를 판별하여 신청서의 상태(status)를 변경할 수 있도록 구현
  - 신청서 리스트 페이지
    - styled-components props를 이용하여 개별 신청서 상태가 바뀜에 따라 font-color가 바뀌도록 구현
  - 로그인 페이지
    - Nav 등 페이지 내부에 퍼져 있는 로그인 버튼에 location path값을 임시로 localstorage에 저장하여 로그인 후 기존에 보던 페이지로 이동토록 구현
    - sessionStorage와 localStorage 차이점을 구분하여 token 값과 nickname 값을 localStorage에 저장
  - URL로의 직접적인 접근 차단
    - useNavigate의 두번 째 인자인 state를 활용하여 정해진 버튼으로 Router가 이동되는 것이 아닌 URL 조작으로 인한 Router 변경에는 404 Not Found Component를 띄워 뒤로 가기를 유도.
  - useEffect의 특성인 첫번 째 렌더링 시 데이터가 set 함수에 저장되지 않아 생기는 에러들을 방지하기 위해 setState 함수의 초기값을 설정하고 데이터가 없을 시 Loading Component를 노출
  - 미디어 쿼리를 이용하여 2560px 부터 320px 까지 CSS 반응형 구현
- AWS 구현 사항
  - S3 버킷을 이용하여 빌드된 정적 파일을 업로드 하고, Route 53을 이용하여 도메인을 구매 후 S3 버킷에 호스팅

### 이현정

- 홈페이지 구현 사항
  - 메인페이지
    - carousel
    - grid를 custom props로 특정값을 내려준 후, 그 값을 가지고 media query를 사용해 반응형 사이즈 별로 폰트 컬러를 컨트롤 했다.
    - grid의 사진을 클릭시 srollIntoView()의 메소드를 사용하여 원하는 내용이 있는 위치로 이동 구현
    - list는 cake와 제과로 나눠 구현하였으며, image클릭시 individualpage로 이동
    - product list는 flex-wrap을 이용하여 flex-item 요소들이 내부 로직에 의해 분할 되어 여러행에 걸쳐 배치되도록 구현
  - 신청서 상세페이지
    - url로의 직접적인 접근 차단
      - useNavigate의 두번째 인자인 state를 활용하여 정해진 버튼으로 Router 이동되는 것이 아닌 url 직접 입력하여 변경시 404 Not Found Error 띄어서 뒤로 가기 유도.
    - 수정버튼 클릭시 staff 권한을 가진 경우 아무조건 없이 수정 페이지로 이동하고, staff가 아닐시 신청서의 state를 확인 후 not_confirmed 상태가 아니라면 수정불가토록 함.
    - 삭제버튼 클릭시 state가 not_confirmed 일시 다시한번 확인후 삭제 실행하고, 아니라면 staff 권한 확인후 신청서 상태를 상기 시키고 삭제여부를 물어보게 구현
  - 미디어 쿼리를 이용하여 2560px 부터 320px 까지 CSS 반응형 구현
  - AWS 구현 사항
    - S3 버킷을 이용하여 빌드된 정적 파일을 업로드하고, Route 53을 이용하여 도메인을 구매 후 S3 버킷에 호스팅

---

<br>
<br>
<br>
