---
sidebar_label: 'Capping Analysis'
---

# **Capping analysis** {#capping-analysis}

This section is crafted to offer you a user-friendly experience in generating capping analyses for your geo-statistical databases. We recognize the significance of balancing your data, preventing extremely high values from skewing your analytical outcomes. Therefore, we provide you with a clear and straightforward pathway to apply this vital technique. Below, we will guide you through using our interface step by step, empowering you to implement capping with confidence and accuracy.

Step 1: Select the Dataset

* In the dropdown menu labeled "Comps/Points dataset", select the dataset you wish to analyze. This dataset is where the capping analysis will be performed.

Step 2: Choose the Attribute

* Use the dropdown menu next to "Attribute" to select the specific attribute for analysis. In the example image, "Cu" is selected for Copper, indicating that the analysis will focus on this particular element within the dataset.

Step 3: Select the Domain

* From the dropdown menu labeled "Domain", choose the domain to which your analysis will be applied. In the example image, "Lit" is selected, which could represent a particular geological or sample domain within the data.

Step 4: Apply Filters (Optional)

* If you need to filter the dataset based on certain criteria, you can do so using the "No filter" dropdown menu and the "Filter" button. This could be useful to narrow down your analysis to a specific subset of the data.  
* The default configuration is with no filter applied.

Step 5: Unit Selection

* In the "Unit selection" section, you have the option to perform capping analysis on the selected unit within the main domain. Make sure the main domain is correctly displayed (as "Lit" in the image). Then, select the unit of interest by checking the appropriate box. The available units in the image are "AND", "DAC", "GR", and "GRV".

Step 6: Perform Capping Analysis

* Once you have selected the dataset, attribute, domain, and units, click the "Perform capping analysis" button to start the analysis. The system will process the data based on your selections and provide results that identify the capping levels for the selected attribute within the specified domain and units.

Step 7: Analyze the Results

    * After the capping analysis is completed, review the results to understand the distribution of the chosen attribute and determine the appropriate capping thresholds. The results will be visualized through **4 different graphics**, each providing insights into different aspects of the data:  
        1. Histogram Distribution: This graph displays the frequency distribution of the selected attribute's data points, allowing you to see the overall shape of the distribution and identify any potential outliers.  
        2. Cumulative Distribution Function (CDF): The CDF graphically represents the cumulative probability associated with a given value of the attribute. It helps in understanding the proportion of data points that fall below a particular threshold.  
        3. Mean v/s Number of Capped Samples: This plot shows how the mean of the dataset changes as more samples are capped, which can be crucial for understanding the impact of capping on the central tendency of the data.  
        4. Coefficient of Variation v/s Metal Lost: This graph illustrates the relationship between the coefficient of variation (a measure of relative variability) and the percentage of metal (or other attribute of interest) lost due to capping. It's useful for assessing the trade-off between reducing variability and losing valuable data.
