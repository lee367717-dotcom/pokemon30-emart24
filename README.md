# 이마트24 포켓몬 30주년 실재고 조회기

이 버전은 브라우저가 이마트24 API를 직접 호출하지 않고 Vercel 서버리스 API를 거쳐 호출하도록 만든 개인용 버전입니다.

## 사용 순서
1. Vercel에 이 폴더를 배포
2. 사이트 접속
3. `30th CELEBRATION` 상품검색
4. 상품 선택
5. `당산` 등으로 매장 검색
6. 매장 선택 후 `선택 매장 재고조회`

## 핵심 API
- 상품검색: `POST https://everse.emart24.co.kr/stock/stock/search`
- 재고 준비: `POST https://everse.emart24.co.kr/api/stock/v1/search/keyword`
- 매장별 재고: `GET https://everse.emart24.co.kr/api/stock/v2/stock-search/store`

주의: 이마트24 전산 재고와 실제 진열 재고가 항상 일치한다고 보장할 수는 없습니다. 또한 과도한 반복조회는 피하세요.
