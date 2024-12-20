---
sidebar_label: 'Blackflagging'
---

# **Backflagging** {#backflagging}

Backflagging is typically used in the context of geostatistics or resource estimation, where data from drill holes are used to infer the characteristics of a block model, a representation of the spatial distribution of geological variables.

The workflow will be outlined, with an emphasis on the interaction between geological block model data and drill hole information, which are selected by the user based on specific criteria, such as belonging to the same project. This processed data can then be utilized for further analysis or reporting. The results are generated as a new column in the DrillHole project, named Backflagged (a label that can be renamed), allowing for 3D visualization as a categorical variable in the Utilities section.

Here is the workflow to apply the Backflagging tools on our platform:

1. Block Model Selection: The user selects a block model from a dropdown menu (*BM\_Built\_DH is currently selected*). This is the model that contains the data which will be backflagged.

2. Categorical Attribute Selection: The user selects a categorical attribute from another dropdown menu (*Dom\_Categ is selected*). This is likely an attribute within the block model that the user wants to analyze or use for backflagging.

3. Filters Application: If there are any filters that need to be applied to the data before backflagging, the user can set them in the 'Filters' section (*currently set to 'No filter*').  

4. Points Dataset Selection: The user selects the points dataset they want to work with from a dropdown menu (*DrillHole is currently selected*). This is presumably the dataset to which the backflagging will be applied.  

5. Running Backflagging: After setting up the block model, categorical attribute, point dataset, any necessary filters,  and the name of the column to be created with this information in 'drillhole project’ (point dataset),  the user can run the backflagging process by clicking the "Run backflagging" button.  

6. View Points Dataset: In this section, you can view the raw entries of the points dataset. You must select the “drillhole project” used to perform the backflagging.

7. Categorical Columns: There is a mention of 'Categorical Columns' with entries like lit\_lt, lit\_mo, and **Backflagged**. These are the different categorical columns available in the selected dataset that can be viewed or used in the analysis. For our purpose, the newly created column 'Backflagged' is the result of applying the tools.
