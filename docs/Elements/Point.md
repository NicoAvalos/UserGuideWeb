---
sidebar_label: 'Point'
---
# Point

Consider a database composed of elements containing spatial variables X, Y, Z. This specific location can be accompanied by numerical and/or categorical values assigned to that point. This information can be imported, and furthermore, later visualized and utilized for various operations. For example, the point database can be manipulated with filters, calculations, recalculations, modifications, rotations, grouping, or deselection of information, all projected in 3D and/or graphically.

It is important to highlight that this section facilitates ongoing work with the project database of drilling campaigns. This implies that when georeferencing methods are applied to the DrillHole information within the DrillHole task tree, the rows in these files containing positional data provided by the X, Y, Z columns (for both top, mid, and bot) can be manipulated as points within this section. Consequently, these files are applicable within this workflow.

---

## **Import** {#import-2}

The **Import** process in the Point Section allows users to integrate point datasets into the platform efficiently. This simplified workflow ensures an intuitive process for importing and managing point data within your projects.

### **Step-by-Step Import Process**

1. **Upload the Point Data File**  
   * Select and upload the point data file in **CSV** or **ZIP** format.  
   * ZIP format is recommended for faster uploads, especially for large datasets.  
   * Ensure the data is clean and properly structured to avoid import errors.  
2. **Specify the Header and Data Rows**  
   * Indicate the row where the header is located (e.g., row 1).  
   * Specify the starting row for the data (e.g., row 2).  
   * This ensures the system correctly identifies column names and data entries.  
3. **Assign Attributes to Columns**  
   * After the file is uploaded, assign each column to the appropriate attribute type from the following options:  
     * **Easting** (X-coordinate).  
     * **Northing** (Y-coordinate).  
     * **Elevation** (Z-coordinate).  
     * **Numerical** (numerical data like grades or densities).  
     * **Categorical** (for values like lithology or rock type).  
     * **No Import** (exclude unnecessary columns).  
   * You can use the **Data Table View** tab to preview the dataset and ensure proper mapping of columns and rows.  
4. **Handle Missing Values**  
   * Configure placeholders for missing data where applicable:  
     * For **Numerical** columns, assign a value like \-99 to indicate missing entries.  
     * For **Categorical** columns, use a placeholder like "unknown" to label undefined values.  
5. **Finalize the Import**  
   * Once all attributes are assigned, finalize the import to integrate the dataset into the platform.  
   * The imported points will now be available for visualization and analysis.

Tips for a Successful Import

* **Clean the Dataset**: Ensure the file is properly formatted and all necessary columns are included before importing.  
* **Data Table View**: Use this feature to cross-check the dataset structure during the attribute assignment phase.  
* **Optional Columns**: Exclude unnecessary columns by selecting "No Import" to streamline your dataset.

---

## **Export** {#export-1}

This section allows exporting specific columns from a point file, but also with the application or non-application of any filters. This enables you to have CSV files at your disposal with clean-ups, modifications, recalculations, or any type of operation applied within the platform.

1. **Dataset Selection**

    Choose the Type of Data:
    * In the 'Point' dropdown menu, select the type of data you wish to work with. This will determine which dataset you will be filtering and exporting.
        Apply a Filter if needed:
    * Use the dropdown menu to apply a filter to your dataset. You can choose 'No filter' to work with the dataset as it is, or select some filter created for your dataset if you want to apply specific filters to categorical or numerical attributes.

2. **Select Attributes**

    Choose Categorical Attributes:  
    * Here you can select the attributes that are categorical in nature by checking the boxes next to each attribute. For instance, 'Lit' is checked, meaning it will be included in your export.
    Choose Numerical Attributes:
    * In the 'Numerical attributes' section on the right, check the boxes next to the numerical data you wish to export, such as 'Easting', 'Northing', 'Elevation', 'Cu', 'Length'.

3. **Export the Data**

    * After selecting all the necessary attributes, click the 'Export' button at the bottom of the interface.  
    * A file will be created with your selected data, which you can then save to a specified directory on your device for further analysis or use.

This interface provides a customizable way to select specific data points from a larger dataset, allowing for efficient data management and export for practical use in various applications, including 3D projections and graphical analysis

---

## **Manage** {#manage-1}

