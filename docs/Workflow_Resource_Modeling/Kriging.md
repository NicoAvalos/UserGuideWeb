---
sidebar_label: 'Kriging, OK/SK'
sidebar_position: 3
---

# **Kriging: Ordinary and Simple (OK, SK)** {#kriging:-ordinary-and-simple-(ok,-sk)}

## **Step-by-step Workflow**

Step 1: Instance Creation

* Upon selecting this tool from the task tree on the left, the platform presents an interface where you can create a "new instance" or select existing instances to open, clone, or delete.  
* Under the **Instances** tab, select **Kriging** from the list of available methods.  
* Enter the name and click the "New Instance" button to generate it. Remember that the name cannot be modified later. The interface immediately moves to the second step, working on the instance.

Step 2: Choose Kriging Type

* Kriging Type:  
  * At the top of the interface, you will see a dropdown labeled 'Kriging Type'.  
  * Select either 'Ordinary' or 'Simple' Kriging based on your project needs. Ordinary Kriging is commonly used and accounts for the mean of the data, whereas Simple Kriging requires a known mean.

Step 3: Configure Kriging Parameters

* Capping Threshold:  
  * Choose 'Customized' to set specific value limits for your data.  
  * Opt for 'Automated' to allow the system to set optimal value thresholds.  
  * Select 'No capping' if you wish to work with raw data without any imposed limits.  
* Boundary Conditions:  
  * Select 'Customized' to manually establish conditions at the periphery of your study area.  
  * Choose 'Automated' to let the system determine the boundary conditions.  
* Variogram Models:  
  * Pick 'Customized' to define your own variogram models that describe spatial relationships.  
  * Choose 'Automated' for the system to select a variogram model for you.  
* Kriging Plans:  
  * Choose 'Customized' to create a kriging plan based on your analysis requirements.  
  * Select 'Automated' to use a system-generated kriging plan.  
* Additional Parameters:  
  * If there are additional parameters that need specification, select 'Customized'.  
  * For automated configuration of any other parameters, choose 'Automated'.

Step 4: Data Selection

* Block Model:  
  * From the 'Block Model' dropdown, select the block model relevant to your estimation task.  
* Points Dataset:  
  * Use the 'Points Dataset' dropdown to choose the dataset containing your points of data.  
* Attributes to Estimate:  
  * Check the boxes for the attributes you want to estimate such as 'cut', 'from', 'length', and 'to'.  
* Filter:  
  * If needed, apply a filter to your dataset by selecting an appropriate option from the 'Filter' dropdown menu.

Step 5: Save and Execute

* Review:  
  * Ensure all settings are correct and aligned with your project's specifications.  
* Save and Continue:  
  * Click the 'Save and continue' button to save your configuration.  
  * Decide whether to execute the domain estimation immediately or to review settings further.  
* Run Instance:  
  * If you choose to run the estimation, confirm the action in the pop-up window.  
  * Monitor the status of your instance in the 'Logged' section.  
* Review and Share Results:  
  * Once the estimation completes, review the automatically adjusted parameters and results.  
  * Examine the 3D projections in the 'Utilities' section and save the visualization link for future reference or sharing.

:::note
    * Remember that your block model and points dataset should be from the same project and maintain spatial correlation. The instance created can be cloned to base new estimations on previously automated parameters, with the option for further customization
:::

---

## **Customization of Estimation Parameters for Kriging**

This section is dedicated to the customization of estimation parameters that apply to both Ordinary and Simple Kriging methodologies. It serves as a comprehensive guide designed to help you calibrate each setting to the unique demands of your project. Whether your choice is Ordinary or Simple Kriging, the customizable parameters provided will facilitate a tailored approach to your spatial data analysis.

The interfaces that will be showcased aim to guide you through the configuration possibilities, mirroring the intuitive nature of the software itself. While the process is designed to be user-friendly, it requires a level of expertise and decision-making that is unique to each user. You are encouraged to leverage the tools available within the software for assistance and to reach out to our support team should you need more specialized guidance.

