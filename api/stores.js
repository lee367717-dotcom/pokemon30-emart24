export default async function handler(req,res){
  const search=req.query.search||'당산';
  const u='https://emart24.co.kr/api1/store?page=1&search='+encodeURIComponent(search);
  const r=await fetch(u,{headers:{'user-agent':'Mozilla/5.0'}});
  const j=await r.json();
  if(!r.ok || j.error) return res.status(r.status||502).json({error:'Emart24 매장검색 실패',raw:j});
  res.status(200).json(j);
}