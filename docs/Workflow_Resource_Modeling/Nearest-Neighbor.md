---
sidebar_label: 'Nearest Neighbor, NN'
sidebar_position: 1
---
# Resource Modeling

Annapurna offers three effective tools for resource modeling in your projects: **Nearest Neighbor, Inverse Distance, and Kriging (Ordinary and Simple).** Each of these options can be executed with all parameters fully automated, allowing Annapurna to make the necessary adjustments even on the first run. Once the process is completed, a detailed report is generated, and the model can be visualized in 3D in the Visualization section.

Additionally, created instances can be modified, adjusted, or cloned (with a new name), facilitating the preservation of desired results and comparison with other modeling executions.

Below is a step-by-step guide on how to use these tools. Although the usage is intuitive, user experience may influence the decisions and adjustments to be made.

---

## **Nearest Neighbor**

The guide is divided into two sections: the fully automated application and the customized application. It is possible to combine automated and customized options as needed.

Below is a step-by-step guide on how to use these tools. Although the usage is intuitive, user experience may influence the decisions and adjustments to be made.

### **Automated**

Step 1: Instance Creation

* Upon selecting this tool from the task tree on the left, the platform presents an interface where you can create a "new instance" or select existing instances to open, clone, or delete.  
* Enter the name and click the "New Instance" button to generate it. Remember that the name cannot be modified later. The interface immediately moves to the second step, working on the instance.

Step 2: Search Plan Settings

* Once the instance is created, the interface prompts you to make adjustments. You're presented with two alternatives: Customized or Automated. For this example, we select **Automated** for the fourt possible parameters to apply a Nearest Neighbor Estimation in Resources Modeling:  
  1. Capping Threshold  
  2. Boundary conditions  
  3. Search Plans.  
  4. Anisotropy

Step 3: Dataset Selection

* Choose the block model and points containing the database for domain estimations, selecting at least one attribute to estimate. You may or may not apply specific filters for the block model and/or Point Dataset.  
* Remember that both the block model and point information must refer to the same project, maintaining spatial correlation with the project area.

Step 4: Save and Run

* After making adjustments and selections, save the settings. A window will appear to decide whether to run the estimation domain modeling. Click "Run Instance," then confirm the action in the popup window.  
* You can check the instance's status in "Logged." If you wish to explore other tools offered by Annapurna or start a new instance in another project, this is an available option.  
* Once completed, review the report with the parameters adjusted by Annapurna automatically. Additionally, examine the results in 3D projection in the Utilities section and save the visualization link for sharing.  
* This instance can be cloned to create a new one based on the automatically calculated parameters and make customized adjustments if needed.

Step 5 : Results

* Upon completion of the processing, a new column is generated in the block model database with the resulting information. This column is named after the attribute used for estimation, followed by the estimation method, suffixed with "\_Est" to indicate it as estimated.  
* Example: For instance, using "CuT" as the attribute and the "Kriging" method, the resulting column would be named "CuT\_KK\_Est".

---

### **Customized**

When setting up advanced geological estimation processes, customizing parameters to fit your specific data can enhance accuracy and relevance. This guide will walk you through the steps to customize parameters in the capping, boundary conditions, search plans, and anisotropy sections of the software.

Step 1: Instance Creation

* Upon selecting this tool from the task tree on the left (Resource Modeling, Nearest Neighbor), the platform provides an interface where you can create a "new instance" or select existing instances to open, clone, or delete.  
* Creating an instance from scratch requires entering a name and clicking the "New instance" button to generate it. Remember that the assigned name cannot be modified later.  
* The interface immediately proceeds to the second step, working on the instance. If you've previously executed a procedure in your project either automated or customized and wish to work on that instance with new plan adjustments:  
  * Select the name of the completed instance and click "Open" to continue working on the same project under the same name.  
  * Alternatively, select the name of the completed instance, click "Clone," and then provide a new name for this cloned instance. Once created, select it from the dropdown list and click "Open."  
  * Working from a completed and executed instance allows you to utilize the parameters it brings and modify them as needed.

