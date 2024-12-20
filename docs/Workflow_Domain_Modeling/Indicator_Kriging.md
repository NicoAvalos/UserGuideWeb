---
sidebar_label: 'Indicator Kriging, IK'
sidebar_position: 2
---
# **Kriging** {#kriging}

The process for conducting domain estimation using Kriging is akin to the application of Nearest Neighbor. The guide is divided into two sections: the fully automated application and the customized application. It is possible to combine automated and customized options as needed.

Below is a step-by-step guide on how to use these tools. Although the usage is intuitive, user experience may influence the decisions and adjustments to be made.

---

## **Automated**

    **Step 1: Instance Creation**

* Upon selecting this tool from the task tree on the left, the platform presents an interface where you can create a "new instance" or select existing instances to open, clone, or delete.  
* Enter the name and click the "Build New Instance" button to generate it. Remember that the name cannot be modified later. The interface immediately moves to the second step, working on the instance.

    **Step 2: Search Plan Settings**

  * Once the instance is created, the interface prompts you to make adjustments. You're presented with two alternatives: Customized or Automated. For this example, we select **Automated** for the three possible parameters to apply an indicator Kriging estimation:  
      1. a) Variogram Models  
      2. b) Kriging Plan  
      3. c) Additional Parameters.

![][image52]

    **Step 3: Dataset Selection**

      * Choose the block model and points containing the database for domain estimations, selecting at least one attribute to estimate. You may or may not apply specific filters for the block model and/or Point Dataset.  
      * Remember that both the block model and point information must refer to the same project, maintaining spatial correlation with the project area.

    **Step 4: Save and Run**

      * After making adjustments and selections, save the settings. A window will appear to decide whether to run the estimation domain modeling. Click "Run Instance," then confirm the action in the popup window.  
      * You can check the instance's status in "Logged." If you wish to explore other tools offered by Annapurna or start a new instance in another project, this is an available option.  
      * Once completed, review the report with the parameters adjusted by Annapurna automatically. Additionally, examine the results in 3D projection in the Utilities section and save the visualization link for sharing.  
      * This instance can be cloned to create a new one based on the automatically calculated parameters and make customized adjustments if needed.

![][image53]

    **Step 5 : Results**

      * Upon completion of the processing, a new column is generated in the block model database with the resulting information. This column is named after the attribute used for estimation, followed by the estimation method, suffixed with "\_Est" to indicate it as estimated.  
      * Example: For instance, using "CuT" as the attribute and the "Kriging" method, the resulting column would be named "CuT\_KK\_Est".

---

## **Customized**

    **Step 1: Instance Creation**

* Upon selecting this tool from the task tree on the left (Domain Modeling, Kriging), the platform provides an interface where you can create a "new instance" or select existing instances to open, clone, or delete.  
* Creating an instance from scratch requires entering a name and clicking the "New instance" button to generate it. Remember that the assigned name cannot be modified later.  
* The interface immediately proceeds to the second step, working on the instance. If you've previously executed a procedure in your project either automated or customized and wish to work on that instance with new plan adjustments:  
  * Select the name of the completed instance and click "Open" to continue working on the same project under the same name.  
  * Alternatively, select the name of the completed instance, click "Clone," and then provide a new name for this cloned instance. Once created, select it from the dropdown list and click "Open."  
  * Working from a completed and executed instance allows you to utilize the parameters it brings and modify them as needed.

![][image47]

    **Step 2: Search Plan Settings**

* Once the instance is created, the interface prompts you to make adjustments. You're presented with two alternatives: Customized or Automated. For this example, we select **Customized** for the three possible parameters to apply an indicator Kriging estimation. This will prompt the interface to sequentially display each parameter after saving and continuing, allowing you to make adjustments as desired. (Conditional on this being step 4 of the process):  
  1. Variogram Models  
  2. Kriging Plan  
  3. Additional Parameters.

    **Step 3: Dataset Selection**

* Choose the block model and points containing the database for domain estimations, selecting at least one attribute to estimate. You may or may not apply specific filters for the block model and/or Point Dataset.  
* Remember that both the block model and point information must refer to the same project, maintaining spatial correlation with the project area.

![][image54]

    **Step 4: Save and Continue**

* After making adjustments and selections, save the settings. A window will appear to customize the parameters. Below, the interface and the parameters that can be adjusted for each customizable option will be displayed

---

### 1. **Variogram Models**

This section allows for the custom configuration of parameters for each domain. You can adjust the values of the model, threshold, and the three spatial orientation angles, as well as the dimensions of the major, minor, and vertical axes to tailor the analysis to the specific characteristics of the geological domain under study. We will present a quick guide:

1. Select the domain you want to configure in the main interface.  
2. In the section, you will find three options: Structure 1, Structure 2, and Structure 3\.  
3. For each structure you want to adjust, follow the steps below.

Adjustable Parameters

