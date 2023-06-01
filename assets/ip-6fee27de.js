import{_ as C,u as E,r as m,a as N,o as D,b as I,c as a,d as P,e as G,f as e,w as t,g as n,t as f,h as l,i as L,j as o,k as O,p as T,l as q}from"./index-8af0f0e7.js";import{g as v}from"./request-0e592bd1.js";const g=r=>(T("data-v-f668b4ef"),r=r(),q(),r),A={style:{"margin-top":"1.5rem"}},R=g(()=>n("h1",{class:"banner_title"},"在线工具箱",-1)),W=g(()=>n("p",{style:{"margin-top":"0px"},class:"banner_text"},"识别本机IP地址",-1)),j={style:{"text-align":"center"}},z={class:"ip"},F={style:{"text-align":"center"}},H=g(()=>n("u",null,"curl https://tool.mintimate.cn/getIP",-1)),$={style:{"text-align":"center"}},J=["src"],K={__name:"ip",setup(r){E({title:"在线工具箱-By Mintimate",meta:[{name:"description",content:"Mintimate的在线工具箱，致力于打造便民服务。为开发者、Minecraft游戏爱好者，创建方便的在线工具"},{name:"keywords",content:"在线工具箱,便民工具,站点工具,开发者,开发者实用工具,IP查询,图片处理,Base64转码,字数统计,字符统计,MC服务器检测,Minecraft服务器检测"}]});let i=m("...加载中..."),s=N({display:!1,area:"",remark:""});D(()=>{w()});let y=m(""),x=m("");const w=async()=>{let c=await I(()=>import("./404-127cc900.js"),[]),_=await I(()=>import("./curlGetIPDemo-2df3f2d6.js"),[]);y.value=c.default,x.value=_.default};v("/IP/getBase").then(c=>{i.value=c.data});function b(c){v("/IP/getInfo/"+c.toString()).then(_=>{s.display=!0,s.area=_.data.mainInfo,s.remark=_.data.appendInfo})}return(c,_)=>{const h=a("a-tag"),d=a("a-space"),k=a("icon-code-square"),B=a("a-button"),p=a("a-typography-title"),u=a("a-typography-paragraph"),M=a("a-typography"),S=a("a-col"),V=a("a-row");return P(),G("div",A,[e(V,{class:"container"},{default:t(()=>[e(S,{class:"box"},{default:t(()=>[R,W,n("h3",j,[n("code",z,f(l(i)),1)]),n("div",F,[l(s).display?(P(),L(d,{key:0},{default:t(()=>[e(h,{color:"orange"},{default:t(()=>[o(f(l(s).area),1)]),_:1}),e(h,{color:"arcoblue"},{default:t(()=>[o(f(l(s).remark),1)]),_:1})]),_:1})):O("",!0)]),e(d,{style:{"margin-top":"1.5rem"},class:"full_width",direction:"vertical"},{default:t(()=>[e(B,{onClick:_[0]||(_[0]=Q=>b(l(i))),disabled:l(s).display,status:"success",type:"primary",size:"large",long:""},{icon:t(()=>[e(k)]),default:t(()=>[o("查看IP详细信息")]),_:1},8,["disabled"])]),_:1}),e(M,{style:{"text-align":"left",margin:"0.5rem"}},{default:t(()=>[e(p,{heading:5},{default:t(()=>[o(" 如何在终端上直接查看本机IP？ ")]),_:1}),e(u,{"copy-text":"curl https://tool.mintimate.cn/getIP",copyable:""},{default:t(()=>[o(" 如果你是macOS用户或者Linux用户；在已经安装了curl情况下，可以直接在终端内输入： "),H]),_:1}),e(p,{heading:5},{default:t(()=>[o(" 如何在Windows的Powershell上查看本机IP？ ")]),_:1}),e(u,null,{default:t(()=>[o(" Windows无法原生Powershell发送Get/Post请求，所以无法使用本接口。 ")]),_:1}),e(p,{heading:5},{default:t(()=>[o(" 是否存在调取次数限制？ ")]),_:1}),e(u,null,{default:t(()=>[o(" 本站的任何接口，均存在调取限制：当天单IP调取次数过于频繁，将封禁IP，避免资源被滥用。 ")]),_:1})]),_:1})]),_:1})]),_:1}),n("div",$,[e(d,null,{default:t(()=>[n("img",{src:l(y),style:{width:"100%"}},null,8,J)]),_:1})])])}}},Y=C(K,[["__scopeId","data-v-f668b4ef"]]);export{Y as default};
