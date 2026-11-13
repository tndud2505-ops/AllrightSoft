const products = [
  {id:'k-stock',name:'K Stock',description:'국내 주식을 종목·테마로 찾고, 가격 차트와 보조지표를 함께 살펴보세요. 여러 종목을 나란히 비교하고 관심 있는 흐름을 탐색할 수 있습니다.',url:'https://kstockclock.com/',images:[['final/k-stock-chart-20261113.png','K Stock 실제 LG전자 상세 차트와 이동평균선·거래량·공시일 화면']]},
  {id:'used-pick-web',name:'USED PICK',description:'여러 중고 거래 사이트의 PC 부품 매물을 모델별로 모아 비교하세요. 판매 구성과 제조사로 좁혀 보고, 표시 가격과 PC 구성 비용을 살펴볼 수 있습니다.',url:'https://used-pick.com/',images:[['final/used-pick-web-20261113.png','USED PICK의 Intel Core i5-12400F 현재 매물·표시 가격 비교 화면']]},
  {id:'train-gallery',name:'Train Gallery',description:'매일 찍은 운동 영상을 달력에 기록하고, 여러 영상을 하나의 브이로그로 이어 보세요. 구간을 편집하고 자막과 스티커를 더해 오늘의 운동을 남길 수 있습니다.',url:'https://play.google.com/store/apps/details?id=com.trainingapp.traingallery&hl=ko&gl=KR',format:'phones',images:[['final/train-gallery-calendar-20261106.png','Train Gallery 실제 운동 달력 화면'],['final/train-gallery-vlog-20261106.png','Train Gallery 실제 브이로그 타임라인·자막·스티커 편집 화면']]},
  {id:'woori-journey',name:'우리여정',description:'함께한 날의 사진과 이야기를 가족 공간에 모으세요. 날짜별 기록은 달력에서, 함께 다녀온 장소는 추억 지도에서 다시 찾아볼 수 있습니다.',url:'https://dulharu-dev.tndud2503.workers.dev/?lang=ko-KR',format:'promo',images:[['final/woori-journey-feature-20261112.png','우리여정 사진 일기와 추억 지도 소개. 합성 샘플 기록을 사용한 홍보 이미지.']],secondary:{url:'https://github.com/tndud2505-ops/dulharu-android/releases/download/v0.2.20-journey.1/woori-journey-v0.2.20.apk',label:'Android 시험판 다운로드'},note:'Android는 정식 출시 심사 중이며, 시험판을 먼저 이용할 수 있습니다.'},
  {id:'used-pick-app',name:'USED PICK 앱',description:'휴대폰에서 중고 PC 부품의 매물과 가격을 찾아보세요. USED PICK의 모델 검색과 거래 사이트별 비교를 Android에서도 이어서 이용할 수 있도록 준비하고 있습니다.',url:'https://used-pick.com/?source=app',format:'phones',images:[['final/used-pick-android-picky-20261113.png','USED PICK Android의 픽이 캐릭터와 실제 검색 화면을 사용한 스토어 소개 이미지'],['final/used-pick-android-search-20261112.png','USED PICK 실제 Android TWA 검색 화면을 사용한 기능 소개 이미지']],note:'Google Play 심사 중입니다. 서비스로 가기를 누르면 웹에서 먼저 이용할 수 있습니다.'},
  {id:'jira',name:'Jira Obsidian',description:'Epic·Task·Subtask를 트리와 맵으로 펼쳐 보고, 업무 사이의 연결 관계를 살펴보세요. 선택한 이슈의 설명과 댓글을 확인하고 Jira 원문으로 바로 이동할 수 있습니다.',url:'https://marketplace.atlassian.com/apps/1923219004/obsidian-context-map-for-jira',format:'dark',images:[['jira-context-map-20260909.png','Jira 예시 프로젝트의 이슈 트리와 관계 맵']]},
  {id:'virtual-mcu',name:'Virtual MCU',description:'브라우저에서 C 펌웨어와 MCU·모터 회로의 제어 흐름을 연결해 보세요. 핀과 레지스터, H-Bridge의 신호 경로를 따라가며 임베디드 제어를 실습하는 환경입니다.',url:'https://virtual-mcu-training-env.pages.dev/',images:[['final/virtual-mcu-20261113.png','Virtual MCU의 모터 회로와 MCU 핀·레지스터 탐색 화면']]},
  {id:'chat-analysis',name:'대화 분석',description:'카카오톡에서 내보낸 TXT를 가져와 대화의 통계와 표현, 이야기의 연결을 살펴보세요. 분석 결과와 원문 근거를 함께 확인하며 대화의 흐름을 돌아볼 수 있습니다.',url:'https://saigyeol-chat-analysis.tndud2503.workers.dev/',images:[['chat-analysis-sample-20260908.png','실제 개인 대화 대신 가상 대화로 구성한 통계·대화 연결 예시']],note:'개발 중인 서비스이며, 감정이나 관계를 확정하는 진단 도구는 아닙니다.'},
  {id:'coteepet',name:'COTEEPET',description:'작업 화면에 함께할 Codex Pet 캐릭터를 찾아보세요. 캐릭터별 동작을 미리 확인하고 마음에 드는 패키지를 내려받을 수 있습니다.',url:'https://coteepet.com/ko/',images:[['coteepet-20261011.png','COTEEPET의 캐릭터 검색과 동작 미리보기 카탈로그']]},
  {id:'emotown',name:'EMOTOWN',description:'디자인과 콘텐츠에 사용할 이모티콘 세트를 둘러보세요. 세트별 이미지를 살펴보고 마음에 드는 묶음을 내려받을 수 있습니다.',url:'https://emotown.com/ko/',images:[['emotown-20261011.png','EMOTOWN의 이모티콘 세트 검색과 갤러리']]}
];
const indexButtons=[...document.querySelectorAll('[data-product]')];
const stage=document.querySelector('.product-stage');
const media=document.querySelector('.product-media');
const mediaImages=document.querySelector('.media-images');
const heading=document.querySelector('.product-heading');
const primaryLink=document.querySelector('#product-link');
const secondaryLink=document.querySelector('#product-secondary-link');
const note=document.querySelector('#product-note');
const dialog=document.querySelector('.image-dialog');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
const finePointer=matchMedia('(hover:hover) and (pointer:fine)');
const navMenus=[...document.querySelectorAll('.nav-menu')];
let activeId='k-stock';
let transitionId=0;
let hoverTimer;

