---
sidebar_label: 'Inverse Distance, IDW'
sidebar_position: 2
---
# Inverse Distance

This guide provides a step-by-step walkthrough of the Inverse Distance Estimation interface, ensuring you can confidently configure your estimation parameters and data selection for geospatial analysis.

The guide is divided into two sections: the fully automated application and the customized application. It is possible to combine automated and customized options as needed.

Below is a step-by-step guide on how to use these tools. Although the usage is intuitive, user experience may influence the decisions and adjustments to be made.

---

## **Automated**

Step 1: Instance Creation

* Upon selecting this tool from the task tree on the left, the platform presents an interface where you can create a "new instance" or select existing instances to open, clone, or delete.  
* Enter the name and click the "New Instance" button to generate it. Remember that the name cannot be modified later. The interface immediately moves to the second step, working on the instance.

Step 2: Configure Estimation Parameters

1. Power Parameter:  
   1. Locate the 'Power parameter' field.  
   2. Input a numeric value to set the influence of proximity in your estimation. The default is often set at 2.0.  
2. Capping Threshold:  
   1. Find the 'Capping threshold' section.  
   2. Select 'Automated' to let the system determine the best thresholds.  
   3. Opt for 'Without capping' to proceed without any value restrictions.  
3. Boundary Conditions:  
   1. Navigate to the 'Boundary conditions' options.  
   2. Select 'Automated' for the system to configure these conditions.  
4. Search Plans:  
   1. In the 'Search Plans' area.  
   2. Select 'Automated' for system-generated search plans.  
5. Anisotropy:  
   1. Look for the 'Anisotropy' setting.  
   2. Select 'Automated' for default system settings.  
   3. Opt for 'Without anisotropy' if the model doesn’t need this specification.

Step 3: Data Selection

* Block Model:  
  * In the 'Block Model' section, click on the dropdown menu.  
  * Select the block model you will use for the estimation process.  
* Points Dataset:  
  * Go to the 'Points Dataset' dropdown menu.  
  * Choose the appropriate dataset that contains the points for estimation.  
* Attributes to Estimate:  
  * Under 'Attributes to Estimate', you will see a list of checkboxes.  
  * Tick the checkboxes corresponding to the attributes you are interested in estimating, such as 'cut''.  
* Filter:  
  * If you need to filter your points dataset, click on the 'Filter' dropdown.  
  * Select the filter that applies to your data points.

Step 4: Save and Run

* Review:  
  * Before proceeding, take a moment to review all the settings to ensure they align with your project's requirements.  
* Save and Continue:  
  * Once satisfied with the configurations, click the 'Save and continue' button at the bottom of the interface.  
  * This action saves your settings and takes you to the next step of the estimation process  
  * After making adjustments and selections, save the settings. A window will appear to decide whether to run the estimation domain modeling. Click "Run Instance," then confirm the action in the popup window.  
  * You can check the instance's status in "Logged." If you wish to explore other tools offered by Annapurna or start a new instance in another project, this is an available option.  
  * Once completed, review the report with the parameters adjusted by Annapurna automatically. Additionally, examine the results in 3D projection in the Utilities section and save the visualization link for sharing.  
  * This instance can be cloned to create a new one based on the automatically calculated parameters and make customized adjustments if needed.

Step 5 : Results

* Upon completion of the processing, a new column is generated in the block model database with the resulting information. This column is named after the attribute used for estimation, followed by the estimation method, suffixed with "\_Est" to indicate it as estimated.  
* Example: For instance, using "CuT" as the attribute and the "Kriging" method, the resulting column would be named "CuT\_KK\_Est".

---

## **Customized**

Step 1: Instance Creation

* Upon selecting this tool from the task tree on the left (Resource Modeling, Nearest Neighbor), the platform provides an interface where you can create a "new instance" or select existing instances to open, clone, or delete.  
* Creating an instance from scratch requires entering a name and clicking the "New instance" button to generate it. Remember that the assigned name cannot be modified later.  
* The interface immediately proceeds to the second step, working on the instance. If you've previously executed a procedure in your project either automated or customized and wish to work on that instance with new plan adjustments:  
  * Select the name of the completed instance and click "Open" to continue working on the same project under the same name.  
  * Alternatively, select the name of the completed instance, click "Clone," and then provide a new name for this cloned instance. Once created, select it from the dropdown list and click "Open."  
  * Working from a completed and executed instance allows you to utilize the parameters it brings and modify them as needed.