The **Point Manager** section is designed to handle individual spatial data points, such as survey points, control points, or other georeferenced data. These points are typically used as input for modeling or spatial analysis in various workflows.

Key Features

1. **Viewing and Organizing**  
   * Displays a list of all imported point datasets.  
   * Includes attributes such as the **name**, **creation date**, and **size**, helping users keep track of their data.  
   * Allows sorting and grouping for better organization.  
2. **Renaming**  
   * Enables users to rename datasets directly, ensuring meaningful and descriptive names for easy identification.  
3. **Exporting**  
   * Datasets can be exported as **CSV files**, retaining the same name as the dataset for clarity.  
   * Exported files are structured to include spatial coordinates (e.g., X, Y, Z as Easting, Northing, Elevation) and other associated attributes.  
4. **Deleting**  
   * Permanently removes datasets from the workspace.  
   * **Caution**: This action is irreversible.

Example: CSV Download

If a point dataset is named **ControlPoints\_2024, exporting it will generate a file named ControlPoints\_2024.csv.** The CSV file typically includes columns like:

* **ID**  
* **X**, **Y**, **Z** coordinates  
* **Attribute values**

**Note:** In the **Properties and Edit** section, you can view, modify, and manage various attributes or columns of the dataset. Additionally, you can create new attributes using **Calculated** fields and customize the content for export through a tailored download.

---

## **Properties** {#properties-1}

It is a simple and direct view of the information contained in the selected file. It displays all columns and the first 100 to 1000 rows of the file. Future applications will be added to this section, so suggestions can be communicated in the support section and will be well received.

1. **Accessing the Dataset:**  
   * Expand the "Point Dataset" menu to view the list of available databases.  
   * Select the database you wish to visualize from this list.  
2. **Viewing the Data:**
   * Once the dataset is loaded, the information will be displayed directly in the windows located at the lower part of the interface.

Note: The displayed data cannot be edited.

---

## **Edit** {#edit}

In particular, this section serves for reporting errors or adjusting the information according to your preferences, enabling modification of both the variable type assigned to the column and its header (name).

In the "Edit Points Dataset" section, you have the flexibility to manage the structure of your data:

1. **Selecting the Dataset:**
   * From the dropdown menu, choose 'Point' to select the Points dataset you wish to edit.

2. **Modifying Column Information:**

The table displayed allows you to make adjustments to your dataset's columns:

* **Original Name:** Shows the current name of the data column.  
* **New Name:** If necessary, type a new name for the column to better reflect the data it contains.  
* **Data Type:** Choose the correct data type (e.g., Numerical or Categorical) from the dropdown menu for each column to ensure data integrity.

---

## **Rotate** {#rotate}

You have the capability to apply spatial rotations to a specific dataset of points. Here’s a step by step guide:

1. **Select Dataset:** Begin by choosing the dataset containing the points you want to rotate.  
2. **Specify Rotations:** After selecting the dataset, you can specify the desired rotations along the X and Y axes. This means you can determine how much the dataset should be rotated horizontally (X-axis) and vertically (Y-axis).  
3. **Execute Rotation**: Once you've specified the rotations, execute the rotation. This action will generate new columns labeled Orig\_X and Orig\_Y, containing the original coordinates of the dataset.  
4. **Preservation of Data:** The creation of Orig\_X and Orig\_Y columns ensures that the original data is preserved while providing the rotational information in the form of new East and North coordinates. The elevation data remains intact throughout this process.  
5. **Single Rotation Limitation:** It's important to note that you can only apply the rotation to the file once. If you initiate a new rotation, the East and North columns will be overwritten. The Orig\_X and Orig\_Y coordinates serve as reference points for the new rotation.  
6. **Performing Multiple Rotations:** If you wish to perform multiple rotations, such as rotating once and then initiating subsequent rotations from the newly adjusted coordinates, you'll need to modify the names of the Orig\_X and Orig\_Y columns in the "Edit" section. For example, you might relabel them as X1 and Y1, respectively. This allows any new rotation to be applied to the updated East and North coordinates (after the first rotation), and the results will be stored in new Orig\_X and Orig\_Y columns. This process yields the resulting East and North coordinates after the second rotation.  
7. **Filtering Data:** After rotation, you can filter the information. The rows from the rotation-related columns will also be taken into account based on the filter you apply.

