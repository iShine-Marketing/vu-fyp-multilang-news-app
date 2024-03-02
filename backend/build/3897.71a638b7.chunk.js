"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[3897],{33897:(ss,I,s)=>{s.d(I,{ProtectedCreatePage:()=>G});var a=s(92132),W=s(21272),c=s(38413),T=s(55356),M=s(83997),g=s(85963),U=s(4198),d=s(94061),h=s(30893),K=s(90151),A=s(68074),f=s(7537),j=s(5287),x=s(21610),r=s(2291),y=s(46270),u=s(22238),p=s(61535),S=s(54894),C=s(17703),$=s(71389),N=s(63891),O=s(12083),n=s(93805),F=s(81639),as=s(15126),ts=s(63299),_s=s(67014),os=s(59080),rs=s(79275),ns=s(14718),Es=s(82437),is=s(5790),ds=s(35223),es=s(5409),ls=s(74930),Ms=s(2600),Ps=s(48940),Ds=s(41286),Os=s(51187),ms=s(56336),gs=s(39404),hs=s(58692),As=s(54257),Cs=s(501),Rs=s(57646),vs=s(23120),Ls=s(44414),Bs=s(25962),Is=s(14664),Ws=s(42588),cs=s(90325),Ts=s(62785),Us=s(87443),Ks=s(41032),fs=s(22957),js=s(93179),xs=s(73055),ys=s(15747),us=s(85306),ps=s(77965),Ss=s(26509),$s=s(84624),Ns=s(71210),Fs=s(32058),Vs=s(81185),zs=s(82261),Ys=s(412),Gs=s(94710);const V=O.Ik().shape({name:O.Yj().required(r.iW.required),description:O.Yj().required(r.iW.required)}),z=()=>{const t=(0,C.W5)("/settings/roles/duplicate/:id"),e=(0,r.hN)(),{lockApp:H,unlockApp:Q}=(0,r.MA)(),{formatMessage:_}=(0,S.A)(),{replace:Z}=(0,C.W6)(),m=W.useRef(null),{trackUsage:R}=(0,r.z1)(),{_unstableFormatAPIError:v,_unstableFormatValidationErrors:L}=(0,r.wq)(),P=t?.params.id??null,{isLoading:J,data:B}=(0,n.A)({role:P??""}),{data:X,isLoading:b}=(0,n.B)({id:P},{skip:!P,refetchOnMountOrArgChange:!0}),[k]=(0,n.D)(),[w]=(0,n.E)(),q=async(D,E)=>{try{H(),R(P?"willDuplicateRole":"willCreateNewRole");const o=await k(D);if("error"in o){(0,n.x)(o.error)&&o.error.name==="ValidationError"?E.setErrors(L(o.error)):e({type:"warning",message:v(o.error)});return}const{permissionsToSend:l}=m.current?.getPermissions()??{};if(o.data.id&&Array.isArray(l)&&l.length>0){const i=await w({id:o.data.id,permissions:l});if("error"in i){(0,n.x)(i.error)&&i.error.name==="ValidationError"?E.setErrors(L(i.error)):e({type:"warning",message:v(i.error)});return}}e({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),Z(`/settings/roles/${o.data.id}`)}catch{e({type:"warning",message:{id:"notification.error"}})}finally{Q()}};return(0,a.jsxs)(c.g,{children:[(0,a.jsx)(r.x7,{name:"Roles"}),(0,a.jsx)(p.l1,{initialValues:{name:"",description:`${_({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,u.A)(new Date,"PPP")}`},onSubmit:q,validationSchema:V,validateOnChange:!1,children:({values:D,errors:E,handleReset:o,handleChange:l,isSubmitting:i})=>(0,a.jsx)(r.lV,{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(T.Q,{primaryAction:(0,a.jsxs)(M.s,{gap:2,children:[(0,a.jsx)(g.$,{variant:"secondary",onClick:()=>{o(),m.current?.resetForm()},size:"L",children:_({id:"app.components.Button.reset",defaultMessage:"Reset"})}),(0,a.jsx)(g.$,{type:"submit",loading:i,size:"L",children:_({id:"global.save",defaultMessage:"Save"})})]}),title:_({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:_({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,a.jsx)(x.N,{as:$.k2,startIcon:(0,a.jsx)(y.A,{}),to:"/settings/roles",children:_({id:"global.back",defaultMessage:"Back"})})}),(0,a.jsx)(U.s,{children:(0,a.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,a.jsx)(d.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,a.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,a.jsxs)(M.s,{justifyContent:"space-between",children:[(0,a.jsxs)(d.a,{children:[(0,a.jsx)(d.a,{children:(0,a.jsx)(h.o,{fontWeight:"bold",children:_({id:"global.details",defaultMessage:"Details"})})}),(0,a.jsx)(d.a,{children:(0,a.jsx)(h.o,{variant:"pi",textColor:"neutral600",children:_({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,a.jsx)(Y,{children:_({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0})})]}),(0,a.jsxs)(K.x,{gap:4,children:[(0,a.jsx)(A.E,{col:6,children:(0,a.jsx)(f.k,{name:"name",error:E.name&&_({id:E.name}),label:_({id:"global.name",defaultMessage:"Name"}),onChange:l,required:!0,value:D.name})}),(0,a.jsx)(A.E,{col:6,children:(0,a.jsx)(j.T,{label:_({id:"global.description",defaultMessage:"Description"}),id:"description",error:E.description&&_({id:E.description}),onChange:l,children:D.description})})]})]})}),!J&&!b&&B?(0,a.jsx)(d.a,{shadow:"filterShadow",hasRadius:!0,children:(0,a.jsx)(F.P,{isFormDisabled:!1,ref:m,permissions:X,layout:B})}):(0,a.jsx)(d.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,a.jsx)(r.Bl,{})})]})})]})})})]})},Y=N.Ay.div`
  border: 1px solid ${({theme:t})=>t.colors.primary200};
  background: ${({theme:t})=>t.colors.primary100};
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  color: ${({theme:t})=>t.colors.primary600};
  border-radius: ${({theme:t})=>t.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,G=()=>{const t=(0,n.j)(e=>e.admin_app.permissions.settings?.roles.create);return(0,a.jsx)(r.kz,{permissions:t,children:(0,a.jsx)(z,{})})}}}]);
