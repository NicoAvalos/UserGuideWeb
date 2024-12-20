---
sidebar_label: 'Drill-Hole'
sidebar_position: 3
---
# Drill Hole

The first entity corresponds to 'DrillHoles': In this section, it is possible to import, export, visualize, and composite databases related to your DrillHoles from csv files. The operations and work performed on this database, and their results, can interact with other entities in the work tree, thus providing the possibility of being called upon. The scope of each section will be detailed.

---

## **Import** {#import-1}

This section aims to create the Project, prepare the database, and perform Desurvey. The default method is 'Balanced Tangent'. Other methods can be selected. The method used for working with the database is indicated at the top during the following steps. To begin, you must import the information from the Collar and Survey files, and you can add 'simultaneously or later' Assay files and/or other files with interval characteristics.

Once the csv file is selected and loaded, a table will appear at the bottom. The left side will display the name of the headers for each column contained in the imported csv file (Column Name), and to its right, there will be a data type selection option (Data Type). The minimum data types necessary to import and select are also indicated based on the type of file that is being loaded.

Should the imported file have repeated columns (or headers that are the same), these will be duplicated on the interface's left side. You may opt not to select the columns you don't intend to use (leaving them not imported). To streamline the process and reduce potential confusion, users are advised to revise and edit their files prior to importing.

Also, if the dataset contains any missing values in any of the columns, the respective row will be excluded from consideration.
  
![][image1]

**(A)Previous Point Method:** Considering the collar as the starting point, the positioning of the next point is calculated using Survey measurements. Thus, the dip and azimuth of the next point are not taken into account, but rather the distance between the start and the arrival point (next) is considered. In this way, the drillhole trace is traversed from a point with direction and orientation provided by the dip and azimuth of the same current point, or 'previous point', or current point, and the path is the distance between them.

If the collar is the starting point with XYZ dip(1) and azimuth(1), and the next point is dip(2), azimuth(2), and the distance between the collar and the next location of the measurement is D, then the trace has a length of D with direction and orientation dip(1) and azimuth(1).

**(B)Following Point Method:** Considering the collar as the starting point, the positioning of the next point is calculated using Survey measurements. Thus, the dip and azimuth of the next point are taken into account considering the distance between the start and this resulting point. In this way, the drillhole trace is traversed from a point with direction and orientation provided by the dip and azimuth of the next point (to which it arrives), and the path is the distance between them.

If the collar is the starting point with XYZ dip(1) and azimuth(1), and the next point is dip(2), azimuth(2), and the distance between the collar and the next location of the measurement is D, then the trace has a length of D with direction and orientation dip(2) and azimuth(2).

**(C)Balanced Tangent Method:** This method projects the drillhole trace between two points in such a way that the length is balanced with the dip and azimuth measurements of each end. To achieve this, the separation distance is divided by 2, and the first segment of length d/2 is projected with the dip and azimuth of the starting point. The next segment starts halfway along the path and is projected with a length of d/2 and with the dip and azimuth of the endpoint.

If the collar is the starting point with XYZ dip(1) and azimuth(1), and the next point is dip(2), azimuth(2), and the distance between the collar and the next location of the measurement is D, then the first trace has a length of D/2 with direction and orientation dip(1) and azimuth(1).Afterward, the trace continues with a distance of D/2 with the direction and orientation of dip(2) and azimuth(2), reaching the location of the next point.

All of these methods proceed in a manner where point 2 transitions to become point 1, while the subsequent point for calculation becomes point 2

## **Drill Hole Data Import Guide**

This guide outlines the required data types and steps for importing **Collar** and **Survey** files into the platform. Each file type corresponds to specific parameters essential for accurate 3D projections and data management.

---

### **COLLAR** {#collar}

To import **Collar-type files**, the following columns are required:

| **Parameter**       | **Description**                              |
|----------------------|----------------------------------------------|
| **DHID**            | Drill Hole identity (unique identifier).     |
| **East**            | Easting coordinate (X axis).                 |
| **North**           | Northing coordinate (Y axis).                |
| **Elevation**       | Elevation or altitude (Z axis).              |
| **Drill Length**    | Total length of the drill hole.              |

