// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  workflowsSidebar: [
    {
      type: 'category',
      label: 'Workflow Domain Modeling',
      collapsed: true,
      items: [
        'Workflow_Domain_Modeling/Nearest_Neighbor',
        'Workflow_Domain_Modeling/Indicator_Kriging',
      ],
    },
    {
      type: 'category',
      label: 'Workflow Resource Modeling',
      collapsed: true,
      items: [
        'Workflow_Resource_Modeling/Nearest-Neighbor',
        'Workflow_Resource_Modeling/Inverse_Distance',
        'Workflow_Resource_Modeling/Kriging',
        'Workflow_Resource_Modeling/SGS',

      ],
    },
  ],
  elementsSidebar: [
    {
      type: 'category',
      label: 'Elements',
      collapsed: true,
      items: [
        'Elements/Topography_and_Meshes',
        'Elements/Drill-Hole',
        'Elements/Point',
        'Elements/Block-Model',

      ],
    },
  ],
  analisysSidebar: [
    {
      type: 'doc',
      id: 'Analysis/intro', // Página inicial
      label: 'Analysis Overview',
    },
    {
      type: 'category',
      label: 'Analysis On Point',
      collapsed: true,
      items: [
        'Analysis/Analysis_On_Point/Descriptive-Statistics',
        'Analysis/Analysis_On_Point/Histograms',
        'Analysis/Analysis_On_Point/Correlation-Matrix',
        'Analysis/Analysis_On_Point/Box-Plots',
        'Analysis/Analysis_On_Point/Scatter-Plots',
        'Analysis/Analysis_On_Point/Probability-Plots',
        'Analysis/Analysis_On_Point/Contingency-Table',
        'Analysis/Analysis_On_Point/Declustering',
        'Analysis/Analysis_On_Point/Capping-Analysis',
        'Analysis/Analysis_On_Point/Contact-Analysis',
        'Analysis/Analysis_On_Point/Backflagging',
        'Analysis/Analysis_On_Point/Variogram-Modeling',
      ],
    },
    {
      type: 'category',
      label: 'Analysis On Block Models',
      collapsed: true,
      items: [
        'Analysis/Analysis_On_Block_Models/Descriptive-Statistics',
        'Analysis/Analysis_On_Block_Models/Histograms',
        'Analysis/Analysis_On_Block_Models/Correlation-Matrix',
        'Analysis/Analysis_On_Block_Models/Box-Plots',
        'Analysis/Analysis_On_Block_Models/Scatter-Plots',
        'Analysis/Analysis_On_Block_Models/Probability-Plots',
        'Analysis/Analysis_On_Block_Models/Swath-Plots',
        'Analysis/Analysis_On_Block_Models/Contingency-Table',
        'Analysis/Analysis_On_Block_Models/Grade-Tonnage-Curves',
        'Analysis/Analysis_On_Block_Models/Drill-Hole-Spacing-DHS',
        'Analysis/Analysis_On_Block_Models/Smoothing',
        'Analysis/Analysis_On_Block_Models/LVA-Fields',
      ],
    },
  ],
  
  
  visualizationSidebar: [
    {
      type: 'doc',
      id: 'Utilities/utilities', // Página principal de Utilities
      label: 'Utilities Overview',
    },
    {
      type: 'category',
      label: 'Dynamic',
      collapsed: true,
      items: [
        'Utilities/Dynamic/Dynamic', // Archivo Dynamic.md
      ],
    },
    {
      type: 'category',
      label: 'Static',
      collapsed: true,
      items: [
        'Utilities/Static/2D-Slices', // Archivo 2D-Slices.md
        'Utilities/Static/3Dview',    // Archivo 3Dview.md
        'Utilities/Static/Share-View',    // Archivo Share-View.md
      ],
    },
  ],
  
};

export default sidebars;