By following these steps, you can effectively apply spatial rotations to your dataset of points and manage the resulting data accordingly.

## **Snap to grid** {#snap-to-grid}

The **Snap to Grid** tool allows users to align a points dataset to a regular grid, creating a structured dataset that follows the defined grid properties. This process reassigns the **Easting**, **Northing**, and **Elevation** coordinates to the nearest grid point without creating additional points.

### **Step-by-step workflow**

1. **Select the Points Dataset**  
   * From the dropdown menu, choose the points dataset to be used.  
   * Ensure that the dataset has already been imported and is available within the current project.  
2. **Define the Regular Grid**  
   * Provide the grid dimensions by specifying the following:  
     * **Number of blocks**: Set the total number of divisions along the Easting, Northing, and Elevation axes.  
     * **Origin**: Define the starting point (bottom-left corner) of the grid.  
     * **Block size**: Assign the size of each block along each axis.  
   * Make sure the grid dimensions respect the licensing restrictions on the maximum number of blocks.  
3. **Handle Duplicates**  
   * Use the dropdown menu to decide whether to **Remove duplicates after migration**:  
     * **Yes**: Removes duplicate points that are assigned to the same grid node after snapping.  
     * **No**: Retains all points, including duplicates.  
4. **Apply Snap to Grid**  
   * Once all settings are configured, click the **Snap to Grid** button at the bottom of the interface.  
   * The system will align the dataset to the nearest grid points based on the provided grid definition.

The original coordinates from the points dataset will be preserved in new columns named: **Easting\_before\_STG, Northing\_before\_STG, Elevation\_before\_STG.**

:::info
    * The grid’s origin refers to the center of the block located at the bottom-left corner of the grid.  
    * Ensure that the dataset's grid definition aligns with your project requirements and licensing limitations.  
    * Removing duplicates is optional and depends on the specific needs of your workflow.
:::

This process ensures that point data is structured and ready for integration with block models or further analysis.

---

## **Calculate**

This tutorial will walk you through the process of using numerical and conditional expressions to compute new data columns, focusing on generating new attributes in your dataset from operations and calculations performed on and between existing columns.

The first step is to select the project, the database, with which you will be working, or in other words, the Point dataset.

### **Numerical Expressions** {#numerical-expressions}

To calculate new numerical values based on existing data, we use numerical expressions. These expressions allow you to perform arithmetic operations directly in Pandas.

