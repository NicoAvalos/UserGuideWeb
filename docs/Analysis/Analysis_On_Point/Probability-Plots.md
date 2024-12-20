---
sidebar_label: 'Probability Plots'
---

# **Probability Plots** {#probability-plots}

In this section, you can generate cumulative curve graphs applicable to any of the loaded block models containing attributes. To do this, follow the steps outlined below.
Additionally, it is important to note that these graphs are downloadable, allowing you to save them on your device for future use.

Step 1: Point Selection

* Select the block model you wish to analyze from the Point dropdown menu.

Step 2: Attributes to Plot Selection

* In the Attributes to Plot column, select the attributes you want to include in the main cumulative distribution function (CDF) plot.

Step 3: Breaking By Selection

* **Breaking by Domain**: If you select to break the analysis by domain, you must choose the specific domains to include in the secondary tab.  
  * This will generate separate curves for the attribute’s distribution within each selected domain, along with a legend for clear identification.  
  * Any additional curves added will also be broken down by the selected domains and displayed correspondingly.

Step 4: Additional Curves Selection

* Choose additional attributes to plot as secondary curves in the Additional Curves column. These curves, displayed in grey, can serve as an uncertainty metric or for comparative purposes.  
  * Recommendation: When adding attributes as Additional Curves, it is advisable to use a Logarithmic Scale if the magnitudes of the attributes differ significantly (e.g., attributes with varying decimal precision). The logarithmic scale ensures clearer visualization and comparison of the data.

Step 5: Label \- Additional Curve:

* In this option you can create a "label" to assign it to the additional curves attribute. It will be displayed on the graph.

Step 6: Filter Application

* If necessary, apply a filter from the Filter dropdown to refine the displayed results.

Default Setting: No filter is applied.

Step 7: Generating Cumulative Distribution Functions

* After all options have been selected, click on Generate Cumulative Distribution Functions to create the plots.

:::info
Using a **Logarithmic Scale** can be particularly helpful for datasets with wide value ranges or disparate magnitudes between attributes.
:::