- Ensure each column is clearly labeled and corresponds to its respective data type.
- The platform uses these specifications to correctly identify and load the **Collar** data.

---

### **SURVEY** {#survey}

To import **Survey-type files**, the following columns are required:

| **Parameter**       | **Description**                                   |
|----------------------|---------------------------------------------------|
| **DHID**            | Drill Hole identity (matches the Collar file).    |
| **Distance**        | Measured depth or distance along the drill hole.  |
| **Azimuth**         | Horizontal angle in sexagesimal degrees (0°-360°).|
| **Dip**             | Inclination angle in sexagesimal degrees (-90° to 90°).|

- The **Azimuth** and **Dip** values must be provided in **sexagesimal degrees**.  
- Verify that all values are accurate and consistent to avoid errors during loading.

---

### **ASSAY** {#assay}

After importing Collar and Survey data with their required columns, the option to add files containing interval-related information about the drill holes will be available. In this section, you can add as many CSV files as needed, and it will be necessary to select the data types for each added file, including: DHID, From, To, and at least one numerical or categorical variable.

It is recommended that all interval databases belonging to the project being loaded, which are intended for use or could potentially be used, be added. In the current version of the "Annapurna Platform," once Desurvey is applied, new intervals cannot be separately added to the project.

At the top, the tracking of the previous steps that have been completed is indicated to support continuity. This will be showing what intervale files have been uploaded.

When you have imported the last one, and you find yourself back in the interface for selecting and loading new interval data, apply 'Run Desurvey'. Furthermore, you have the option to upload and designate the most recent interval files that you intend to utilize before executing the "Run Desurvey" function. In this scenario, the recently uploaded files will also be taken into consideration

Once all your files are uploaded, you can click 'Run Desurvey' to have the software process the information. When the process is finished, a window will appear, indicating that the process has been completed. It will display the project name, the selected desurvey method, and the imported files. If you have loaded a file two or more times or missed any, you will notice it in the message delivered once the process is completed.

:::note
By following these steps, you ensure accurate and efficient data importation for **Drill Holes**. This enables seamless **3D visualization** and further analysis within the platform.
:::

---

## **Export** {#export}

The list of projects and the list of files belonging to each project are displayed. Thus, this section allows exporting the desired columns from the selected files. It exports as CSV documents. Follow these steps:

    1. **Project and Data Set Selection:**  
        * Under the 'Project' category, select your desired project from the dropdown menu.  
        * Similarly, click on the 'Interval dataset' category to choose the specific data set you are interested in.  
    2. **Column Selection:**
        * Once the project and data set are selected, a list of available column headers will appear in the lower section.  
        * Check the boxes next to the column names you want to include in your CSV file.  
    3. **Exporting the File:**  
        * After selecting the columns, click the 'Export' button.  
        * You will be prompted to specify the directory on your device where you wish to save the exported CSV file.

These files will come with an additional 6 columns generated by the desurvey method, meaning XYZ top, mid, bottom can be visualized.
Therefore, the file is directly available for your use on your computer, georeferenced.

---

## **Manage** {#manage}

The **Drill Hole Manager** section focuses on managing datasets related to drill hole intervals, such as assay data, lithological logs, or composites. It ensures efficient handling of large geological datasets used in exploration and mining workflows.

Key Features

    1. **Viewing and Organizing**  
        * Displays imported drill hole datasets with details such as **name**, **creation date**, and **size**.  
        * Allows sorting and grouping to simplify data management.  
    2. **Renaming**  
        * Users can rename drill hole datasets to reflect their content or purpose, maintaining clarity in large projects.  
    3. **Exporting**  
        * Generates **CSV files** of drill hole data, preserving the dataset's name.  
        * Exported files include interval data with columns like:  
            * **Drill Hole ID**  
            * **From** / **To** depths  
            * **Assay values**, **Lithology**, or **other attributes**  
    4. **Deleting**  
        * Allows users to delete datasets when no longer needed, ensuring efficient workspace management.  
        * **Caution**: Deletion is permanent.

Example: CSV Download

For a drill hole dataset named DemoDDH, exporting it will produce a file named DemoDDH.csv with columns such as:

    * **DHID**  
    * **From**, **To**  
    * **Assay results** (e.g., Au\_ppm, Ag\_ppm)  
    * **Lithology** or other logged attributes