With the appropriate application of these tools, you can fine-tune your analysis to achieve results that are as precise as they are relevant, harnessing the full potential of the Kriging estimation techniques at your disposal.

:::tip
All these adjustments and modifications are meticulously documented and saved in a report that you can consult, save to your device, and even print for your convenience and records.*
:::

    1. Boundary Conditions:  
        1. Select 'Customized' to manually establish conditions at the periphery of your study area.  
        2. Sequentially select the domain units for estimation in the rows labeled 'Domain\_IK\_rows' and the columns labeled 'Domain\_columns' in the points dataset. In the image example, you should select an option from 'High,' 'Low,' or 'Mid' in both the intersecting row and column, which is visually indicated by a blue dashed line and selection checkboxes.  
        3. Ensure that the estimation domains match between the block model and the points dataset.

    2. Capping Threshold:  
        1. Choose 'Customized' to set specific value limits for your data.  
        2. Choose the Attribute:  
            * For each attribute to estimate, the parameters must be adjusted. You do this by selecting the attribute from the 'Attribute to Estimate', this displays a dropdown menu with the options available for selection, example “cut”.

        3. Capping/High-Yield \- Attribute Customization  
            * Capping: If 'customized' is selected from the dropdown menu, the following parameters must be adjusted:  
                1) Percentile values (e.g., p97, p98, p99) for each category in the domain.  
                2) Capping values for each category.

            * High-Yield: If 'customized' is selected from the dropdown menu, the following parameters must be adjusted in Yes or No:  
                1) No: If you select No High-Yield, then not necessary the following step  
                2) Yes: This indicated that High Yield it will be apply, so is necessary to setting the following parameters

                3) **Define Drop Capped Values**: Decide whether to include or exclude extreme values from the calculation using the **Drop Capped Values** option.

                4) **Configure Anisotropy**: Adjust the **Major Axis**, **Semi-Major Axis**, and **Minor Axis** to reflect the geometry of the deposit.

>By following these steps, you adjust the capping parameters for different statistical percentiles in the dataset, helping manage outliers and extreme values within the specified domain units. For both types of Kriging (Ordinary and Simple).

:::tip
The use of High-Yield is essential when aiming to minimize the impact of outliers or extreme values in the resource model. However, its application must be carefully evaluated, considering the geological context and the level of confidence in the data.
:::

    3. Variogram Models:  
        1. Pick 'Customized' to define your own variogram models that describe spatial relationships.  
        2. Select the attribute by using the 'Attribute to Estimate' dropdown menu.  
        3. For each attribute, the following structural parameters (Structures 1, 2, and 3\) will be adjusted for each unit of the domain to estimate.  
        4. Within each Structure (1, 2, and 3), you will need to choose the model for the variogram and set the parameters: Sill, Angle 1 (azimuth), Angle 2 (dip), Angle 3 (tilt), Major Axis, Minor Axis, and Vertical Axis.  
        5. The Nugget Effect must be adjusted for each estimation unit.  
        6. Once all selections and adjustments have been made, click 'Save and continue' to proceed.
    4. Kriging Plans:  
        1. Choose 'Customized' to create a kriging plan based on your analysis requirements.  
        2. Input the search parameters such as Major axis, Semi-major axis, Minor axis, and Angles 1, 2, and 3, Min sample, Max Sample, Max sample per Drill Hole  
        3. This should be done for each domain unit, for every selected attribute.

    5. Additional Parameters:  
        1. If there are additional parameters that need specification, select 'Customized'.  
        2. Specify the 'Trimming' values, which are the limits for the data that will be included in the estimation. Enter the lower and upper bounds in the respective fields.  
        3. Set the 'Discretization' for each axis (Easting, Northing, Elevation) to define how the data will be divided or represented within the Kriging model. Enter the desired discretization level for each axis in the corresponding fields.  
        4. After defining these additional parameters, click 'Save and continue' to apply the settings and move on to the Kriging estimation process.
