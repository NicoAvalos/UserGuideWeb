---
sidebar_label: 'Dynamic View'
---

# Dynamic View

The Dynamic Viewer section enables users to interactively visualize and explore project elements in a dynamic 3D environment. This tool allows for the flexible display of different components such as meshes, points, and block models, with optional filters and customization of the visualization parameters.

The **Dynamic Viewer** is highly interactive, allowing users to manipulate the visualization in real-time for a comprehensive understanding of their data. Ensure that filters applied to elements are correctly set to avoid discrepancies in the visualized data.

This section provides extensive customization options for both individual datasets and the global display settings. These tools allow users to adjust the visual representation of the data and optimize their exploration experience.

---


## **Dataset Customization**

Each **Dataset** can be customized individually through the Representation and Color tab.   
Users can adjust:

* **Attributes:** Select which attribute to display.  
* **Surface Types:** Choose how the dataset is represented (e.g., solid, wireframe).  
* **Colors and Opacity:** Define custom colors and adjust opacity to highlight specific features.  
* **Scalar and size:** Define minimum and maximum for scalar and the size of point.  
* **Edges**: Enable or disable edges for clarity in visualizing boundaries.


Additionally, the Information tab provides a general description of the selected dataset.

## **Global Customization**

The **Global** tab allows users to modify overall visualization settings, including:

* **Background Color:** Change the background color of the visualization space.  
* **Navigation Perspective:** Switch between 3D view and First Person navigation mode.  
* **Distance Scaling Factor:** Adjust the scaling factor for distances based on symbolic units.  
* **Text Opacity:** Control the visibility of labels and text annotations.  
* **Axis Orientation:** Customize the orientation of the X, Y, and Z axes.  
* **Max Texture LOD Size:** Define the maximum texture level of detail size in KB for optimized rendering.

## **Dynamic Viewer Interface**

The main visualization window offers real-time interaction with the data, including:

* **Axis-Oriented Views**: Quickly switch to views aligned with the Z, X, or Y axes.  
* **Image Capture**: Capture and download views as **PNG** or **JPEG** files, with customizable naming and the option to include or exclude the background.  
* **Split View**: Enable multiple viewports (bottom-right corner) to compare different perspectives simultaneously.  
* **Interaction Tools**: Rotate, zoom, or scale the visualization to inspect elements in detail.  
* **Color and Opacity Adjustments**: Customize the visual representation of elements for better clarity and differentiation.

### **Step-by-Step Workflow**

Step 1: Select Elements for Visualization

* The interface presents a table view of all elements available in the project that can be visualized.  
* The table contains the following columns:  
  * Display: Toggle the visibility of an element using the eye icon.  
  * Element: Specifies the type of the element (e.g., Mesh, Point, Block Model, etc.).  
  * Name: Displays the name of each element for identification.  
  * Filters: Apply filters to refine the visualization for each selected element, if needed. If no filter is required, leave this option as No Filter.

Step 2: Configure Display Options

* Decide which elements to visualize by enabling or disabling the Display toggle for each element.  
* Apply filters to individual elements if necessary, ensuring they match the desired criteria.

Step 3: Generate the Visualization

* Once the desired elements are selected and configured, click the Generate Dynamic 3D View button.

Step 4: Explore the Dynamic 3D Viewer

* After generating the visualization, the dynamic 3D viewer interface will appear, offering various interactive options:  
  * Rotation: Rotate the 3D view freely to examine elements from different angles.  
  * Zoom: Use zoom controls to focus on specific areas of interest.  
  * Scaling: Adjust the scale of the visualization to match your analysis needs.  
  * Color and Opacity: Customize the colors and opacity of elements to enhance visibility and differentiation.  
  * Edges and Element Size: Modify edge visibility and adjust the size of individual elements for better clarity.  
  * **Capture**: Save snapshots as **PNG** or **JPEG** files with or without a background, and specify a custom name for the file.