**Note:** In the **Properties and Edit** section, you can view, modify, and manage various attributes or columns of the dataset. Additionally, you can create new attributes using calculated fields and customize the content for export through a tailored download.

\*Compositing results in the creation of a dataset in the Point Section, due to the generation of X, Y, Z coordinates for the top, middle, and bottom positions.

---

## **Properties** {#properties}

This section allows you to view the loaded files with their columns and up to 100-1000 rows. It also allows you to directly delete projects. The 3D visualization of the information corresponds to the Visualization section of the task tree.

1. **Select a Project:** Click on the dropdown menu where it says "Test" to display a list of available projects. Choose the project you are interested in by clicking on it.
2. **Select a Dataset Type:** Click on the dropdown menu labeled "Assay" to see a list of dataset types, such as different intervals or specific data sets related to the project. Click on the one you need to select.

Once both selections are made, you should have the project and the type of data you want to work with or view. The buttons labeled "Project" and "Interval dataset" are actually indications of what type of information you are expected to select from the dropdown menus, not clickable buttons.

**So, in summary:**

    * Use the first dropdown to choose your project.  
    * Use the second dropdown to specify the dataset related to that project you want to view.

---

## **Compositing** {#compositing}

The Compositing feature allows direct work with loaded Drill Hole projects to perform different composting methods. Once compositing is completed, the resulting database can be visualized and worked on from the Points type section in Elements, as this methodology generates the top, mid, and bottom X,Y,Z coordinates.

The steps to apply this functionality are:

1. **Drill Hole project loaded.**

    This can only be applied to loaded Drill Hole projects containing databases with intervals, i.e., not just Collar and Survey; there must be at least one additional interval file. If multiple combinations of desurvey among files are desired, for example, using lithologies, mineralizations, alterations, and these are worked as independent files, they must then be loaded into the project in the initial phase; otherwise, they cannot be selected for this functionality.

2. **Choice of Method to composite.**

    There are two general and direct methodologies: Straight and Run Length.  
    If Straight is selected, proceed to the next step.  
    If Run Length is selected, specify the support length to composite to, by default, it is 4m.

3. **Choice of interval dataset and its numerical attribute**  

    For both method cases, the interval file and the numerical attribute to consider, to which the compositing will be applied, must be selected; for example, Assay, Cu.  
    You will also have the option to indicate the Trimming Limits, both upper and lower (Upper trimming and Lower Trimming).

    :::info
        * If you do not wish to composite considering categorical attributes, you are ready to perform the compositing and can apply Run Compositing.
    :::

4. **Compositing with categorical attributes (optional).**  

If after step 3, you wish to composite with categorical attributes either to calculate majorities and/or to perform compositing by categorical breaks (by lithology, for example), you must select "With categorical attributes".

***This will enable 3 options to select***

1. **Interval dataset:** You must select the file that contains the categorical attribute you wish to use, remembering that it must be an interval file, i.e., the category with its From To interval must be defined.

2. **Hard Limits:** This option will indicate whether to perform a compositing breaking by the selectable categorical variable or without breaking by the numerical variable. If no breaks are generated, the majority calculation of that categorical variable is worked on indirectly at the time of performing the compositing. When making a break, option (iii) is on.

3. **Braking by:** You must select the categorical attribute that will guide the break of the compositing. This will generate the interaction between the From-To of step 3 and the From-To of the selectable categorical variable, and if you chose the Run Length option, it will consider the indicated support length.

For example, if you wish to make a break by lithology, in point (i) you must select the file containing the column with the lithologic attribute, in point (ii) indicate Hard Limits, and in point (iii) indicate the name of the column containing the Lithologies, and then in the interface below select the values (names) of the lithologies considered.

In this way, by applying Run Compositing, when there is a lithological change, this new Form of the lithology marks the beginning to consider the support length of the Run length, in which it will composite the numerical variable.

:::caution
Compositing generates a dataset in the Point Section by providing X, Y, Z coordinates for the top, middle, and bottom positions. This resulting file can be visualized in the Points section under Elements, downloaded, and projected in 3D.
:::
