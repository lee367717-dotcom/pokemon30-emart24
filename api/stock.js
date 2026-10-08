export default async function handler(req,res){
  const pluCd=req.query.pluCd;
  const bizNoArr=req.query.bizNoArr;
  if(!pluCd||!bizNoArr) return res.status(400).json({error:'pluCd와 bizNoArr가 필요합니다.'});
  const prep=await fetch('https://everse.emart24.co.kr/api/stock/v1/search/keyword',{
    method:'POST',
    headers:{'content-type':'application/x-www-form-urlencoded; charset=UTF-8','x-requested-with':'XMLHttpRequest'},
    body:new URLSearchParams({pluCd,searchPage:'STOCK_SEARCH_SERVICE'})
  });
  if(!prep.ok) return res.status(prep.status).json({error:'재고조회 준비단계 실패: HTTP '+prep.status});
  const u='https://everse.emart24.co.kr/api/stock/v2/stock-search/store?searchPluCode='+encodeURIComponent(pluCd)+'&bizNoArr='+encodeURIComponent(bizNoArr);
  const r=await fetch(u,{headers:{'x-requested-with':'XMLHttpRequest'}});
  const j=await r.json();
  if(!r.ok) return res.status(r.status).json({error:'이마트24 재고조회 HTTP '+r.status,raw:j});
  res.status(200).json(j);
}