---
sidebar_label: 'Block Model'
---

# Block Models {#block-models}

The **Block Models** section enables you to create and manage block models by importing your database. These models allow you to organize and visualize mining project data, with the added capability to view them in 3D. If you have existing projects in the **DrillHole** or **Point** sections, the CSV files you’ve generated and exported can be imported here to construct a block model from that data.

This section offers a wide range of functionalities, from directly building block models based on your project information (specifying properties like block count, spacing, and origin) to performing advanced operations such as calculations, filters, flagging, geostatistical analysis, estimation, and simulations. Whether you're working on basic tasks or complex analyses, this section is designed to support your workflow comprehensively.

Given the integration of block models with the **Analysis** section, maintaining good organization within your projects is essential. Each block model you create is tied to its respective project, ensuring that calculations, filters, and operations remain independent and well-structured. The interface allows you to manage multiple block models simultaneously, providing flexibility for diverse project requirements.

## **Features and considerations**

* The workflow is designed to be **direct**, **quick**, **fluid**, **semi-intuitive**, and **highly effective**.  
* All decisions regarding criteria, properties, and characteristics of your block models are saved, ensuring continuity and traceability.  
* **Block Limit**: Block models are currently limited to current licence**s**. If this limit is exceeded, the system will notify you with an error message.  
  * **Note**: For projects that require models beyond this capacity, please contact support or the development team for alternative solutions.

By leveraging this section, you can effectively construct, manage, and analyze block models tailored to your mining projects. Proper planning and organization are key to maximizing the potential of the tools provided

---

## **Import** {#import-3}

To generate a block model, the first step involves importing data from a CSV or ZIP file. Using ZIP files is recommended for faster upload speeds. Below is a step-by-step guide to the import process:

      **Import Process**

1. **Upload the Block Model File**  
   * Select and upload the block model file in CSV or ZIP format.  
   * Ensure the data is clean and properly structured, format, for accurate processing.  
2. **Choose the Block Model Type**  
   * Decide whether the model to be imported is:  
     * **Regular**: Composed of blocks with uniform sizes.  
     * **Irregular (Sub-Cell)**: Includes blocks with varying sizes for detailed modeling.  
   * Selecting the correct structure is crucial to ensure accurate representation of the model.  
3. **Specify the Header and Data Rows**  
   * Indicate the row where the header is located (e.g., row 1).  
   * Specify the starting row for the data (e.g., row 2).  
   * This ensures the system correctly identifies column names and data entries.  
4. **Select Variables to Import**  
   * Assign the relevant columns in the dataset to corresponding data types, such as:  
     * **Easting, Northing, and Elevation coordinates** (mandatory).  
     * Block dimensions: **xsize, ysize, zsize** (if applicable).  
     * Additional variables (numerical or categorical).  
   * Handle missing values:  
     * Assign a placeholder value (e.g., \-99 for numerical data or "unknown" for categorical data).  
   * Use the **Data Table View** tab to preview the dataset, helping ensure columns and rows are mapped correctly.  
5. **Rotation Check**  
   * Before finalizing, decide whether to:  
     * **Rotate the Block Model**: Specify the rotation point (Easting and Northing) and the azimuth angle. Original coordinates will be preserved under the columns "Orig\_X" and "Orig\_Y".  
     * **Proceed without Rotation**: Import the model as is, aligned to its current coordinates.

---

### **Tips for Successful Import**

:::tip
    - Always clean the dataset before importing to ensure all required fields are present and formatted correctly.  
    - Missing data placeholders (e.g., `-99` for numerical or "unknown" for categorical) should be configured as needed.  
    - Verify column assignments using the **Data Table View** tab for a clear visualization of the dataset structure.  
    - Use ZIP format whenever possible for faster uploads, especially for large block models.
:::

---

By following these steps, you can ensure an efficient and accurate block model import process, enabling you to proceed with constructing and analyzing your data seamlessly.

---

## **Export** {#export-2}

In this section, you can select both categorical and numerical variables that you wish to export, as well as those you do not wish to export.

