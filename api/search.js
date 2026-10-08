export default async function handler(req,res){
  const keyword=req.query.keyword||'30th CELEBRATION';
  const body=new URLSearchParams({
    currentPage:'1', pageCnt:'20', sortType:'SALE', saleProductYn:'N', searchWord:keyword
  });
  const r=await fetch('https://everse.emart24.co.kr/stock/stock/search',{
    method:'POST',
    headers:{'content-type':'application/x-www-form-urlencoded; charset=UTF-8','x-requested-with':'XMLHttpRequest'},
    body
  });
  const text=await r.text();
  if(!r.ok) return res.status(r.status).json({error:'Emart24 상품검색 HTTP '+r.status,raw:text});
  try{return res.status(200).json(JSON.parse(text));}
  catch(e){return res.status(502).json({error:'Emart24 상품검색 응답 해석 실패',raw:text.slice(0,500)})}
}