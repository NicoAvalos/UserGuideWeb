---
sidebar_label: 'Variogram Modeling'
---

# **Variogram modeling** {#variogram-modeling}

Step 1: Data Point Selection

* From the "Point" dropdown menu, select the comparisons or points dataset you wish to analyze.

Step 2: Domain Selection

* Use the "Domain" dropdown menu to choose the primary domain for the analysis. In this example, "lit\_mo" has been selected.  
* An interface is deployed at the bottom which provides a list of the Main Domains and Units according to the selected domain. In this place, you should select those that you wish to be considered for carrying out the variogram.

Step 3: Attribute Selection

* From the "Attribute" dropdown menu, choose the attribute you wish to analyze. The user is expected to select the specific attribute or variable for which the variogram is to be modeled. This could be a geological property, like metal grade or rock type, such as "mo" for Molybdenum in this example.

Step 4: Filter Application (optional)

* If needed, you can apply additional filters using the "Filter" dropdown menu.  
* The default configuration is with no filter applied.

Step 5: Confirm Selections and View Processed Results

Once the user has made their selections from the four dropdown menus and executed the variogram, they will obtain a 3D visualization of the variogram model. This visualization can help in understanding the spatial relationships and continuity of the chosen attribute across the study area.

With the 3D model obtained, the user can then proceed to step 6 in the variogram modeling workflow.

Step 6: Post Process experiment result

After automatically executing and obtaining the variogram results, which can also be visualized in 3D with their corresponding ellipsoid, the platform provides the opportunity to perform experimental variograms for necessary adjustments. The interface shown in the image is designed for this purpose and allows the user to manually refine variogram parameters to closely match the spatial characteristics of the studied phenomenon. The process is as follows:

1. Global Parameters:  
   * Number of Lags: Defines how many lag distances will be calculated.  
   * Lag Distances: The separation distance between sample points within a lag.  
   * Lag Tolerance: The allowed variation around each lag distance to include data pairs in the analysis.  
   * Standardize Sills: A toggle to determine if the sill, the plateau of the variogram, should be standardized (0 for 'No', 1 for 'Yes').  
2. Directional Settings for Direction 1:  
   * Azimuth: The compass direction along which the variogram is calculated.  
   * Azimuth Tolerance: The angular leeway given to the azimuth for including data pairs.  
   * Horizontal Bandwidth: The maximum distance perpendicular to the azimuth within which data pairs are considered.  
   * Dip: The plunge or inclination angle for 3D variograms.  
   * Dip Tolerance: The angular leeway given to the dip for including data pairs.  
   * Vertical Bandwidth: Similar to horizontal bandwidth, but applied vertically.  
3. Repeat Process for Direction 2 and Direction 3:  
   * The process detailed for Direction 1 does not automatically apply to Directions 2 and 3\. Instead, the user must manually repeat the process, carefully adjusting the parameters for each direction.  
   * This ensures that the variograms for each direction can be individually tailored, which is essential when the spatial characteristics of the phenomenon being studied differ by direction.  
   * These settings allow the user to model anisotropy, which is the directional dependence of the spatial continuity, thereby gaining a more accurate and detailed understanding of the spatial variation.
4. Structural adjust:

Following manual adjustments in direction settings, additional structural adjustment options become available. These structural adjustments are pivotal in refining the variogram model, as illustrated in the provided image.

The interface allows the user to specify various structures that comprise the variogram model, each with its respective parameters:

* Nugget Effect: This represents spatial variability at very small distances, typically at scales too fine to be measured. A value for the "Sill," which is the variance represented by this structure, is set here.  
* Variogram Structures: Within this section, multiple structures can be defined, such as spherical, exponential, or Gaussian, along with their associated parameters like "Sill," "Azimuth" (the angle on the horizontal plane), "Dip" (the vertical inclination angle), and "Tilt" (the lateral inclination angle), as well as the major, semi-major, and vertical axes. These structures assist in modeling spatial continuity and anisotropy at various scales and orientations.

Step 7: Saving and Updating the Variogram Model

Upon setting these parameters, the user can proceed to save the model by clicking "Save". Doing so generates new 2D graphs that depict the adjusted variogram, and the 3D visualization is updated accordingly. This iterative process of adjustment and visualization allows the user to progressively refine the variogram model, achieving a fit that accurately represents the spatial variability of the attribute under study. The ability to save the model is crucial, as it aids in comparing various adjustments and their impact on the final estimation. This feature is particularly vital in fields such as mining geology, hydrology, and other earth sciences that rely on detailed spatial analysis.

## **Load Variogram From Instances (Automatized or Custom)**

      **Working with Instance-Based Variograms**

The process of constructing or modifying variograms for saving and reusing in any instance also applies to retrieving variogram parameters from completed instances. To access a specific variogram used in a completed instance, navigate to the **“Instance-Based Variogram”** tab. Within this tab, specify the following key information to identify the desired variogram:

* **Workflow**: The process category.  
* **Method**: The method applied during the instance.  
* **Instance**: The specific instance to retrieve parameters from.  
* **Attribute**: The data attribute used in the instance.  
* **Variogram Model**: The variogram model applied.

Once you have specified the correct variogram model and instance, click the **Load** button. This will populate the variogram analysis interface with all the associated parameters, including angles, lags, and other settings. From here, you can make the necessary adjustments to fine-tune the variogram model.

After completing your adjustments and confirming that this is the variogram you wish to use, click the **Save** button. This action will update the instance with the new experimental variogram model.

To apply this updated variogram:

1. Open the specific instance in a new tab.  
2. Customize the variogram option using the updated model.  
3. Verify that all settings are correctly configured.  
4. Continue with the workflow and run the program to apply the new variogram.

This workflow ensures flexibility and precision, allowing you to iterate on variograms while maintaining consistency with past instances.

:::caution
**If you close, leave, this window or interface without saving, all adjustments made will be lost.**
:::