1. Select the Block Model:  
   * From the 'BlockModel' dropdown menu, select the block model project from which you wish to export data.  
2. Apply Filters:  
   * If you have created filters within the selected project, you can apply them by choosing the appropriate filter from the 'Filter' dropdown menu. Remember, if multiple filters are available, they cannot be applied simultaneously—you'll need to create a combined filter if necessary.  
3. Select Attributes:  
   * Check the boxes next to 'Categorical Attributes' and 'Numerical Attributes' to select the variables you wish to export. By default, the East, North, and Elevation coordinates are included.  
4. Export File:  
   * Once you have made your selections, click the 'Export' button. The file will be saved in CSV format to your computer, which can then be used as needed for your analyses or presentations.

---

## **Manage** {#manage-2}

The **Block Model Manager** is designed for managing block model datasets used in geological and mining workflows. It supports renaming, exporting, and deleting block models, ensuring streamlined management of volumetric data.

Key Features

1. **Viewing and Organizing**  
   * Displays a list of all imported block models with attributes like **name**, **creation date**, and **size**.  
   * Users can sort and group block models for efficient navigation and organization.  
2. **Renaming**  
   * Enables users to assign meaningful names to block models, making it easier to distinguish between datasets.  
3. **Exporting**  
   * Generates **CSV files** of block model data, using the same name as the block model dataset.  
   * Exported files typically include columns for:  
     * **Block ID**  
     * **Coordinates (X, Y, Z)**  
     * **Attributes** (e.g., grade, density, lithology)  
4. **Deleting**  
   * Removes block model datasets permanently from the workspace.  
   * **Caution**: Ensure no critical data is lost before deletion.

Example: CSV Download

A block model named MB\_Demo would export as MB\_Demo.csv, including data like:

* **Block ID**  
* **X**, **Y**, **Z** (block centroid coordinates as Easting, Northing, Elevation)  
* **Grade values** (e.g., Au, Ag)  
* **Other attributes** (e.g., density, rock type)

:::note
**Note:** In the **Properties and Edit** section, you can view, modify, and manage various attributes or columns of the dataset. Additionally, you can create new attributes using calculated fields and customize the content for export through a tailored download.
:::

---

## **Properties** {#properties-2}

In this section, you can select the block model project, which will indicate its general attributes such as name, number of blocks per coordinate, the model's origin point, and block size.

**Follow these steps:**

1. Select the Block Model Project:  
   * Use the 'BlockModel' dropdown to select the block model project you wish to examine.  
   * Once a project is selected, the interface will display general attributes such as the project's name, the number of blocks per coordinate, the model's origin point, and block size.  
2. View Model Attributes:  
   * The selected block model's details are then presented. You will see the total number of blocks, as well as the numeric and categorical variables that have been loaded into the model.  
3. Examine the Database:  
   * At the bottom part of the interface, the database is visually presented in a tabulated form showing rows and columns.  
   * This view will typically show the first 100 elements, providing a snapshot of the model's dataset.

Secondly, it will display the attributes of the created model details; total number of blocks, numeric variables, and categorical variables loaded into it. At the bottom, the database will be visually displayed with its rows and columns for the first 100 elements.

---

## **Edit** {#edit-1}

We have the capability to modify the imported data by altering column names, adjusting attribute types between numerical or categorical, and potentially removing columns from the database. Following the desired modifications, it is imperative to execute the 'apply' option to enact these changes. An example of modification and how the interface looks.

1. Select the Block Model: Choose the block model you want to edit from the 'BlockModel' dropdown menu.  
2. Edit Column Names and Types: For each column in the dataset:  
   * Change the column name by typing the new desired name into the 'New Name' field corresponding to that column.  
   * Adjust the attribute type by selecting either 'Numerical' or 'Categorical' from the dropdown menu in the 'Data Type' column.  
   * If you wish to remove a column entirely, select 'Delete' from the 'Data Type' dropdown menu for that column.  
3. Apply Changes: Once all desired modifications are made, click the 'Apply' button to save the changes to the database.

**Example of Modification:**

