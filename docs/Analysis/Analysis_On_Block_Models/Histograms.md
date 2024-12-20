---
sidebar_label: 'Histogram'
sidebar_position: 2
---
# **Histograms** {#histograms}

The histogram construction tool allows users to analyze and visualize the distribution of attributes from a dataset. It supports both **Point** datasets and **Block Models**, offering a seamless workflow for data exploration. Below is a detailed step-by-step process for using the tool:

## **Step-by-Step Workflow**

Step 1: Upload and Select the Dataset

* Ensure that the dataset (Block Model) is uploaded to the project.  
  * If no dataset is available, the interface will indicate that the tool is not accessible.  
  * Once datasets are available, select the desired dataset from the dropdown menu at the top-center of the interface.

Step 2: Select the Attribute

* Choose the attribute to analyze from the Main Attributes list.  
  * Multiple attributes such as Easting, Elevation, Numerical, or Categorical values can be selected.  
  * Use the Select All or Unselect All buttons to simplify attribute selection.

Step 3: Configure Histogram Settings

* Logarithmic Scale: Decide whether to display the histogram in a logarithmic or normal scale by toggling the Logscale option (Yes/No).  
  * Number of Bins: Adjust the number of bins to customize the granularity of the histogram. The default value is set to 50, but this can be modified as needed.

Step 4: Apply Filters and Domains (Optional)

* Switch to the Filters and Domains tab to refine the analysis:  
  * Filters: Apply specific filters to the dataset (e.g., exclude certain ranges or values).  
    * Domains: Select categorical domains or units (e.g., specific geological codes or domains) for targeted analysis.  
  * Use the Units in Domain section to include or exclude specific units.

Step 5: Generate the Histogram

* Once all configurations are set (dataset, attribute, scale, bins, filters, and domains), click the Generate Histograms button at the bottom.

Step 6: View and Download the Histogram

* The generated histogram will be displayed in the interface as a visual graph.  
  * The chart can be downloaded for further use or reporting purposes.
