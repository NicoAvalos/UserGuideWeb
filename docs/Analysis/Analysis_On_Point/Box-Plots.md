---
sidebar_label: 'Box Plots'
---
# **Box Plots** {#box-plots}

The **Box Plots Tool** enables users to create and analyze box plots for attributes in a **Point** or **Block Model** dataset. These visualizations are essential for understanding the distribution, central tendency, and spread of data, as well as identifying outliers. Below is a step-by-step workflow to configure and generate box plots.

## **Step-by-Step Workflow**

Step 1: Upload and Select the Dataset

* Ensure that the dataset (**Point**) is uploaded to the project.  
* If no dataset is available, the tool will indicate that it is not accessible.  
* Once datasets are available, select the desired dataset from the dropdown menu at the top of the interface.

Step 2: Configure Attributes and Settings

* Max Number of Samples: Set the maximum number of samples to include in the box plot (default is 100,000). This limits the data processed for performance efficiency.  
* Plot Type: Choose the type of plot to generate (e.g., **Box Plot, Violin Plots**).  
* Breaking By: Select a categorical attribute to group the data (e.g., by domains or other categories). Use No break if grouping is not required.  
* Logscale: Choose whether to display the box plot on a logarithmic or normal scale (Yes/No).  
* Include Statistics: Decide whether to include additional statistical details (e.g., mean, standard deviation) in the visualization (Yes/No). It will generate an additional statistical table in the image at the bottom of the chart.

Step 3: Select Attributes for Analysis

* Choose one or more attributes from the Main Attributes list to include in the box plot.  
* Use the Select All or Unselect All buttons for convenience.  
* Ensure the selected attributes are relevant to the analysis.

Step 4: Apply Filters and Domains (Optional)

* Navigate to the Filters and Domains tab to refine your analysis:  
  * Filters: Apply specific filters to include or exclude data points based on predefined criteria. Ensure compatibility with the dataset to avoid errors.  
  * Domains: Select domains to focus the analysis on specific subsets of data. For example, select a domain like "compid" to work only with data associated with that domain.  
* Units in Domain: Select the units within the domain to include in the box plot. Use Select All or Unselect All buttons for convenience.

Step 5: Generate the Box Plot

* Once all configurations are complete, click the Generate Box Plots button at the bottom of the interface.  
* The tool will process the data and display the generated box plot in the interface.

Step 6: View and Download the Plot

* The generated box plot will be displayed with clear labels for attributes and grouping criteria.  
* The visualization can be downloaded as an image file in PNG format for reporting or further analysis.