Step 2: Configure Estimation Parameters

* Power Parameter:  
  * Locate the 'Power parameter' field.  
  * Input a numeric value to set the influence of proximity in your estimation. The default is often set at 2.0.  
* Capping Threshold:  
  * Find the 'Capping threshold' section.  
  * Choose 'Customized' if you want to set specific value limits.  
  * Opt for 'Without capping' to proceed without any value restrictions.  
* Boundary Conditions:  
  * Navigate to the 'Boundary conditions' options.  
  * Choose 'Customized' to manually define the conditions at your study area's boundaries.  
* Search Plans:  
  * In the 'Search Plans' area.  
  * Choose 'Customized' to set up your own data search plans.  
* Anisotropy:  
  * Look for the 'Anisotropy' setting.  
  * Choose 'Customized' to configure anisotropy manually if your model requires it.  
  * Opt for 'Without anisotropy' if the model doesn’t need this specification.

Step 3: Data Selection

* Block Model:  
  * In the 'Block Model' section, click on the dropdown menu.  
  * Select the block model you will use for the estimation process.  
* Points Dataset:  
  * Go to the 'Points Dataset' dropdown menu.  
  * Choose the appropriate dataset that contains the points for estimation.  
* Attributes to Estimate:  
  * Under 'Attributes to Estimate', you will see a list of checkboxes.  
  * Tick the checkboxes corresponding to the attributes you are interested in estimating, such as 'cut', 'from', 'length', and 'to'.  
* Filter:  
  * If you need to filter your points dataset, click on the 'Filter' dropdown.  
  * Select the filter that applies to your data points.

Step 4: Save and Proceed

* Review:  
  * Before proceeding, take a moment to review all the settings to ensure they align with your project's requirements.  
* Save and Continue:  
  * Once satisfied with the configurations, click the 'Save and continue' button at the bottom of the interface.  
  * This action saves your settings and takes you to the next step of the estimation process.

### **Step 5: Customization Steps**

    1. Boundary Conditions Customization  
    1. Customized Selection: Upon selecting 'customized', you'll need to:  
        1. Define which categories within the domain are applicable for each other (e.g., High with Low, Mid with High).

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
            1. Input the search parameters such as Major axis, Semi-major axis, Minor axis, and Angles 1, 2, and 3, Min sample, Max Sample, Max sample per Drill Hole  
            2. This should be done for each domain unit, for every selected attribute.

    4. Anisotropy \- Attribute Customization  
        1. Customized Selection: With 'customized' chosen:  
            1. Specify the anisotropy ratios (ra, rb, rc) aligning with the major, semi-major, and minor axes.  
            2. This should be done for each selected attribute.

### Finalizing Customization

After adjusting the parameters in each section, make sure to review all values for accuracy and completeness. Remember to click 'Save and continue' after customizing each section to ensure your settings are recorded.

---
Additional Notes
:::tip
    * Customized settings offer more control but require a thorough understanding of the domain and the attributes being estimated.  
    * The interface allows for flexibility, so if the domain characteristics change or additional data becomes available, you can revisit and adjust the settings as needed.
:::
---

Step 6: Save and Run

* After making adjustments and selections, save the settings. A window will appear to decide whether to run the estimation domain modeling. Click "Run Instance," then confirm the action in the popup window.  
* You can check the instance's status in "Logged." If you wish to explore other tools offered by Annapurna or start a new instance in another project, this is an available option.  
* Once completed, review the report with the parameters adjusted by Annapurna automatically. Additionally, examine the results in 3D projection in the Utilities section and save the visualization link for sharing.  
* This instance can be cloned to create a new one based on the automatically calculated parameters and make customized adjustments if needed.

Step 7 : Results

    * Upon completion of the processing, a new column is generated in the block model database with the resulting information. This column is named after the attribute used for estimation, followed by the estimation method, suffixed with "\_Est" to indicate it as estimated.  
    * Example: For instance, using "CuT" as the attribute and the "Kriging" method, the resulting column would be named "CuT\_NN\_Est".