function productImages(product){
  return product.images.map(([file,alt])=>{
    const img=new Image();
    img.src='assets/'+file;
    img.alt=alt;
    img.decoding='async';
    return img;
  });
}
function updateProduct(product,images){
  activeId=product.id;
  stage.dataset.activeProduct=product.id;
  document.querySelector('#product-title').textContent=product.name;
  document.querySelector('#product-description').textContent=product.description;
  primaryLink.href=product.url;
  primaryLink.setAttribute('aria-label',product.name+' · 서비스로 가기, 새 창');
  secondaryLink.hidden=!product.secondary;
  if(product.secondary){secondaryLink.href=product.secondary.url;secondaryLink.textContent=product.secondary.label;}
  else secondaryLink.removeAttribute('href');
  note.hidden=!product.note;
  note.textContent=product.note||'';
  media.dataset.format=product.format||'screen';
  media.setAttribute('aria-label',product.name+' 제품 화면 크게 보기');
  mediaImages.replaceChildren(...images);
  indexButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.product===product.id)));
  document.querySelector('#product-announcement').textContent=product.name+' 선택됨';
}
async function activateProduct(id){
  const currentTransition=++transitionId;
  if(id===activeId){
    [heading,mediaImages].forEach(element=>element.getAnimations().forEach(animation=>animation.cancel()));
    return;
  }
  const product=products.find(item=>item.id===id);
  if(!product)return;
  const images=productImages(product);
  await Promise.allSettled(images.map(img=>img.decode()));
  if(currentTransition!==transitionId)return;
  [heading,mediaImages].forEach(element=>element.getAnimations().forEach(animation=>animation.cancel()));
  if(reducedMotion.matches){updateProduct(product,images);return;}
  const out=mediaImages.animate([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-9px)'}],{duration:120,easing:'ease-in',fill:'forwards'});
  await out.finished.catch(()=>{});
  if(currentTransition!==transitionId){out.cancel();return;}
  updateProduct(product,images);
  out.cancel();
  heading.animate([{opacity:.25,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],{duration:280,easing:'cubic-bezier(.2,.7,.2,1)'});
  mediaImages.animate([{opacity:0,transform:'translateY(15px) scale(.985)'},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:420,easing:'cubic-bezier(.2,.7,.2,1)'});
}
indexButtons.forEach((button,index)=>{
  button.addEventListener('click',()=>{clearTimeout(hoverTimer);activateProduct(button.dataset.product);});
  button.addEventListener('pointerenter',()=>{
    if(!finePointer.matches)return;
    clearTimeout(hoverTimer);
    hoverTimer=setTimeout(()=>activateProduct(button.dataset.product),130);
  });
  button.addEventListener('pointerleave',()=>clearTimeout(hoverTimer));
  button.addEventListener('keydown',event=>{
    const directions={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1};
    const visibleButtons=indexButtons.filter(item=>!item.hidden);
    const visibleIndex=visibleButtons.indexOf(button);
    let target;
    if(event.key==='Home')target=0;
    else if(event.key==='End')target=visibleButtons.length-1;
    else if(event.key in directions)target=(visibleIndex+directions[event.key]+visibleButtons.length)%visibleButtons.length;
    else return;
    event.preventDefault();
    visibleButtons[target].focus();
    activateProduct(visibleButtons[target].dataset.product);
  });
});
navMenus.forEach(menu=>{
  menu.addEventListener('toggle',()=>{if(menu.open)navMenus.forEach(other=>{if(other!==menu)other.open=false;});});
  menu.querySelectorAll('[data-target]').forEach(button=>button.addEventListener('click',()=>{
    clearTimeout(hoverTimer);
    activateProduct(button.dataset.target);
    menu.open=false;
    menu.querySelector('summary').focus();
  }));
});
document.addEventListener('click',event=>{if(!event.target.closest('.nav-menu'))navMenus.forEach(menu=>menu.open=false);});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape')navMenus.forEach(menu=>{if(menu.open){menu.open=false;menu.querySelector('summary').focus();}});
});
media.addEventListener('pointermove',event=>{
  if(reducedMotion.matches||!finePointer.matches)return;
  const rect=media.getBoundingClientRect();
  mediaImages.style.setProperty('--tilt-x',((.5-(event.clientY-rect.top)/rect.height)*2.8).toFixed(2)+'deg');
  mediaImages.style.setProperty('--tilt-y',(((event.clientX-rect.left)/rect.width-.5)*3.6).toFixed(2)+'deg');
});
media.addEventListener('pointerleave',()=>{
  mediaImages.style.setProperty('--tilt-x','0deg');
  mediaImages.style.setProperty('--tilt-y','0deg');
});
media.addEventListener('click',()=>{
  const product=products.find(item=>item.id===activeId);
  if(typeof dialog.showModal!=='function'){window.open('assets/'+product.images[0][0],'_blank','noopener,noreferrer');return;}
  document.querySelector('#dialog-title').textContent=product.name;
  const container=document.querySelector('.dialog-images');
  container.dataset.count=String(product.images.length);
  container.replaceChildren(...productImages(product));
  dialog.showModal();
  dialog.querySelector('.dialog-close').focus();
});
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>media.focus());
dialog.addEventListener('click',event=>{
  if(event.target!==dialog)return;
  const r=dialog.getBoundingClientRect();
  if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();
});
if(!reducedMotion.matches){
  stage.animate([{opacity:.35,transform:'translateY(14px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.2,.7,.2,1)'});
  const contact=document.querySelector('.contact');
  const observer=new IntersectionObserver(entries=>{
    if(entries.some(entry=>entry.isIntersecting)){
      contact.animate([{opacity:.25,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:500,easing:'ease-out'});
      observer.disconnect();
    }
  },{threshold:.3});
  observer.observe(contact);
}
