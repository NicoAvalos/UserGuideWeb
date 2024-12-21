"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5388],{5244:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Workflow_Resource_Modeling/SGS","title":"**Sequential Gaussian Simulations (SGS)**","description":"This section outlines the workflow for performing sequential Gaussian simulations, both with and without PPMt (Projection Pursuit Multivariate Transform). While the overall workflow is similar for both methods, the key distinction lies in PPMt requiring the selection of at least two variables (attributes), thus defining it as a multivariable case.","source":"@site/docs/Workflow_Resource_Modeling/SGS.md","sourceDirName":"Workflow_Resource_Modeling","slug":"/Workflow_Resource_Modeling/SGS","permalink":"/UserGuideWeb/docs/Workflow_Resource_Modeling/SGS","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_label":"Sequential Gaussian Simulation, SGS","sidebar_position":4},"sidebar":"workflowsSidebar","previous":{"title":"Kriging, OK/SK","permalink":"/UserGuideWeb/docs/Workflow_Resource_Modeling/Kriging"}}');var t=s(4848),r=s(8453);const o={sidebar_label:"Sequential Gaussian Simulation, SGS",sidebar_position:4},l="Sequential Gaussian Simulations (SGS)",a={},c=[{value:"<strong>Step-by-Step Workflow</strong>",id:"step-by-step-workflow",level:2},{value:"<strong>Customization Options</strong>",id:"customization-options",level:2}];function d(e){const n={blockquote:"blockquote",br:"br",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"sequential-gaussian-simulations-sgs",children:(0,t.jsx)(n.strong,{children:"Sequential Gaussian Simulations (SGS)"})})}),"\n",(0,t.jsxs)(n.p,{children:["This section outlines the workflow for performing sequential Gaussian simulations, both with and without ",(0,t.jsx)(n.strong,{children:"PPMt (Projection Pursuit Multivariate Transform)."})," While the overall workflow is similar for both methods, the key distinction lies in PPMt requiring the selection of at least two variables (attributes), thus defining it as a multivariable case.",(0,t.jsx)(n.br,{}),"\n","This guide provides a structured approach to efficiently configure and execute sequential Gaussian simulations tailored to your resource modeling needs."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"step-by-step-workflow",children:(0,t.jsx)(n.strong,{children:"Step-by-Step Workflow"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 1: Create the Instance"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to the ",(0,t.jsx)(n.strong,{children:"Resource Modeling"})," section."]}),"\n",(0,t.jsxs)(n.li,{children:["Under the ",(0,t.jsx)(n.strong,{children:"Instances"})," tab, select ",(0,t.jsx)(n.strong,{children:"Sequential Gaussian Simulation, SGS"})," from the list of available methods."]}),"\n",(0,t.jsxs)(n.li,{children:["Assign a name to the instance and click the ",(0,t.jsx)(n.strong,{children:"Build New Instance"})," button."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 2: Select the Simulation Type"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Choose the simulation type: ",(0,t.jsx)(n.strong,{children:"Independent"})," or ",(0,t.jsx)(n.strong,{children:"Multivariable (PPMt)"}),". For PPMt, ensure you have selected at least two attributes."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 3: Configure Parameters"})}),"\n",(0,t.jsxs)(n.p,{children:["The interface provides a list of parameters that can be set to either ",(0,t.jsx)(n.strong,{children:"Automated"})," or ",(0,t.jsx)(n.strong,{children:"Customized"})," modes. By default, the automated configuration runs 10 simulations using default settings. You can selectively customize specific parameters based on your requirements."]}),"\n",(0,t.jsx)(n.p,{children:"The parameters available for customization or automation include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Boundary Conditions"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Gaussian Transformation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Variogram Models"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Search Plans"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Additional Parameters"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Refer to the attached interface screenshots for guidance."}),"\n",(0,t.jsx)(n.p,{children:"![][image19]"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 4: Set Datasets and Attributes"})}),"\n",(0,t.jsx)(n.p,{children:"Once you have configured the parameters:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Datasets"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Select the ",(0,t.jsx)(n.strong,{children:"Points Dataset"})," and the ",(0,t.jsx)(n.strong,{children:"Block Model Dataset"})," that will be used for the simulation."]}),"\n",(0,t.jsxs)(n.li,{children:["Specify the ",(0,t.jsx)(n.strong,{children:"Point Domain"})," and ",(0,t.jsx)(n.strong,{children:"Block Model Domain"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If applicable, apply a ",(0,t.jsx)(n.strong,{children:"Point Filter"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Attributes"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Select the attributes you want to simulate."}),"\n",(0,t.jsxs)(n.li,{children:['Optionally, customize the output column name for the simulated attributes. For example, if the attribute is "Au," you can set the output name as "Au_out," and the results will generate columns like:',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Au_out_SGS_# (where # is the simulation number)"}),"\n",(0,t.jsx)(n.li,{children:"Au_out_Mean"}),"\n",(0,t.jsx)(n.li,{children:"Au_out_Var"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 5: Save and Continue"})}),"\n",(0,t.jsxs)(n.p,{children:["After setting all configurations in the interface, click ",(0,t.jsx)(n.strong,{children:"Save and Continue"}),":"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you have selected any parameters for customization, the process will proceed to their configuration steps."}),"\n",(0,t.jsx)(n.li,{children:"If all parameters are automated, the simulation will be ready to run."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"customization-options",children:(0,t.jsx)(n.strong,{children:"Customization Options"})}),"\n",(0,t.jsx)(n.p,{children:"For advanced configurations, you can customize each parameter in detail. Following this workflow, you can customize the Sequential Gaussian Simulation process effectively:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Boundary Conditions"}),": Define how the simulation handles edges of the dataset."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Gaussian Transformation"}),": Configure transformations for data normalization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Variogram Models"}),": Adjust variogram parameters, angles, and lags for spatial continuity."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Search Plans"}),": Set search radii, anisotropy factors, and neighborhood sizes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Additional Parameters"}),": Define specific simulation constraints or advanced options."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Gaussian Transformation"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose:"})," Define the transformation for each attribute to simulate."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Select each attribute to simulate individually."}),"\n",(0,t.jsx)(n.li,{children:"Specify the lower and upper trimming values for each attribute."}),"\n",(0,t.jsx)(n.li,{children:"Choose the declustering attribute to adjust weights for the transformation."}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save and Continue"})," after setting all attributes."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Variogram Models"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose:"})," Configure the variogram model for each attribute to simulate."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Assign variogram models for each attribute."}),"\n",(0,t.jsx)(n.li,{children:"If a prior automated run was conducted, the generated variogram will be available for reference."}),"\n",(0,t.jsxs)(n.li,{children:["Optionally, use the ",(0,t.jsx)(n.strong,{children:"Variogram Analysis Tool On Point"})," to refine or load experimental variograms."]}),"\n",(0,t.jsx)(n.li,{children:"Adjust structures (e.g., spherical, nugget effect, axes) and save the settings."}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save and Continue"})," after completing the setup."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Search Plans"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose:"})," Define search plans for the simulation of each attribute."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Configure parameters such as major, semi-major, and minor axes."}),"\n",(0,t.jsx)(n.li,{children:"Adjust azimuth, dip, tilt, and the number of data points used in the search."}),"\n",(0,t.jsx)(n.li,{children:"Repeat the process for each attribute."}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save and Continue"})," when done."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"![][image21]"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Additional Parameters"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose:"})," Refine the simulation settings further."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Options:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Number of Realizations:"})," Define up to 100 realizations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Multigrid Search Levels:"})," Adjust grid search settings for better precision."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compute E-Type and Variance:"})," Toggle these settings to generate expected values and variance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Discretization Levels:"})," Set the discretization for X, Y, and Z directions."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The ",(0,t.jsx)(n.strong,{children:"Coefficient of Variation"})," will be computed if E-Type and Variance are selected."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Finalize:"})," Click ",(0,t.jsx)(n.strong,{children:"Save and Continue"})," after setting these parameters."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(6540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);