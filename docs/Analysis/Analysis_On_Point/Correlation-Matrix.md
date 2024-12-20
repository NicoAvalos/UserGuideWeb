---
sidebar_label: 'Correlation Matrix'
---

# **Correlation Matrix** {#correlation-matrix}

The Correlation Matrix Tool allows users to calculate and visualize the relationships between different attributes within a **Point** dataset. It provides a clear representation of how variables are correlated, which is critical for decision-making processes.

## **Step-by-Step workflow**

Step 1: Upload and Select the Dataset

* Ensure the dataset is uploaded to the project.  
* If no dataset is available, the tool will indicate that it is not accessible.  
* Once datasets are available, select the desired dataset from the dropdown menu.

Step 2: Select Attributes

* Choose at least two attributes to generate the correlation matrix.  
* Use the Main Attributes list to make your selection.  
* Utilize the Select All or Unselect All buttons for convenience.  
* Ensure the selected attributes are relevant to your analysis.

Step 3: Enable or Disable Annotations

* Use the Annotations dropdown to decide whether to display numeric values in the correlation matrix:  
  * Yes: Displays correlation coefficients directly on the matrix (recommended).  
  * No: Disables annotations, showing only the heatmap.

Step 4: Apply Filters and Domains (Optional)

* Navigate to the Filters and Domains tab to refine your analysis:  
  * Filters: Select filters related to the dataset. Ensure compatibility to avoid generation errors.  
  * Domains: Restrict analysis to specific subsets of data defined by categorical domains. This limits the calculation to the attributes within the selected domain.

Step 5: Generate the Correlation Matrix

* Click the Generate Correlation Matrix button once all configurations are complete.  
* The tool will calculate the matrix and display the results as a heatmap with a scale from \-1 to 1:  
  * 1: Perfect positive correlation.  
  * 0: No correlation.  
  * \-1: Perfect negative correlation.

Step 6: View and Download the Matrix

* The matrix will appear on the interface, complete with a legend for the correlation scale.  
* You can download the generated matrix as a PNG image using the Download Image (.png) button.