* For each geological structure within your domain, you can customize the following parameters:  
* Model: Choose the geostatistical model that best represents the spatial continuity of your structure. The available options are usually models such as Exponential, Gaussian, among others.  
* Sill: Define the threshold value at which the variogram plateaus, representing the total variance.  
* Angle 1 (Azimuth): Adjust the direction of maximum horizontal continuity of the structure.  
* Angle 2 (Dip): Set the vertical inclination from the horizontal to reflect continuity in depth.  
* Angle 3 (Tilt): Modify the orientation of the tilt plane with respect to the major axis.  
* Major Axis: Determine the length of the axis of maximum spatial continuity.  
* Minor Axis: Specify the length of the axis perpendicular to the major axis within the horizontal plane.  
* Vertical Axis: Stipulate the length of the axis perpendicular to the plane formed by the major and minor axes.

General Instructions

1. Each parameter field is editable. Click on the corresponding field to enter the desired value.  
2. The values can be numeric and in some cases selectable from a predefined list of options.  
3. Once the values are entered, select 'Save' or 'Update' to apply the changes to the structure's configuration.

:::caution
**Structure is available for optional use and can be omitted if it is not necessary for your analysis.**
:::

Then saved it, next step is going to customize the Kriging Plan (in case that was selected as customized)

![][image55]

---

### 2. **Kriging Plan**

Follow this quick guide to customize the parameters across different plans for your domain.

Configuring Kriging Plans

1. Selecting the Domain: At the top of the interface, select the domain for which you are creating a kriging plan from the dropdown menu. Each domain may have different geological characteristics, and this tool allows for separate kriging configurations to reflect that diversity.

2. Defining Parameters: Below the domain selection, you will see a table labeled 'Block Model' followed by your document name, domain, and unit classification. Each column under 'Plan 1', 'Plan 2', 'Plan 3', and 'Plan 4' represents a different kriging plan for which you can define parameters.

3. Entering Values:

    * Major Axis: The primary range of influence for the kriging estimation.  
    * Semi-Major Axis: The secondary range, perpendicular to the major axis.  
    * Minor Axis: The tertiary range, usually the vertical component.  
    * Angle 1: The azimuthal direction of the major axis.  
    * Angle 2: The dip of the major axis, representing its vertical inclination.  
    * Angle 3: The tilt of the semi-major axis.  
    * Min Samples: The minimum number of samples required for a kriging estimate.  
    * Max Samples: The maximum number of samples to be used in an estimation.  
    * Max Samples per DH: The maximum number of samples per drill hole to be used.

4. Input Validation: Ensure that the values entered are within acceptable ranges and reflect the spatial characteristics of the domain. The input fields may have validation to prevent erroneous entries.

5. Applying Configurations: After entering your parameters, these settings can be applied to the kriging process, which will affect how the resource estimation is conducted. Make sure to review and save your settings.

Considerations

* Plans that are not being used should be set to zero or left blank.

Please save your configuration after setting the parameters for each plan. For further assistance, consult the help documentation or reach out to technical support.

![][image56]

---

### 3. **Additional Parameters.**

* Domain Selection: Utilize the dropdown to choose the geological domain for analysis.  
* Proportion Inputs: Input fields are provided for entering the distribution percentages of the selected attribute across the chosen domain. These should sum to 100% to represent the full distribution.

Action Steps:

1. Select the appropriate domain or the attribute you need to estimate from the dropdown menus.  
2. Input the distribution proportions in the provided fields within the 'Units' section. Ensure their sum equals 100% to accurately reflect the domain's complete attribute distribution.  
3. Once you've filled in the distribution percentages, click '**Save and continue**' to lock in your parameters and proceed with the estimation process.

![][image57]

You can utilize multiple tools provided by Annapurna to support your decisions.
Now we will continue with the next Step.

    **Step 5: Save and Run**

* After making adjustments and selections, save the settings. A window will appear to decide whether to run the estimation domain modeling. Click "Run Instance," then confirm the action in the popup window.  
* You can check the instance's status in "Logged." If you wish to explore other tools offered by Annapurna or start a new instance in another project, this is an available option.  
* Once completed, review the report with the parameters adjusted by Annapurna automatically. Additionally, examine the results in 3D projection in the Utilities section and save the visualization link for sharing.  
* This instance can be cloned to create a new one based on the automatically calculated parameters and make customized adjustments if needed.

![][image58]  

    **Step 6 : Results**

* Upon completion of the processing, a new column is generated in the block model database with the resulting information. This column is named after the attribute used for estimation, followed by the estimation method, suffixed with "\_Est" to indicate it as estimated.  
* Example: For instance, using "CuT" as the attribute and the "Kriging" method, the resulting column would be named "CuT\_KK\_Est".

:::info
**In case you apply both tools for domain modeling in the same Block Model, this block model will have additional columns in its datasets, encompassing all the resulting outcomes.**
:::