* **How to Use:** Simply type your numerical expression into the 'Condition' field when adding a new attribute. Use standard arithmetic operators like **\+** (addition), **\-** (subtraction), **\*** (multiplication), **/** (division), and **\*\*** (exponentiation). You can also include Numpy functions and constants in these expressions for more complex calculations.  
* **Important Note:** Always include the dataframe reference df when using column names in your expressions.

Example 1: To scale a column named 'cus' by 100 and then divide by the column 'cut' increased by 0.0001, you would enter 100\*df\['cus'\]/(df\['cut'\] \+ 0.0001).

Example 2: For a calculation involving Numpy's constant pi and a column named 'length', the expression would be 4/3\*np.pi\*df\['length'\]\*\*3.

### **Conditional Expressions** {#conditional-expressions}

Conditional expressions are used to create new columns based on conditions. These are written using apply() and lambda functions in Pandas.

* **How to Use:** Type the condition directly into the 'Condition' field. This will implicitly create a lambda function that applies your condition to each row in the dataframe.  
* **Important Note:** Use row to reference individual row values in your conditional expressions.

Example 1: To assign a value based on the contents of the 'Ue' column, enter: "IN" if row\['Ue'\] in (0,1) else "MIDDLE" if row\['Ue'\] \== 8 else "OUT".

Example 2: To categorize rows based on the 'Litho' and 'FrnE' columns, the condition would be: "IN" if row\['Litho'\] in ('FrLm','FrNE') else "MIDDLE" if row\['Litho'\] \== "OX" else "OUT".

Applying Your Expressions: Once you've entered your custom attribute name, chosen the data type, and typed in your condition, simply click on the 'Add new attribute' button. This will add the new computed column to your dataframe based on the expressions you've provided.

Final Tips

* Always ensure your expressions are syntactically correct to avoid errors.  
* Refer to the official Pandas documentation for more detailed information on functions and syntax.  
* Experiment with simple expressions first before moving on to more complex computations.

By following this guide, you should be able to enhance your data analysis by adding new, dynamically computed attributes to your Pandas dataframe with ease.

*Note: These notes are also referenced in the Calculate section for 'Block Models.' This is because both the Points and Blocks sections of the workflow feature a designated area for performing calculations. In both cases, the mathematical construction follows the same guidelines and parameters.*

---

## **Evaluate** {#Evaluate}

The **Points: Evaluate** tool allows you to generate a custom attribute by labeling points based on their spatial relationship to meshes and topographies. Follow the steps below to configure and apply this functionality:

---

This tool evaluates points in a dataset by:

1. Assigning labels to points that fall **inside meshes**, using the corresponding mesh name.
2. Assigning labels to points that are **above topographies**, using the corresponding topography name.
3. Labeling any points that remain unclassified by either criterion as **"Unknown"**.

The order of meshes and topographies affects the labeling process, with the first item in the list having the highest priority.

---

      **Steps to Configure**

1. **Select Points Dataset**:
   - Use the dropdown menu to select the dataset you want to evaluate.

2. **Name the Attribute**:
   - Enter a name for the new attribute in the text field (e.g., `Eval_Point`).

3. **Organize Available Meshes and Topographies**:
   - Drag items from the **Available Meshes and Topographies** list to the **Selected Order** list.
   - Arrange the items in the **Selected Order** list to determine the priority. Items at the top have the highest priority.

4. **Apply Changes**:
   - Click **Apply** to generate the attribute and assign labels to the points based on the configured settings.

5. **Delete Settings** (if needed):
   - Click **Delete** to remove the evaluation configuration. Note that this action removes the settings but retains the attribute column in the dataset.

:::info
**Points Inside Meshes**: Points falling within a mesh are labeled with the mesh name.
**Points Above Topographies**: Points positioned above a topography are labeled with the topography name.
**Unclassified Points**: Any points that do not meet either condition are labeled as **"Unknown"**.
:::

:::tip
Ensure meshes and topographies are correctly imported and listed in the **Available Meshes and Topographies** section.
Use the drag-and-drop feature in the **Selected Order** list to assign priority based on your specific requirements.
:::

By following these steps, you can easily classify and analyze spatial relationships in your dataset.

---

## **Filters** {#filters}

When using filters, we implicitly utilize the Query function from the Pandas library. You write a condition as a string. You can use logical operators such as and, or, and not, as well as comparison operators like \>, \<, \>=, \<=, \==, and \!=. You can reference column names directly without having to use\['column\_name'\] syntax within the query string. The use of parentheses can be helpful when we want to specify different operations grouped within the string.

Another important aspect is when to use quotes. We will explain two case:

1. **Column Identifiers:** In the context of querying a data structure, when you reference the names of columns, you usually don’t need to use quotes if these names follow the conventions of the language or environment you're working with. For example, if column names cannot contain spaces or special characters and must not clash with reserved keywords, then a plain, unquoted identifier is sufficient.

2. **String Literals:** Conversely, when your query needs to match specific text within a column, that text should be enclosed in quotes. This tells the system you’re looking for an exact sequence of characters, not a column or another type of identifier. So, 'Unit 1' in quotes signifies it’s a literal string to be matched in the data, not a reference to another column or entity.

We will explain the examples presented on the platform.

**For example 1:** The condition is (Numerical\_Attribute \> 30\) and ((Categorical\_Attribute \== 'Unit 1') or (Categorical\_Attribute \== 'Unit 2')). This means that you want to select rows where the 'Numerical\_Attribute' column has a value greater than 30, and at the same time, the 'Categorical\_Attribute' column must be either 'Unit 1' or 'Unit 2'.

**For example 2:** The condition is 'Unit\_3', 'Unit\_7' not in Categorical\_Attribute.  
This means you want to exclude rows where the 'Categorical\_Attribute' is either 'Unit\_3' or 'Unit\_7'.

:::info
These notes are also mentioned in the Filters section for 'Block Models.' This is because both the Points and Blocks sections of the workflow have a dedicated area for applying filters. In both instances, the filter construction adheres to the same guidelines and parameters.*
:::
