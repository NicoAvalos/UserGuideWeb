---
sidebar_label: 'DH-Spacing'
sidebar_position: 2
---

# **Drillhole Spacing, DHS** {#drillhole-spacing,-dhs}

The Drillhole Spacing (DHS) process involves several key steps that transform raw drillhole (DH) data into a form that can be used to estimate the spacing and ultimately the quality of the geological model. The process requires this sequence:

Pre-Step 1: DH (Drillhole Data Gathering)

* Begin by collecting raw drillhole data. This is the foundational information that includes the geological samples obtained from the drilling process.This information is imported into the drill hole element section, so the project must be created

Pre-Step 2: Compositing (or Point loaded)

* The raw data from the drillholes are then composited. Compositing involves dividing the drillhole into regular, smaller intervals, which helps in standardizing the data for comparison and analysis. In the elements section, you can execute the process that allows for the application of various compositing methods

Pre-Step 3: Preparation of drilling data (optional)

* Once the data is composited, it is exported from the drillhole database. This may involve converting the data into a suitable format (through the use of filters, calculations) for use in this or other applications on the platform.

Pre-Step 4: Export and/or Import into BM (Block Model)

* The composited data from drillings can be used to create a block model in the "block model" elements section by exporting and importing them into this section. It is also possible to load or create a block model from another source of information. The important thing to remember is that the project works spatially in the same area, meaning that the drilling information and the block model are spatially correlated with the project (geological volume analyzed in XYZ).

Pre-Step 5: Run-Length Blocks Evaluation

* This refers to evaluating whether to run 'length encoding' on the block model. Length encoding can optimize the storage of block model data by grouping consecutive blocks with the same value and representing them with a single record.

Pre-Step 6: Using BM and DH Data for DHS Calculation

* Finally, the processed block model and the drillhole data are used together to calculate Drillhole Spacing (DHS). The DHS is a measure of the distance between adjacent drillholes and is crucial for assessing the density of data points and the reliability of the geological model. This information is provided directly as a result of applying this tool.

Below is the subsequent workflow, provided the previous requirement has been completed.

## **Step-by-Step Workflow**

Step 1: Select the Point Dataset and Block Model

* Choose the compositing dataset in Points Dataset as the reference for spacing.  
* Select the block model dataset in Block Model for evaluation.

Step 2: Configure Domains and Filters

* Domains: Specify domains for points and block model datasets.  
* Filters: Apply filters if needed to refine the selection.

Step 3: Define Cross-Table Associations

* Configure the Cross-table linking block model units (rows) with points dataset units (columns).

Step 4: Name the Output Variable

* Assign a name (e.g., DHS\_Analysis) for the resulting drill-hole spacing variable.

Step 5: Calculate Drill-Hole Spacing

* Click Calculate Drill-Hole Spacing to process the analysis and add the new numerical column to the block model dataset.

It is important to use the combined information from both the DH and BM to accurately determine the spacing and ensure that the geological model reflects the true subsurface conditions.

Output and Results

* The result will be added as a **new numerical column** in the selected block model dataset.  
* This column will contain the drill-hole spacing value for each block based on the average distance to the three closest drill holes.  
* Non-calculated blocks will be assigned a default value of **\-99.0** to indicate missing or unprocessed data.
