# kidBob

---

https://www.data.go.kr/data/15109168/openapi.do#/

> 해당 API + 네이버 지도 API 를 활용한 급식카드 가맹점(사용처) 지도 제공 웹

## 주요 기능

- 행정 구역별 급식 카드 가맹점 위치 마커로 표시
- 가맹점 정보를 리스트로 제공
- 리스트의 가맹점을 클릭하면 해당하는 마커를 zoomin
- 가맹점 검색 기능
- 가맹점 분류별 필터링 기능

<br><br>

## 사용기술

| 역할       | 종류                                                                                                                                                                                                           | 사용이유                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 언어       | ![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=javascript&logoColor=white)                                                                                              | Type 안정성을 제공해서 버그를 줄여줌                                                                                          |
| 프레임워크 | ![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)                                                                                                             | 다른 프레임워크에 비해 방대한 커뮤니티를 가지고 있어 문제가 생겼을때 해답을 찾기 수월함                                       |
| 스타일     | ![Styled Components](https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)                                                                           | 컴포넌트와 스타일 코드가 같은 위치에 있어 유지보수에 용이함                                                                   |
| 상태관리   | ![Zustand](https://img.shields.io/badge/Zustand-452319?style=for-the-badge&logoColor=white)                                                                                                                    | 많은 보일러플레이트가 필요하지 않아 간결하고 직관적이며 컴포넌트가 필요한 부분만 구독하기 때문에 불필요한 리렌더링이 최소화됨 |
| 배포       | ![Amazon S3](https://img.shields.io/badge/AmazonS3-569a31?style=for-the-badge&logo=AmazonS3&logoColor=white) ![CloudFront](https://img.shields.io/badge/CloudFront-ff9900?style=for-the-badge&logoColor=white) | 자동화되지 않은 배포와 CDN을 경험하기 위해서 사용                                                                             |

## 사용 api

<img src="https://img.shields.io/badge/공공데이터-1A5EBD">
<img src="https://img.shields.io/badge/네이버지도 api-03C75A">