* To rename the column 'Mo\_Nuestro' to 'Mo\_I', you would enter 'Mo\_I' in the 'New Name' field for the 'Mo\_Nuestro' row.  
* To remove the 'Mo\_Ellos' column from the database, you would select 'Delete' from the 'Data Type' dropdown for the 'Mo\_Ellos' row.

Note: The columns 'Easting', 'Northing', and 'Elevation' are essential to the data structure and are not available for modification in this interface.

---

## **Create** {#create}

This section allows for the creation of a block model by defining the number of blocks per coordinate, the origin point, and the block size in that orientation.

### **Step-by-Step Workflow**

Step 1: Define Block Model Parameters

* Navigate to the section for creating a new block model within the software.  
* Enter the number of blocks per coordinate axis (Easting, Northing, and Elevation).  
* Specify the origin point coordinates where the block model should begin.  
* Set the size for each block within the model, ensuring that it corresponds to the actual physical measurements you intend to represent.

Step 2: Initialize the Block Model

* Upon defining the parameters, initiate the creation of the block model.  
* The software will generate a preliminary volume represented by empty-white blocks. These blocks constitute the basic structure of your model without any assigned attributes or data.

Step 3: Manipulate and Add Data to Blocks

* Use filters to select and manipulate specific blocks within the model.  
* Apply calculations and other options to assign data and attributes to the blocks.  
* If needed, import or input data to enrich the model with information relevant to your project.

Step 4: Visualize and Verify the Model

* Utilize the software’s visualization tools to view the block model in 3D.  
* Verify that the block dimensions and placement correspond to your project requirements.

Step 5: Apply the Creation

* After reviewing all parameters and data, confirm the creation of the block model.  
* Select the 'Create New Block Model' option to finalize and construct the model within the software.

Step 6: Save and Continue Workflow

* Once the block model is created, save the project.  
* A confirmation message should appear, signaling successful creation. If there are issues, such as exceeding the maximum number of blocks (e.g., 20 million), an error message will guide you to make necessary adjustments.  
* The new block model will now be available for selection and use in other workflows, marking it as a new active project.

---

## **Rotate**

In a manner akin to the rotation feature available for point-type elements within the workspace section, users have the option to select a project (database) for applying rotation. This process necessitates specification of parameters for the Easting, Northing coordinates, and an angle measured from 0 to 360 degrees as azimuth with respect to the North.

Upon applying the rotation, the original coordinates are preserved within newly created columns named Orig\_X and Orig\_Y, while the columns designated for Easting and Northing are updated with the new coordinates.

This functionality ensures internal workflow consistency within the software by seamlessly incorporating these adjustments into the dataset.

---

## **Populate** {#populate}

Here, you'll discover how to complete incomplete block models and generate relevant extensions effectively.

### **Populate Workflow**

1. Complete Missing Data:  
   * Fill in missing data or blocks to ensure your model aligns with the "snap-to-grid" principle for precise accuracy.  
2. Generate Model Extensions:  
   * To experiment with different scenarios or to integrate new data, generate extensions within your block model.  
3. Define Model Parameters:  
   * In the "Final Extension" interface, crucial parameters such as origin and block size are determined. Specify the necessary details to accurately define your Block Model.  
4. Review and Verify:  
   * After setting your parameters, review all aspects and verify your project's details to ensure everything is correct.  
5. Populate Your Model:  
   * Click on the "Populate Block Model" button to apply changes and update your project. A visual representation of before and after the population process can help to confirm the success of the operation.

---

## **Calculate** {#calculate}

This tutorial will walk you through the process of using numerical and conditional expressions to compute new data columns, focusing on generating new attributes in your dataset from operations and calculations performed on and between existing columns. The first step is to select the project, the database, with which you will be working, or in other words, the block model.

### **Numerical Expressions** {#numerical-expressions-1}

To calculate new numerical values based on existing data, we use numerical expressions. These expressions allow you to perform arithmetic operations directly in Pandas.

