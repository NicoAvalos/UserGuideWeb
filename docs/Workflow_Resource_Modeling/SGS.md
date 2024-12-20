---
sidebar_label: 'Sequential Gaussian Simulation, SGS'
sidebar_position: 4
---

# **Sequential Gaussian Simulations (SGS)**

This section outlines the workflow for performing sequential Gaussian simulations, both with and without **PPMt (Projection Pursuit Multivariate Transform).** While the overall workflow is similar for both methods, the key distinction lies in PPMt requiring the selection of at least two variables (attributes), thus defining it as a multivariable case.  
This guide provides a structured approach to efficiently configure and execute sequential Gaussian simulations tailored to your resource modeling needs.

---

## **Step-by-Step Workflow**

    **Step 1: Create the Instance**

    1. Navigate to the **Resource Modeling** section.  
    2. Under the **Instances** tab, select **Sequential Gaussian Simulation, SGS** from the list of available methods.  
    3. Assign a name to the instance and click the **Build New Instance** button.

    **Step 2: Select the Simulation Type**

        * Choose the simulation type: **Independent** or **Multivariable (PPMt)**. For PPMt, ensure you have selected at least two attributes.

    **Step 3: Configure Parameters**

    The interface provides a list of parameters that can be set to either **Automated** or **Customized** modes. By default, the automated configuration runs 10 simulations using default settings. You can selectively customize specific parameters based on your requirements.

    The parameters available for customization or automation include:

    * **Boundary Conditions**  
    * **Gaussian Transformation**  
    * **Variogram Models**  
    * **Search Plans**  
    * **Additional Parameters**

    Refer to the attached interface screenshots for guidance.

![][image19]

    **Step 4: Set Datasets and Attributes**

Once you have configured the parameters:

    1. **Datasets**:  
        * Select the **Points Dataset** and the **Block Model Dataset** that will be used for the simulation.  
        * Specify the **Point Domain** and **Block Model Domain**.  
        * If applicable, apply a **Point Filter**.  
    2. **Attributes**:  
        * Select the attributes you want to simulate.  
        * Optionally, customize the output column name for the simulated attributes. For example, if the attribute is "Au," you can set the output name as "Au\_out," and the results will generate columns like:  
                * Au\_out\_SGS\_\# (where \# is the simulation number)  
                * Au\_out\_Mean  
                * Au\_out\_Var

    **Step 5: Save and Continue**

After setting all configurations in the interface, click **Save and Continue**:

    >   * If you have selected any parameters for customization, the process will proceed to their configuration steps.  
    >   * If all parameters are automated, the simulation will be ready to run.

---

## **Customization Options**

For advanced configurations, you can customize each parameter in detail. Following this workflow, you can customize the Sequential Gaussian Simulation process effectively:

1. **Boundary Conditions**: Define how the simulation handles edges of the dataset.  
2. **Gaussian Transformation**: Configure transformations for data normalization.  
3. **Variogram Models**: Adjust variogram parameters, angles, and lags for spatial continuity.  
4. **Search Plans**: Set search radii, anisotropy factors, and neighborhood sizes.  
5. **Additional Parameters**: Define specific simulation constraints or advanced options.

---

    **Gaussian Transformation**

* **Purpose:** Define the transformation for each attribute to simulate.  
* **Steps:**  
  1. Select each attribute to simulate individually.  
  2. Specify the lower and upper trimming values for each attribute.  
  3. Choose the declustering attribute to adjust weights for the transformation.  
  4. Click **Save and Continue** after setting all attributes.

---

    **Variogram Models**

* **Purpose:** Configure the variogram model for each attribute to simulate.  
* **Steps:**  
  1. Assign variogram models for each attribute.  
  2. If a prior automated run was conducted, the generated variogram will be available for reference.  
  3. Optionally, use the **Variogram Analysis Tool On Point** to refine or load experimental variograms.  
  4. Adjust structures (e.g., spherical, nugget effect, axes) and save the settings.  
  5. Click **Save and Continue** after completing the setup.

---

    **Search Plans**

* **Purpose:** Define search plans for the simulation of each attribute.  
* **Steps:**  
  1. Configure parameters such as major, semi-major, and minor axes.  
  2. Adjust azimuth, dip, tilt, and the number of data points used in the search.  
  3. Repeat the process for each attribute.  
  4. Click **Save and Continue** when done.

![][image21]

---

    **Additional Parameters**

* **Purpose:** Refine the simulation settings further.  
* **Options:**  
  1. **Number of Realizations:** Define up to 100 realizations.  
  2. **Multigrid Search Levels:** Adjust grid search settings for better precision.  
  3. **Compute E-Type and Variance:** Toggle these settings to generate expected values and variance.  
  4. **Discretization Levels:** Set the discretization for X, Y, and Z directions.  
* **Note:** The **Coefficient of Variation** will be computed if E-Type and Variance are selected.

>**Finalize:** Click **Save and Continue** after setting these parameters.
