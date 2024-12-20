---
sidebar_label: 'Smoothing'
---

# Smoothing

The **Smoothing** tool is designed to apply spatial improvements on block model datasets, particularly useful for refining results from kriging runs or domain modeling.

Step 1: Select Block Model Dataset

* In the Block Model Dataset section, choose the dataset you want to apply smoothing to.

Step 2: Configure Domains and Filters

* In the Domains dropdown, select the specific domain or attribute to smooth. Optionally, apply predefined filters in the Filters section to focus the smoothing process on specific blocks.

Step 3: Set the Number of Iterations

* Define the number of smoothing iterations. This controls how many times the spatial filter is applied to the dataset. It is possible to select 1, 2, 3, 5 or10.

Step 4: Customize Cubic Weights

Adjust the Cubic Weights Configuration to define the influence of neighboring blocks:

* **Center Weight:** Weight for the central block.  
* **Immediate Neighbors**: Influence of direct neighbors.  
* **Second Layer**: Influence of neighbors at a greater distance.  
* **Outer Layer:** Influence of the furthest neighbors.  
  The Weight Matrix Visualization dynamically updates based on your inputs, showing the distribution of weights across the 3D neighborhood.

**Regenerated Visual Matrix:** Use the Regenerate Visual Matrix button to apply and visualize the current cubic weight configuration in the matrix display.

Step 5: Perform Smoothing

* Once all configurations are set, click Perform Smoothing to apply the spatial filter to the dataset.

:::tip
**Notes:** Smoothing is particularly effective for eliminating noise in indicator kriging results or enhancing the continuity of modeled domains. Default cubic weights are provided, but users can adjust them for more tailored results.
:::