Step 2: Search Plan Settings

* Once the instance is created, the interface prompts you to make adjustments. You're presented with two alternatives: Customized or Automated. For this example, we select **Customized** for the four possible parameters to apply a Nearest Neighbor Estimation in Resources Modeling. This will prompt the interface to sequentially display each parameter after saving and continuing, allowing you to make adjustments as desired. (Conditional on this being step 4 of the process):  
  1. Capping Threshold  
  2. Boundary conditions  
  3. Search Plans.  
  4. Anisotropy

Step 3: Dataset Selection

        * Choose the block model and points containing the database for domain estimations, selecting at least one attribute to estimate. You may or may not apply specific filters for the block model and/or Point Dataset.  
        * Remember that both the block model and point information must refer to the same project, maintaining spatial correlation with the project area.

### **Step 4: Customization Steps**

1. Boundary Conditions Customization  
   1. Customized Selection: Upon selecting 'customized', you'll need to:  
      1. Define which categories within the domain are applicable for each other (e.g., High with Low, Mid with High).  
      2. Indicative example image

2. Capping/High-Yield \- Attribute Customization  
   1. Capping: If 'customized' is selected from the dropdown menu, the following parameters must be adjusted:  
      1. Percentile values (e.g., p97, p98, p99) for each category in the domain.  
      2. Capping values for each category.

   2. High-Yield: If 'customized' is selected from the dropdown menu, the following parameters must be adjusted in Yes or No:  
      1. No: If you select No High-Yield, then not necessary the following step  
      2. Yes: This indicated that High Yield it will be apply, so is necessary to setting the following parameters

      3. **Define Drop Capped Values**: Decide whether to include or exclude extreme values from the calculation using the **Drop Capped Values** option.

      4. **Configure Anisotropy**: Adjust the **Major Axis**, **Semi-Major Axis**, and **Minor Axis** to reflect the geometry of the deposit.

:::tip
*The use of **High-Yield** is essential when aiming to minimize the impact of outliers or extreme values in the resource model. However, its application must be carefully evaluated, considering the geological context and the level of confidence in the data.*
:::

    3. Search Plans Customization  
    1. Customized Selection: When the 'customized' option is chosen:  
        1. Input the search parameters such as Major axis, Semi-major axis, Minor axis, and Angles 1, 2, and 3 for each plan.  
        2. Example image indicating possible parameters to modify.

    4. Anisotropy \- Attribute Customization  
    1. Customized Selection: With 'customized' chosen:  
        1. Specify the anisotropy ratios (ra, rb, rc) aligning with the major, semi-major, and minor axes.

### Finalizing Customization

* After adjusting the parameters in each section, make sure to review all values for accuracy and completeness.  
* Remember to click 'Save and continue' after customizing each section to ensure your settings are recorded.

:::info
    * Customized settings offer more control but require a thorough understanding of the domain and the attributes being estimated.  
    * The interface allows for flexibility, so if the domain characteristics change or additional data becomes available, you can revisit and adjust the settings as needed.
:::

Step 5: Save and Run

* After making adjustments and selections, save the settings. A window will appear to decide whether to run the estimation domain modeling. Click "Run Instance," then confirm the action in the popup window.  
* You can check the instance's status in "Logged." If you wish to explore other tools offered by Annapurna or start a new instance in another project, this is an available option.  
* Once completed, review the report with the parameters adjusted by Annapurna automatically. Additionally, examine the results in 3D projection in the Utilities section and save the visualization link for sharing.  
* This instance can be cloned to create a new one based on the automatically calculated parameters and make customized adjustments if needed.

Step 6 : Results

* Upon completion of the processing, a new column is generated in the block model database with the resulting information. This column is named after the attribute used for estimation, followed by the estimation method, suffixed with "\_Est" to indicate it as estimated.  
* Example: For instance, using "CuT" as the attribute and the "Kriging" method, the resulting column would be named "CuT\_NN\_Est".

:::note
For assistance with customization or further details on how to optimize these settings for your specific requirements, please contact technical support or refer to the detailed documentation available within the software.
:::
