import _0x3aa460 from'node-fetch';import _0xa005b8 from'axios';import{load}from'cheerio';const handler=async(_0x4d8ce0,{text:_0x147aa7,usedPrefix:_0x14aaf8,command:_0x402e72,conn:_0x577431})=>{if(!_0x147aa7)throw'*[❗]\x20𝙸𝙽𝙶𝚁𝙴𝚂𝙰\x20𝙴𝙻\x20𝙽𝙾𝙼𝙱𝚁𝙴\x20𝙳𝙴\x20𝙰𝙻𝙶𝚄𝙽𝙰\x20𝙿𝙴𝙻𝙸𝙲𝚄𝙻𝙰\x20𝙰\x20𝙱𝚄𝚂𝙲𝙰𝚁*';let _0x5e0c22,_0x20d39c;try{_0x5e0c22=await searchC(_0x147aa7),_0x20d39c='https://cinefilosoficial.com/wp-content/uploads/2021/07/cuevana.jpg';}catch{_0x5e0c22=await searchP(_0x147aa7),_0x20d39c='https://elcomercio.pe/resizer/RJM30xnujgfmaODGytH1rRVOrAA=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/BJ2L67XNRRGHTFPKPDOEQ2AH5Y.jpg';}if(_0x5e0c22=='')throw'*[❗]\x20𝙽𝙾\x20𝚂𝙴\x20𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾\x20𝙽𝙸𝙽𝙶𝚄𝙽𝙰\x20𝙿𝙴𝙻𝙸𝙲𝚄𝙻𝙰*';const _0x2598b5=await _0x5e0c22['map'](_0x2c03b2=>'*🎬\x20•\x20Nombre:*\x20'+_0x2c03b2['title']+'\x0a*🍿\x20•\x20Url:*\x20'+_0x2c03b2['link'])['join']`\n\n───────────────\n\n`,_0x5068a1='*💫\x20•\x20Bloqueador\x20de\x20anuncios\x20recomendado:*\x20Block\x20This\x0a*⛨\x20•\x20Link:*\x20https://block-this.com/block-this-latest.apk\x0a\x0a≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣\x0a\x0a';_0x577431['sendMessage'](_0x4d8ce0['chat'],{'image':{'url':_0x20d39c},'caption':_0x5068a1+_0x2598b5},{'quoted':_0x4d8ce0});};handler['command']=['cuevana','pelisplus'],handler['register']=!![],handler['group']=!![];export default handler;const safeLoad=async(_0x1cf6cd,_0x1cc316={})=>{try{const {data:_0x24cf84}=await _0xa005b8['get'](_0x1cf6cd,_0x1cc316),_0x2fb007=load(_0x24cf84);return _0x2fb007;}catch(_0x8348a5){if(_0x8348a5['response'])throw new Error(_0x8348a5['response']['statusText']);throw _0x8348a5;}};async function searchC(_0x5ade41,_0x1865a2=0x1){const _0x49de5a=await safeLoad('https://cuevana3.mu/page/'+_0x1865a2+'/',{'params':{'s':_0x5ade41}}),_0x2ec601=[];return _0x49de5a('.results-post\x20>\x20article')['each']((_0x1ace62,_0x4b5b7)=>{const _0x31f473=_0x49de5a(_0x4b5b7),_0x727c37=_0x31f473['find']('header\x20>\x20h2')['text'](),_0x5c6c43=_0x31f473['find']('.lnk-blk')['attr']('href');_0x2ec601['push']({'title':_0x727c37,'link':_0x5c6c43});}),_0x2ec601;}async function searchP(_0x3cffc5,_0x3d0b47=0x1){const _0x555a08=await safeLoad('https://pelisplushd.cx/search/',{'params':{'s':_0x3cffc5,'page':_0x3d0b47}}),_0xaaabac=[];return _0x555a08('a[class^=\x27Posters\x27]')['each']((_0x42a4d8,_0x199e91)=>{const _0x12bc9d=_0x555a08(_0x199e91),_0x245683=_0x12bc9d['find']('.listing-content\x20>\x20p')['text'](),_0x499812=_0x12bc9d['attr']('href');_0xaaabac['push']({'title':_0x245683,'link':_0x499812});}),_0xaaabac;}