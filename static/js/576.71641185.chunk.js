"use strict";(self.webpackChunkcar_card=self.webpackChunkcar_card||[]).push([[576,322,213,546,899,56,513,599,61,472,401,459,301,126,925,77,897,433,893,502,961,524,46,613,975,926,828,649],{1235:function(n,e,t){t.r(e),t.d(e,{getAdverts:function(){return a},updateAdvert:function(){return c}});var r=t(4165),i=t(5861),o=t(1243);o.Z.defaults.baseURL="https://64ac4c9c9edb4181202f6743.mockapi.io";var a=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e,t,i,a,c=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={params:{limit:c.length>1&&void 0!==c[1]?c[1]:8,page:c.length>0&&void 0!==c[0]?c[0]:1}},(e=c.length>2&&void 0!==c[2]?c[2]:null)&&(t.signal=e),n.next=7,o.Z.get("/adverts",t);case 7:return i=n.sent,a=i.data,n.abrupt("return",a);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.put("/adverts/".concat(e),t);case 2:return i=n.sent,a=i.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},3627:function(n,e,t){t.r(e),t.d(e,{AdvertModal:function(){return s}});var r=t(3433),i=t(4289),o=t(8322),a=t(5975),c=t(2649),l=t(184),s=function(n){var e=n.data,t=e.id,s=e.year,u=e.make,d=e.model,p=e.type,f=e.img,h=e.description,x=e.fuelConsumption,g=e.engineSize,m=e.accessories,b=e.functionalities,v=e.rentalPrice,Z=e.address,y=e.rentalConditions,S=e.mileage,j=y.split("\n").map((function(n){return(0,a.splitStringIntoNumberAndText)(n)}));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Image,{src:f||c,alt:"".concat(u," ").concat(d," ").concat(s),width:"461px",height:"auto"}),(0,l.jsxs)("div",{children:[(0,l.jsxs)(o.TitleBlockWrapper,{children:[(0,l.jsxs)(o.Title,{children:[(0,l.jsxs)("span",{children:[u," "]}),(0,l.jsxs)(o.TitleAccent,{children:[d,", "]}),(0,l.jsx)("span",{children:s})]}),(0,l.jsxs)(o.TagsList,{children:[(0,l.jsx)(o.TagItem,{children:Z.split(",")[1]}),(0,l.jsx)(o.TagItem,{children:Z.split(",")[2]}),(0,l.jsxs)(o.TagItem,{children:["Id: ",t]}),(0,l.jsxs)(o.TagItem,{children:["Year: ",s]}),(0,l.jsxs)(o.TagItem,{children:["Type: ",p]}),(0,l.jsxs)(o.TagItem,{children:["Fuel Consumption: ",x]}),(0,l.jsxs)(o.TagItem,{children:["Engine Size: ",g]})]})]}),(0,l.jsx)(o.Description,{children:h}),(0,l.jsxs)(o.BlockWrapper,{children:[(0,l.jsx)(o.BlockTitle,{children:"Accessories and functionalities:"}),(0,l.jsx)(o.TagsList,{children:[].concat((0,r.Z)(m),(0,r.Z)(b)).map((function(n){return(0,l.jsx)(o.TagItem,{children:n},n)}))})]}),(0,l.jsxs)(o.BlockWrapper,{children:[(0,l.jsx)(o.BlockTitle,{children:"Rental Conditions:"}),(0,l.jsxs)(o.RentalConditionsList,{children:[j.map((function(n){return"object"===typeof n?(0,l.jsxs)(o.RentalConditionsItem,{children:[n.text," ",(0,l.jsx)(o.AccentText,{children:n.number})]},n):(0,l.jsx)(o.RentalConditionsItem,{children:n},n)})),(0,l.jsxs)(o.RentalConditionsItem,{children:["Mileage: ",(0,l.jsx)(o.AccentText,{children:S.toLocaleString("en-US")})]}),(0,l.jsxs)(o.RentalConditionsItem,{children:["Price: ",(0,l.jsx)(o.AccentText,{children:v})]})]})]}),(0,l.jsx)(i.ButtonPrimary,{href:"tel:+380730000000",tag:"a",btnWidth:"auto",btnPadding:"12px 50px",children:"Rental car"})]})]})}},8322:function(n,e,t){t.r(e),t.d(e,{AccentText:function(){return A},BlockTitle:function(){return E},BlockWrapper:function(){return T},Description:function(){return w},Image:function(){return v},RentalConditionsItem:function(){return I},RentalConditionsList:function(){return k},TagItem:function(){return j},TagsList:function(){return S},Title:function(){return Z},TitleAccent:function(){return y},TitleBlockWrapper:function(){return b}});var r,i,o,a,c,l,s,u,d,p,f,h,x=t(168),g=t(225),m=t(8405),b=g.Z.div(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 14px;\n"]))),v=g.Z.img(i||(i=(0,x.Z)(["\n  width: 461px;\n  height: 248px;\n  margin-bottom: 14px;\n  border-radius: 14px;\n  object-fit: cover;\n  object-position: center;\n"]))),Z=g.Z.h2(o||(o=(0,x.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: calc(24 / 18);\n"]))),y=g.Z.span(a||(a=(0,x.Z)(["\n  color: ",";\n"])),m.theme.colors.textAccent),S=g.Z.ul(c||(c=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 4px;\n  column-gap: 6px;\n"]))),j=g.Z.li(l||(l=(0,x.Z)(["\n  color: ",";\n\n  &:not(:last-child) {\n    padding-right: 6px;\n    border-right: 1px solid ",";\n  }\n"])),m.theme.colors.textTransparentPrimary,m.theme.colors.borderSecondary),w=g.Z.p(s||(s=(0,x.Z)(["\n  font-size: 14px;\n  line-height: calc(20 / 14);\n  margin-bottom: 24px;\n"]))),T=g.Z.div(u||(u=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 24px;\n"]))),E=g.Z.h3(d||(d=(0,x.Z)(["\n  font-size: 14px;\n  line-height: calc(20 / 14);\n"]))),k=g.Z.ul(p||(p=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),I=g.Z.li(f||(f=(0,x.Z)(["\n  padding: 7px 14px;\n  color: ",";\n  background-color: ",";\n  border-radius: 35px;\n"])),m.theme.colors.textAdditional,m.theme.colors.bgAdditional),A=g.Z.span(h||(h=(0,x.Z)(["\n  font-family: 'Montserat', sans-serif;\n  font-weight: 600;\n  letter-spacing: -0.24px;\n  color: ",";\n"])),m.theme.colors.textAccent)},3188:function(n,e,t){t.r(e),t.d(e,{SearchBar:function(){return y}});var r=t(4165),i=t(5861),o=t(4942),a=t(1413),c=t(9439),l=t(2791),s=t(1134),u=t(866),d=t(4289),p=t(7213),f=t(1926),h=t(4634),x=t(6899),g=t(546),m=t(7513),b=t(184),v=Array.from({length:50},(function(n,e){var t=10*(e+2);return{value:t,label:t}})),Z=(0,f.transformSelectData)(g),y=function(n){var e=n.handleSearch,t=(0,s.cI)(h.formSettings),f=t.register,g=t.handleSubmit,y=t.control,S=t.clearErrors,j=t.setError,w=t.getValues,T=t.reset,E=t.formState.errors,k=(0,l.useState)((0,a.Z)({},x.initialValues)),I=(0,c.Z)(k,2),A=I[0],C=I[1],L=function(n){var e=w(n);C((function(t){return(0,a.Z)((0,a.Z)({},t),{},(0,o.Z)({},n,e))}))},P=function(n){var e=n.target.name,t=n.target.value;t?S(e):j(e),C((function(n){return(0,a.Z)((0,a.Z)({},n),{},(0,o.Z)({},e,t?parseFloat(t.replace(/,/g,"")):t))}))},R=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:T(),C(x.initialValues);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,b.jsxs)(p.StyledForm,{onSubmit:g(e),children:[(0,b.jsx)(s.Qr,{name:"brand",control:y,render:function(n){var e=n.field;return(0,b.jsxs)(p.Label,{children:[(0,b.jsx)(p.InputHeading,{children:"Car brand"}),(0,b.jsx)(u.ZP,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Enter the text",unstyled:!0,styles:p.selectStyles,options:Z,defaultValue:A.brand,onChange:function(n){e.onChange(n),L(e.name)}}))]})}}),(0,b.jsx)(s.Qr,{name:"price",control:y,render:function(n){var e=n.field;return(0,b.jsxs)(p.Label,{children:[(0,b.jsx)(p.InputHeading,{children:"Price/ 1 hour"}),(0,b.jsx)(u.ZP,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"To $",unstyled:!0,styles:p.selectStyles,options:v,defaultValue:A.price,onChange:function(n){e.onChange(n),L(e.name)},formatOptionLabel:function(n){return(0,b.jsxs)("span",{children:["To ",n.value,"$"]})}}))]})}}),(0,b.jsxs)(p.Fieldset,{children:[(0,b.jsx)(p.Legend,{children:"\u0421ar mileage / km"}),(0,b.jsxs)(p.InputWrapper,{children:[(0,b.jsxs)(p.InputLabel,{children:[(0,b.jsx)(p.LabelText,{children:"From"}),(0,b.jsx)(p.NumberInput,(0,a.Z)((0,a.Z)({type:"text",name:"mileageFrom",autocomplete:"off"},f("mileageFrom")),{},{value:Number(A.mileageFrom).toLocaleString("en-US"),onChange:P}))]}),(0,b.jsxs)(p.InputLabel,{children:[(0,b.jsx)(p.LabelText,{children:"To"}),(0,b.jsx)(p.NumberInput,(0,a.Z)((0,a.Z)({type:"text",name:"mileageTo",autocomplete:"off"},f("mileageTo")),{},{value:Number(A.mileageTo).toLocaleString("en-US"),onChange:P}))]}),(E.mileageFrom||E.mileageFrom)&&(0,b.jsx)(p.ErrorValidationText,{children:"Enter positive number"})]})]}),(0,b.jsxs)(p.ButtonsWrapper,{children:[(0,b.jsx)(d.ButtonPrimary,{type:"submit",tag:"button",btnWidth:"auto",btnPadding:"14px 44px",children:"Search"}),(0,b.jsx)(m.ButtonSecondary,{type:"reset",onClick:R,children:"Reset"})]})]})}},7213:function(n,e,t){t.r(e),t.d(e,{ButtonsWrapper:function(){return I},ErrorValidationText:function(){return A},Fieldset:function(){return S},InputHeading:function(){return Z},InputLabel:function(){return T},InputWrapper:function(){return w},Label:function(){return v},LabelText:function(){return E},Legend:function(){return j},NumberInput:function(){return k},StyledForm:function(){return b},selectStyles:function(){return y}});var r,i,o,a,c,l,s,u,d,p,f,h=t(1413),x=t(168),g=t(225),m=t(8405),b=g.Z.form(r||(r=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: end;\n  gap: 18px;\n\n  & > label:first-of-type {\n    width: 224px;\n  }\n\n  & > label:last-of-type {\n    width: 135px;\n  }\n"]))),v=g.Z.label(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-items: start;\n"]))),Z=g.Z.span(o||(o=(0,x.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  color: ",";\n"])),m.theme.colors.textSecondary),y={container:function(n){return(0,h.Z)((0,h.Z)({},n),{},{width:"100%"})},control:function(n){return(0,h.Z)((0,h.Z)({},n),{},{height:"46px",fontSize:"18px",fontWeight:"500",lineHeight:"calc(20 / 18)",textAlign:"left",backgroundColor:"".concat(m.theme.colors.bgSecondary),borderRadius:"14px",border:"0",outline:"0",cursor:"text"})},menuList:function(n){return(0,h.Z)((0,h.Z)({},n),{},{display:"flex",flexDirection:"column",gap:"8px",textAlign:"left",height:"272px",padding:"14px 18px",marginTop:"4px",backgroundColor:"".concat(m.theme.colors.bgPrimary),border:"1px solid ".concat(m.theme.colors.borderPrimary),borderRadius:"14px","&::-webkit-scrollbar":{width:"26px"},"&::-webkit-scrollbar-thumb":{borderRadius:"13px",backgroundColor:"".concat(m.theme.colors.bgScroll),border:"9px solid ".concat(m.theme.colors.bgPrimary)},"&::-webkit-scrollbar-thumb:hover":{backgroundColor:"".concat(m.theme.colors.textTransparentSecondary)}})},option:function(n,e){return(0,h.Z)((0,h.Z)({},n),{},{fontSize:"16px",lineHeight:"calc(20 / 16)",textWrap:"nowrap",padding:0,color:e.isSelected?"".concat(m.theme.colors.textPrimary):"".concat(m.theme.colors.textTransparentSecondary),"&:hover":{color:"".concat(m.theme.colors.textPrimary)}})},indicatorsContainer:function(n){return(0,h.Z)((0,h.Z)({},n),{},{padding:"0 18px 0 6px"})},valueContainer:function(n){return(0,h.Z)((0,h.Z)({},n),{},{display:"flex",flexWrap:"no-wrap",height:"100%",padding:"0 0 0 18px"})},placeholder:function(n){return(0,h.Z)((0,h.Z)({},n),{},{margin:"0",fontSize:"18px",fontWeight:"500",textAlign:"left",textWrap:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"".concat(m.theme.colors.textPrimary)})}},S=g.Z.fieldset(a||(a=(0,x.Z)(["\n  position: relative;\n  width: 320px;\n  height: 72px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n"]))),j=g.Z.legend(c||(c=(0,x.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  color: ",";\n"])),m.theme.colors.textSecondary),w=g.Z.div(l||(l=(0,x.Z)(["\n  display: flex;\n  align-items: end;\n  height: 100%;\n\n  & > label:first-of-type {\n    border-radius: 14px 0 0 14px;\n    border-right: 1px solid ",";\n  }\n\n  & > label:last-of-type {\n    border-radius: 0 14px 14px 0;\n  }\n\n  & > label:first-of-type > input {\n    padding: 14px 24px 14px 70px;\n  }\n\n  & > label:last-of-type > input {\n    padding: 14px 24px 14px 48px;\n  }\n"])),m.theme.colors.borderAdditional),T=g.Z.label(s||(s=(0,x.Z)(["\n  position: relative;\n  overflow: hidden;\n"]))),E=g.Z.span(u||(u=(0,x.Z)(["\n  position: absolute;\n  left: 24px;\n  top: 50%;\n  transform: translate(0, -50%);\n  font-size: 18px;\n  font-weight: 500;\n  line-height: calc(20 / 18);\n"]))),k=g.Z.input(d||(d=(0,x.Z)(["\n  width: 160px;\n  padding: 14px 24px 14px 70px;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: calc(20 / 18);\n  color: ",";\n  background-color: ",";\n  border: 0;\n  outline: 0;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    appearance: none;\n  }\n"])),m.theme.colors.textPrimary,m.theme.colors.bgSecondary),I=g.Z.div(p||(p=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 18px;\n"]))),A=g.Z.p(f||(f=(0,x.Z)(["\n  position: absolute;\n  top: 75px;\n  font-size: 14px;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  color: ",";\n"])),m.theme.colors.errorValidationText)},4634:function(n,e,t){t.r(e),t.d(e,{formSettings:function(){return c}});var r=t(1413),i=t(4695),o=t(8056),a=t(6899),c={defaultValues:(0,r.Z)({},a.initialValues),mode:"onChange",resolver:(0,i.X)(o.validationSchema)}},6899:function(n,e,t){t.r(e),t.d(e,{initialValues:function(){return r}});var r={brand:null,price:null,mileageFrom:"",mileageTo:""}},8056:function(n,e,t){t.r(e),t.d(e,{validationSchema:function(){return i}});var r=t(6727),i=r.Ry().shape({brand:r.Ry().shape({label:r.Z_(),value:r.Z_()}).nullable(),price:r.Ry().shape({label:r.Z_(),value:r.Z_()}).nullable(),mileageFrom:r.Z_().transform((function(n,e){return""===e?null:n})).nullable(),mileageTo:r.Z_().transform((function(n,e){return""===e?null:n})).nullable()})},4289:function(n,e,t){t.r(e),t.d(e,{ButtonPrimary:function(){return l}});var r=t(1413),i=t(4925),o=t(4388),a=t(184),c=["children","tag","btnWidth","btnPadding"],l=function(n){var e=n.children,t=n.tag,l=void 0===t?"button":t,s=n.btnWidth,u=void 0===s?"auto":s,d=n.btnPadding,p=void 0===d?"12px 44px":d,f=(0,i.Z)(n,c);return(0,a.jsx)(o.ButtonPrimaryStyled,(0,r.Z)((0,r.Z)({tag:l,btnWidth:u,btnPadding:p},f),{},{children:e}))}},4388:function(n,e,t){t.r(e),t.d(e,{ButtonPrimaryStyled:function(){return x},ButtonStyled:function(){return f},LinkStyled:function(){return h}});var r,i,o=t(1413),a=t(4925),c=t(168),l=t(225),s=t(8405),u=t(184),d=["tag"],p="\n    display: inline-block;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: calc(20 / 14);\n    color: ".concat(s.theme.colors.textBtn,";\n    background-color: ").concat(s.theme.colors.bgAccent,";\n    border-radius: 12px;\n    transition: background-color 0.2s ").concat(s.theme.transitions.cubicBezier,";\n\n    &:hover,\n    &:focus {\n        background-color: ").concat(s.theme.colors.bgAccentHover,";\n    }\n"),f=l.Z.button(r||(r=(0,c.Z)(["\n  ",";\n  width: ",";\n  padding: ",";\n"])),p,(function(n){return n.btnWidth}),(function(n){return n.btnPadding})),h=l.Z.a(i||(i=(0,c.Z)(["\n  ","\n  width: ",";\n  padding: ",";\n"])),p,(function(n){return n.btnWidth}),(function(n){return n.btnPadding})),x=function(n){var e=n.tag,t=(0,a.Z)(n,d);return"a"===e?(0,u.jsx)(h,(0,o.Z)({},t)):(0,u.jsx)(f,(0,o.Z)({},t))}},7513:function(n,e,t){t.r(e),t.d(e,{ButtonSecondary:function(){return o}});var r=t(5599),i=t(184),o=function(n){var e=n.children,t=n.onClick;return(0,i.jsx)(r.ButtonSecondaryStyled,{onClick:t,children:e})}},5599:function(n,e,t){t.r(e),t.d(e,{ButtonSecondaryStyled:function(){return c}});var r,i=t(168),o=t(225),a=t(8405),c=o.Z.button(r||(r=(0,i.Z)(["\n  display: inline-flex;\n  gap: 2px;\n  justify-content: center;\n  align-items: baseline;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: calc(24 / 16);\n  color: ",";\n  text-decoration-line: underline;\n  transition: color 0.2s ",",\n    transform 0.2s ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),a.theme.colors.textAccent,a.theme.transitions.cubicBezier,a.theme.transitions.cubicBezier,a.theme.colors.bgAccentHover)},9061:function(n,e,t){t.r(e),t.d(e,{Card:function(){return m}});var r=t(4165),i=t(5861),o=t(9439),a=t(2791),c=t(3853),l=t(5218),s=t(3925),u=t(3627),d=t(4289),p=t(2472),f=t(8613),h=t(2649),x=t(8405),g=t(184),m=function(n){var e=n.data,t=n.toggleFavorites,m=e.id,b=e.year,v=e.make,Z=e.model,y=e.type,S=e.img,j=e.functionalities,w=e.rentalPrice,T=e.rentalCompany,E=e.address,k=e.favorite,I=(0,a.useState)(k),A=(0,o.Z)(I,2),C=A[0],L=A[1],P=(0,a.useState)(!1),R=(0,o.Z)(P,2),F=R[0],O=R[1],B=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t(m);case 3:L((function(n){return!n})),l.Am.success("".concat(v," ").concat(Z," ").concat(b," is successfully ").concat(C?"removed fom favorites":"added to favorites")),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),l.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),M=function(){return O((function(n){return!n}))};return(0,g.jsxs)(p.CardItem,{children:[(0,g.jsxs)(p.ImageWrapper,{onClick:B,children:[(0,g.jsx)(p.Image,{src:S||h,alt:"".concat(v," ").concat(Z," ").concat(b),width:"274px",height:"auto"}),(0,g.jsx)(p.FavoriteBtn,{type:"button",children:(0,g.jsx)(c.$aX,{size:18,fill:C?x.theme.colors.iconAccent:"none",stroke:C?x.theme.colors.iconAccent:x.theme.colors.iconPrimary})})]}),(0,g.jsxs)(p.CardDescription,{children:[(0,g.jsxs)(p.TitleWrapper,{children:[(0,g.jsxs)(p.Title,{children:[(0,g.jsxs)("span",{children:[v," "]}),(0,g.jsxs)(p.TitleAccent,{children:[Z,", "]}),(0,g.jsx)("span",{children:b})]}),(0,g.jsx)(p.Price,{children:w})]}),(0,g.jsxs)(p.TagsList,{children:[(0,g.jsx)(p.TagItem,{children:E.split(",")[1]}),(0,g.jsx)(p.TagItem,{children:E.split(",")[2]}),(0,g.jsx)(p.TagItem,{children:T}),(0,g.jsx)(p.TagItem,{children:"Premium"}),(0,g.jsx)(p.TagItem,{children:y}),(0,g.jsx)(p.TagItem,{children:Z}),(0,g.jsx)(p.TagItem,{children:m}),(0,g.jsx)(p.TagItem,{children:(0,f.getShortestStringFromArr)(j)})]}),(0,g.jsx)(p.BtnWrapper,{children:(0,g.jsx)(d.ButtonPrimary,{type:"button",tag:"button",onClick:M,btnWidth:"100%",btnPadding:"12px 44px",children:"Learn more"})})]}),F&&(0,g.jsx)(s.Modal,{toggleModal:M,children:(0,g.jsx)(u.AdvertModal,{data:e})})]})}},2472:function(n,e,t){t.r(e),t.d(e,{BtnWrapper:function(){return A},CardDescription:function(){return y},CardItem:function(){return b},FavoriteBtn:function(){return S},Image:function(){return Z},ImageWrapper:function(){return v},Price:function(){return E},TagItem:function(){return I},TagsList:function(){return k},Title:function(){return w},TitleAccent:function(){return T},TitleWrapper:function(){return j}});var r,i,o,a,c,l,s,u,d,p,f,h,x=t(168),g=t(225),m=t(8405),b=g.Z.li(r||(r=(0,x.Z)(["\n  width: 274px;\n  display: flex;\n  flex-direction: column;\n"]))),v=g.Z.div(i||(i=(0,x.Z)(["\n  position: relative;\n  display: inline-block;\n  width: 274px;\n  height: 268px;\n  margin-bottom: 14px;\n  border-radius: 14px;\n  overflow: hidden;\n  cursor: pointer;\n"]))),Z=g.Z.img(o||(o=(0,x.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  transition: transform 0.2s ",";\n\n  &:hover,\n  &:focus {\n    transform: scale(1.01);\n  }\n"])),m.theme.transitions.cubicBezier),y=g.Z.div(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n"]))),S=g.Z.button(c||(c=(0,x.Z)(["\n  position: absolute;\n  display: flex;\n  top: 14px;\n  right: 14px;\n  pointer-events: none;\n"]))),j=g.Z.div(l||(l=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),w=g.Z.h2(s||(s=(0,x.Z)(["\n  max-width: 90%;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: calc(24 / 16);\n  text-align: left;\n\n  display: -webkit-box;\n  overflow-wrap: break-word;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n"]))),T=g.Z.span(u||(u=(0,x.Z)(["\n  color: ",";\n"])),m.theme.colors.textAccent),E=g.Z.p(d||(d=(0,x.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: calc(24 / 16);\n"]))),k=g.Z.ul(p||(p=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 4px;\n  column-gap: 6px;\n  margin-bottom: 28px;\n"]))),I=g.Z.li(f||(f=(0,x.Z)(["\n  color: ",";\n\n  &:not(:last-child) {\n    padding-right: 6px;\n    border-right: 1px solid ",";\n  }\n"])),m.theme.colors.textTransparentPrimary,m.theme.colors.borderSecondary),A=g.Z.div(h||(h=(0,x.Z)(["\n  margin-top: auto;\n"])))},401:function(n,e,t){t.r(e),t.d(e,{CardList:function(){return a}});var r=t(2459),i=t(9061),o=t(184),a=function(n){var e=n.data,t=n.toggleFavorites;return(0,o.jsx)(r.CardListStyled,{children:e.map((function(n){return(0,o.jsx)(i.Card,{data:n,toggleFavorites:t},"".concat(n.id))}))})}},2459:function(n,e,t){t.r(e),t.d(e,{CardListStyled:function(){return o}});var r,i=t(168),o=t(225).Z.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 50px;\n  column-gap: 29px;\n  margin-bottom: 100px;\n"])))},301:function(n,e,t){t.r(e),t.d(e,{ErrorCard:function(){return a}});var r=t(3828),i=t(9126),o=t(184),a=function(n){var e=n.children;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(i.ErrorCardStyled,{children:[(0,o.jsx)(i.ErrorImage,{src:r,alt:"error",width:"1200px",height:"auto"}),(0,o.jsx)(i.ErrorText,{children:e.split(". ").map((function(n){return(0,o.jsx)("span",{children:n},n)}))})]})})}},9126:function(n,e,t){t.r(e),t.d(e,{ErrorCardStyled:function(){return s},ErrorImage:function(){return u},ErrorText:function(){return d}});var r,i,o,a=t(168),c=t(225),l=t(8405),s=c.Z.div(r||(r=(0,a.Z)([""]))),u=c.Z.img(i||(i=(0,a.Z)(["\n  width: 100%;\n  margin-bottom: 40px;\n"]))),d=c.Z.p(o||(o=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-size: 18px;\n  font-weight: 700;\n  text-align: center;\n  color: ",";\n\n  & > span:first-of-type {\n    font-size: 28px;\n    margin-bottom: 12px;\n  }\n"])),l.theme.colors.textPrimary)},3925:function(n,e,t){t.r(e),t.d(e,{Modal:function(){return l}});var r=t(2791),i=t(4164),o=t(71),a=t(6733),c=t(184),l=function(n){var e=n.toggleModal,t=n.children;(0,r.useEffect)((function(){var n=function(n){"Escape"===n.key&&e()};return document.addEventListener("keydown",n),document.documentElement.style.overflowY="hidden",function(){document.removeEventListener("keydown",n),document.documentElement.style.overflowY="unset"}}),[e]);var l=document.querySelector("#backdrop-root");return(0,i.createPortal)((0,c.jsx)(a.Overlay,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,c.jsxs)(a.ModalWindow,{children:[(0,c.jsx)(a.CloseBtn,{onClick:e,children:(0,c.jsx)(o.IOM,{size:24})}),t]})}),l)}},6077:function(n,e,t){t.r(e),t.d(e,{NoResults:function(){return o}});var r=t(5897),i=t(184),o=function(n){var e=n.children;return(0,i.jsx)(r.NoResultsStyled,{children:e})}},5897:function(n,e,t){t.r(e),t.d(e,{NoResultsStyled:function(){return c}});var r,i=t(168),o=t(225),a=t(8405),c=o.Z.p(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  font-size: 18px;\n  font-weight: 700;\n  text-align: center;\n  color: ",";\n"])),a.theme.colors.textPrimary)},8433:function(n,e,t){t.r(e),t.d(e,{PageTitle:function(){return o}});var r=t(8893),i=t(184),o=function(n){var e=n.children,t=n.hidden,o=void 0!==t&&t;return(0,i.jsx)(r.PageTitleStyled,{hidden:o,children:e})}},8893:function(n,e,t){t.r(e),t.d(e,{PageTitleStyled:function(){return a}});var r,i=t(168),o=t(225),a=o.Z.h1(r||(r=(0,i.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  text-transform: uppercase;\n  line-height: calc(32 / 24);\n\n  ",";\n"])),(function(n){return n.hidden?"\n    position: absolute;\n\twidth: 1px;\n\theight: 1px;\n\tmargin: -1px;\n\tborder: 0;\n\tpadding: 0;\n\twhite-space: nowrap;\n\tclip-path: inset(100%);\n\tclip: rect(0 0 0 0);\n\toverflow: hidden;\n":""}))},6502:function(n,e,t){t.r(e),t.d(e,{Section:function(){return o}});var r=t(4961),i=t(184),o=function(n){var e=n.children;return(0,i.jsx)(r.SectionStyled,{children:e})}},4961:function(n,e,t){t.r(e),t.d(e,{SectionStyled:function(){return o}});var r,i=t(168),o=t(225).Z.section(r||(r=(0,i.Z)(["\n  text-align: center;\n\n  &:not(:last-child) {\n    margin-bottom: 50px;\n  }\n"])))},3524:function(n,e,t){t.r(e),t.d(e,{APOLOGIZE_MESSAGE:function(){return a},CANCELED_ERROR:function(){return i},EMPTY_FAVORITES_MESSAGE:function(){return u},END_OF_RESULTS_MESSAGE:function(){return l},ERROR_MESSAGE:function(){return o},LIMIT:function(){return r},LS_KEY_FAVORITES:function(){return c},NO_RESULTS_MESSAGE:function(){return s}});var r=8,i="CanceledError",o="Something went wrong... Please try again later.",a="Something's gone wrong, but we're working on it. We apologize for the inconvenience, but we're currently experiencing some issues. Please try again later.",c="favorites",l="You reached the end of results",s="Sorry, there are to results matching your request.",u="Your favorites list is empty."},2046:function(n,e,t){t.r(e),t.d(e,{filterAdverts:function(){return i}});var r=t(3433),i=function(n,e){var t=(0,r.Z)(n),i=e.brand,o=e.price,a=e.mileageFrom,c=e.mileageTo;return null!==i&&void 0!==i&&i.value&&(t=t.filter((function(n){return n.make.toLowerCase()===i.value.toLowerCase()}))),null!==o&&void 0!==o&&o.value&&(t=t.filter((function(n){var e=n.rentalPrice;return parseFloat(e.substring(1))<=o.value}))),c&&(t=t.filter((function(n){return n.mileage<=parseFloat(c.replace(/,/g,""))}))),a&&(t=t.filter((function(n){return n.mileage>=parseFloat(a.replace(/,/g,""))}))),t}},8613:function(n,e,t){t.r(e),t.d(e,{getShortestStringFromArr:function(){return r}});var r=function(n){return n.reduce((function(n,e){return e.length<n.length?e:n}),n[0])}},5975:function(n,e,t){t.r(e),t.d(e,{splitStringIntoNumberAndText:function(){return r}});var r=function(n){var e=n.match(/(\D+)(\d+)/);return e?{text:e[1].trim(),number:parseInt(e[2],10)}:n}},1926:function(n,e,t){t.r(e),t.d(e,{transformSelectData:function(){return r}});var r=function(n){return n.map((function(n){return{value:n,label:n}}))}},4124:function(n,e,t){t.r(e),t.d(e,{useFavorites:function(){return u}});var r=t(4165),i=t(3433),o=t(5861),a=t(9439),c=t(2791),l=t(3524),s=t(1235),u=function(){var n=(0,c.useState)((function(){var n;return null!==(n=JSON.parse(localStorage.getItem(l.LS_KEY_FAVORITES)))&&void 0!==n?n:[]})),e=(0,a.Z)(n,2),t=e[0],u=e[1];(0,c.useEffect)((function(){0===t.length?localStorage.removeItem(l.LS_KEY_FAVORITES):localStorage.setItem(l.LS_KEY_FAVORITES,JSON.stringify(t))}),[t]);var d=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var o,a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.some((function(n){return n.id===e}))){n.next=14;break}return n.prev=2,o={favorite:!1},n.next=6,(0,s.updateAdvert)(e,o);case 6:u((function(n){return n.filter((function(n){return n.id!==e}))})),n.next=12;break;case 9:throw n.prev=9,n.t0=n.catch(2),new Error(l.ERROR_MESSAGE);case 12:n.next=25;break;case 14:return n.prev=14,a={favorite:!0},n.next=18,(0,s.updateAdvert)(e,a);case 18:c=n.sent,u((function(n){return[c].concat((0,i.Z)(n))})),n.next=25;break;case 22:throw n.prev=22,n.t1=n.catch(14),new Error(l.ERROR_MESSAGE);case 25:case"end":return n.stop()}}),n,null,[[2,9],[14,22]])})));return function(e){return n.apply(this,arguments)}}();return[t,d]}},5576:function(n,e,t){t.r(e),t.d(e,{RentalPage:function(){return C}});var r=t(1413),i=t(4165),o=t(3433),a=t(5861),c=t(9439),l=t(2791),s=t(5218),u=t(5617),d=t(6707),p=function(){return p=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},p.apply(this,arguments)},f=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]])}return t},h=(0,d.i)("PulseLoader","0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}","pulse");var x=function(n){var e=n.loading,t=void 0===e||e,r=n.color,i=void 0===r?"#000000":r,o=n.speedMultiplier,a=void 0===o?1:o,c=n.cssOverride,s=void 0===c?{}:c,d=n.size,x=void 0===d?15:d,g=n.margin,m=void 0===g?2:g,b=f(n,["loading","color","speedMultiplier","cssOverride","size","margin"]),v=p({display:"inherit"},s),Z=function(n){return{backgroundColor:i,width:(0,u.E)(x),height:(0,u.E)(x),margin:(0,u.E)(m),borderRadius:"100%",display:"inline-block",animation:"".concat(h," ").concat(.75/a,"s ").concat(.12*n/a,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return t?l.createElement("span",p({style:v},b),l.createElement("span",{style:Z(1)}),l.createElement("span",{style:Z(2)}),l.createElement("span",{style:Z(3)})):null},g=t(1235),m=t(6502),b=t(3188),v=t(8433),Z=t(401),y=t(7513),S=t(6077),j=t(301),w=t(4124),T=t(2046),E=t(3524),k=t(8405),I=t(6899),A=t(184),C=function(){var n=(0,l.useState)([]),e=(0,c.Z)(n,2),t=e[0],u=e[1],d=(0,l.useState)(!1),p=(0,c.Z)(d,2),f=p[0],h=p[1],C=(0,l.useState)(""),L=(0,c.Z)(C,2),P=L[0],R=L[1],F=(0,l.useState)(1),O=(0,c.Z)(F,2),B=O[0],M=O[1],_=(0,l.useState)(!1),z=(0,c.Z)(_,2),W=z[0],N=z[1],V=(0,w.useFavorites)(),G=(0,c.Z)(V,2)[1],D=(0,l.useState)(I.initialValues),H=(0,c.Z)(D,2),Y=H[0],U=H[1];(0,l.useEffect)((function(){var n=new AbortController,e=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),R(""),e.next=5,(0,g.getAdverts)(B,E.LIMIT,n.signal);case 5:t=e.sent,u((function(n){return[].concat((0,o.Z)(n),(0,o.Z)(t))})),t.length<E.LIMIT&&(N(!0),s.Am.success(E.END_OF_RESULTS_MESSAGE)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),e.t0.name===E.CANCELED_ERROR?R(""):(R(E.APOLOGIZE_MESSAGE),s.Am.error(E.ERROR_MESSAGE));case 13:return e.prev=13,h(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){return n.abort()}}),[B]);var K=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:M((function(n){return n+1}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),J=(0,T.filterAdverts)(t,Y);return(0,A.jsxs)(A.Fragment,{children:[P&&(0,A.jsx)(j.ErrorCard,{children:P}),!P&&t.length>0&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(v.PageTitle,{hidden:!0,children:"Catalog"}),(0,A.jsx)(m.Section,{children:(0,A.jsx)(b.SearchBar,{handleSearch:function(n){U((function(e){return(0,r.Z)((0,r.Z)({},e),n)}))}})}),!J.length&&(0,A.jsx)(S.NoResults,{children:E.NO_RESULTS_MESSAGE}),(0,A.jsxs)(m.Section,{children:[(0,A.jsx)(Z.CardList,{data:J,toggleFavorites:G}),!W&&(0,A.jsx)(y.ButtonSecondary,{type:"button",onClick:K,children:f?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("span",{children:"Loading"}),(0,A.jsx)(x,{color:k.theme.colors.bgAccent,size:3})]}):(0,A.jsx)("span",{children:"Load more"})})]})]})]})}},3828:function(n,e,t){n.exports=t.p+"static/media/errorPlaceholder.744dea376be368b31b20.webp"},2649:function(n,e,t){n.exports=t.p+"static/media/placeholder.38d6d1dc8b2429269ff4.webp"},546:function(n){n.exports=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","Honda","Ford","Toyota","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land Rover"]')}}]);
//# sourceMappingURL=576.71641185.chunk.js.map