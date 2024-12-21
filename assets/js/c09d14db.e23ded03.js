"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5884],{5247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Analysis/Analysis_On_Point/Backflagging","title":"**Backflagging**","description":"backflagging}","source":"@site/docs/Analysis/Analysis_On_Point/Backflagging.md","sourceDirName":"Analysis/Analysis_On_Point","slug":"/Analysis/Analysis_On_Point/Backflagging","permalink":"/UserGuideWeb/docs/Analysis/Analysis_On_Point/Backflagging","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Blackflagging"},"sidebar":"analisysSidebar","previous":{"title":"Contact Analysis","permalink":"/UserGuideWeb/docs/Analysis/Analysis_On_Point/Contact-Analysis"},"next":{"title":"Variogram Modeling","permalink":"/UserGuideWeb/docs/Analysis/Analysis_On_Point/Variogram-Modeling"}}');var a=n(4848),s=n(8453);const l={sidebar_label:"Blackflagging"},o="Backflagging {#backflagging}",r={},c=[];function h(e){const t={em:"em",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"backflagging",children:(0,a.jsx)(t.strong,{children:"Backflagging"})})}),"\n",(0,a.jsx)(t.p,{children:"Backflagging is typically used in the context of geostatistics or resource estimation, where data from drill holes are used to infer the characteristics of a block model, a representation of the spatial distribution of geological variables."}),"\n",(0,a.jsx)(t.p,{children:"The workflow will be outlined, with an emphasis on the interaction between geological block model data and drill hole information, which are selected by the user based on specific criteria, such as belonging to the same project. This processed data can then be utilized for further analysis or reporting. The results are generated as a new column in the DrillHole project, named Backflagged (a label that can be renamed), allowing for 3D visualization as a categorical variable in the Utilities section."}),"\n",(0,a.jsx)(t.p,{children:"Here is the workflow to apply the Backflagging tools on our platform:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Block Model Selection: The user selects a block model from a dropdown menu (",(0,a.jsx)(t.em,{children:"BM_Built_DH is currently selected"}),"). This is the model that contains the data which will be backflagged."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Categorical Attribute Selection: The user selects a categorical attribute from another dropdown menu (",(0,a.jsx)(t.em,{children:"Dom_Categ is selected"}),"). This is likely an attribute within the block model that the user wants to analyze or use for backflagging."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Filters Application: If there are any filters that need to be applied to the data before backflagging, the user can set them in the 'Filters' section (",(0,a.jsx)(t.em,{children:"currently set to 'No filter"}),"')."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Points Dataset Selection: The user selects the points dataset they want to work with from a dropdown menu (",(0,a.jsx)(t.em,{children:"DrillHole is currently selected"}),"). This is presumably the dataset to which the backflagging will be applied."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'Running Backflagging: After setting up the block model, categorical attribute, point dataset, any necessary filters,  and the name of the column to be created with this information in \'drillhole project\u2019 (point dataset),  the user can run the backflagging process by clicking the "Run backflagging" button.'}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"View Points Dataset: In this section, you can view the raw entries of the points dataset. You must select the \u201cdrillhole project\u201d used to perform the backflagging."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Categorical Columns: There is a mention of 'Categorical Columns' with entries like lit_lt, lit_mo, and ",(0,a.jsx)(t.strong,{children:"Backflagged"}),". These are the different categorical columns available in the selected dataset that can be viewed or used in the analysis. For our purpose, the newly created column 'Backflagged' is the result of applying the tools."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(6540);const a={},s=i.createContext(a);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);