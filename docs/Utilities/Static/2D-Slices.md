---
sidebar_label: '2D Slices'
---
# **2D Slicing** {#2d-slicing}

The **Static Visualization** tool offers two distinct modes for visualizing project data: **2D Slices** and **3D Views**. 
Static visualization is designed for focused, pre-configured views with advanced customization and comparative capabilities.

The **2D Slicing** tool allows users to create cross-sectional views of their data by generating slices in specific orientations. These slices can be used to analyze spatial distributions, profiles, or relationships within the dataset. The tool provides both **automated** and **customized** slicing options for flexibility and precision.

---

## **Slicing Workflow**

Step 1: Configure Slices

* **Automated Slicing**:  
  * Select the **Automated Setting** option.  
  * This will generate 10 evenly spaced slices based on the difference between the maximum and minimum coordinates for the selected axis:  
    * Spacing \= (Max Value−Min Value)/10.  
    * The slices will cover the entire range of data automatically.  
* **Customized Slicing**:  
  * Select the **Customized Setting** option.  
  * Define the slicing parameters manually for greater control:  
    * **Origin**: Set the starting coordinate for slicing (Easting, Northing, or Elevation).  
    * **Number of Steps**: Specify the total number of slices to generate.  
    * **Step Size**: Determine the spacing between each slice.  
    * **Bandwidth**: Define the thickness of the slice, capturing data within a specified range.

Step 2: Select Elements to Display

* Navigate to the tabs at the bottom of the interface to choose the elements to project:  
  * **Drill-Holes Datasets**  
  * **Points Datasets**  
  * **Block Models**  
* For each selected element:  
  * **Attributes**: Select which attribute(s) to display on the slices.  
  * **Filters**: Apply filters to refine the displayed data if needed.  
  * **Scalar Bar**: Choose the color scale and set **min** and **max** ranges for values.  
  * **Point Size and Opacity**: Adjust the size of the points and their transparency.  
  * Enable the **On Screen** option to display the selected element in the visualization.

Step 3: Generate Slices

Once all parameters and elements are configured:

* Click the **Generate Slices** button to create the 2D slices.  
* The slices will be displayed in the main interface with the selected elements and attributes.

:::info
    This mode is ideal for generating slices or profiles of the data, providing clear cross-sectional views of the project.
    Orientation Options:
            * E-W (East-West)  
            * N-S (North-South)  
            * Up-Down (Horizontal)
:::