* How to Use: Simply type your numerical expression into the 'Condition' field when adding a new attribute. Use standard arithmetic operators like **\+** (addition), **\-** (subtraction), **\*** (multiplication), **/** (division), and **\*\*** (exponentiation). You can also include Numpy functions and constants in these expressions for more complex calculations.  
* Important Note: Always include the dataframe reference df when using column names in your expressions.

Example 1: To scale a column named 'cus' by 100 and then divide by the column 'cut' increased by 0.0001, you would enter 100\*df\['cus'\]/(df\['cut'\] \+ 0.0001).

Example 2: For a calculation involving Numpy's constant pi and a column named 'length', the expression would be 4/3\*np.pi\*df\['length'\]\*\*3.

### **Conditional Expressions** {#conditional-expressions-1}

Conditional expressions are used to create new columns based on conditions. These are written using apply() and lambda functions in Pandas.

* How to Use: Type the condition directly into the 'Condition' field. This will implicitly create a lambda function that applies your condition to each row in the dataframe.  
* Important Note: Use row to reference individual row values in your conditional expressions.

Example 1: To assign a value based on the contents of the 'Ue' column, enter: "IN" if row\['Ue'\] in (0,1) else "MIDDLE" if row\['Ue'\] \== 8 else "OUT".

Example 2: To categorize rows based on the 'Litho' and 'FrnE' columns, the condition would be: "IN" if row\['Litho'\] in ('FrLm','FrNE') else "MIDDLE" if row\['Litho'\] \== "OX" else "OUT".

Applying Your Expressions: Once you've entered your custom attribute name, chosen the data type, and typed in your condition, simply click on the 'Add new attribute' button. This will add the new computed column to your dataframe based on the expressions you've provided.

Final Tips

* Always ensure your expressions are syntactically correct to avoid errors.  
* Refer to the official Pandas documentation for more detailed information on functions and syntax.  
* Experiment with simple expressions first before moving on to more complex computations.

By following this guide, you should be able to enhance your data analysis by adding new, dynamically computed attributes to your Pandas dataframe with ease.
:::note
These notes are also referenced in the Calculate section for 'Points.' This is because both the Points and Blocks sections of the workflow feature a designated area for performing calculations. In both cases, the mathematical construction follows the same guidelines and parameters.*
:::

---

## **Evaluate** {#evaluate}

The Evaluate tool allows users to classify and label blocks in a block model based on their position relative to uploaded Topographies and/or Meshes. This tool is essential for creating stratigraphic, lithological, or categorical profiles by sequentially applying evaluation surfaces to the block model.

### **Evaluate workflow**

Step 1: Select the Block Model

* From the dropdown menu, select the block model you want to evaluate.  
* Ensure the block model is already uploaded and available in the project.

Step 2: Add New Attribute

* Use the option to add a new attribute. The options for topographies or meshes to use are displayed.  
* You must name the attribute and indicate the order. Follow the next steps

Step 3: Define Evaluation Surfaces

* Choose the Topographies and/or Meshes from the available project data to apply as evaluation surfaces.  
* The evaluation surfaces will classify blocks based on their relative position:  
  * Topography: Blocks above the topography are labeled as Air.  
  * Meshes: Blocks within a mesh will be labeled with the corresponding mesh name.

Step 4: Organize the Evaluation Order

* The order of the surfaces is critical and must follow a logical sequence to ensure proper categorization.  
  * For example: Air → Lithology 1 → Lithology 2, progressing from higher elevations to lower elevations.  
* This sequential approach allows the creation of consistent stratigraphic or lithological profiles.

Step 5: Apply the Evaluation

* Click on Apply to assign a custom attribute to the block model based on the evaluation criteria.  
* Unclassified blocks (those not assigned by any surface) will automatically be labeled as Unknown.

Step 6: Review and Finalize

* After applying the evaluation, the labeled attribute will be added to the block model database.  
* If needed, remove an Evaluate Attribute setting without affecting the attribute column in the block model.

Key Notes

* **Topographies**: Only classify blocks above them (e.g., Air).  
* **Meshes**: Classify blocks within their boundaries, using the mesh name as the label.  
* **Order Consistency**: Maintain a consistent sequence for evaluation surfaces to achieve meaningful categorizations.  
* **Unclassified Blocks**: Blocks that do not match any surface criteria will be labeled as **Unknown**.  
* **Iterative Process**: Think of this as constructing profiles step by step, ensuring precision in every layer.

---

## **Downscale** {#downscale}

The Downscale tool allows users to refine an existing block model by creating a new model with a higher resolution. This process subdivides the blocks into smaller units, enabling more detailed analysis and modeling. The tool supports both regular and sub-cell block models. Below is the step-by-step workflow:

### **Downscale Workflow**

Step 1: Select the Block Model

* From the dropdown menu, choose the block model you wish to refine through downscaling.

Step 2: Review the Current Block Model Definition

* A summary table will display the descriptive parameters of the selected block model, including:  
  * Direction (Easting, Northing, Elevation)  
  * \# Blocks: Number of blocks along each direction.  
  * Origin: Starting point of the block model.  
  * Max Block Size: Maximum size of the blocks in each direction.  
  * Min Block Size: Minimum size of the blocks in each direction.  
  * Current Number of Blocks: Total number of blocks in the existing model.

Step 3: Adjust Subdivision Settings

* Use the interactive sliders to specify the scaling factor for each axis:  
  * Easting  
  * Northing  
  * Elevation  
* The scaling factor can be set to 1, 2, or 3, where:  
  * 1: No change (blocks retain their original size).  
  * 2: Subdivide each block in the axis into two smaller blocks.  
  * 3: Subdivide each block in the axis into three smaller blocks.

Step 4: Preview the New Block Model Definition

* As you adjust the sliders, a preview table on the right will update in real-time, showing the new parameters for the block model:  
  * Updated \# Blocks, Origin, Max Block Size, and Min Block Size for each direction.  
  * New Number of Blocks: The total number of blocks in the new model.

Step 5: Define the New Block Model Name

* Enter a unique name for the new block model in the input field provided.

Step 6: Apply Downscaling

* Click the Apply Downscaling button to generate the new block model with the refined resolution.

:::info
The **Downscale** tool works for both **regular** and **sub-cell** block models.

The original block model remains unchanged, and the downscaled model is saved as a separate entity with the new name you provide.
:::

---

## **Filters**  {#filters-1}

When using filters, we implicitly utilize the Query function from the Pandas library. You write a condition as a string. You can use logical operators such as and, or, and not, as well as comparison operators like \>, \<, \>=, \<=, \==, and \!=. You can reference column names directly without having to use\['column\_name'\] syntax within the query string. The use of parentheses can be helpful when we want to specify different operations grouped within the string. Another important aspect is when to use quotes. We will explain two case:

1. Column Identifiers: In the context of querying a data structure, when you reference the names of columns, you usually don’t need to use quotes if these names follow the conventions of the language or environment you're working with. For example, if column names cannot contain spaces or special characters and must not clash with reserved keywords, then a plain, unquoted identifier is sufficient.

2. String Literals: Conversely, when your query needs to match specific text within a column, that text should be enclosed in quotes. This tells the system you’re looking for an exact sequence of characters, not a column or another type of identifier. So, 'Unit 1' in quotes signifies it’s a literal string to be matched in the data, not a reference to another column or entity.

We will explain the examples presented on the platform.

For example 1: The condition is (Numerical\_Attribute \> 30\) and ((Categorical\_Attribute \== 'Unit 1') or (Categorical\_Attribute \== 'Unit 2')). This means that you want to select rows where the 'Numerical\_Attribute' column has a value greater than 30, and at the same time, the 'Categorical\_Attribute' column must be either 'Unit 1' or 'Unit 2'.

For example 2: The condition is 'Unit\_3', 'Unit\_7' not in Categorical\_Attribute.  
This means you want to exclude rows where the 'Categorical\_Attribute' is either 'Unit\_3' or 'Unit\_7'.

:::note
*Note: These notes are also mentioned in the Filters section for 'Points.' This is because both the Points and Blocks sections of the workflow have a dedicated area for applying filters. In both instances, the filter construction adheres to the same guidelines and parameters.*
:::
