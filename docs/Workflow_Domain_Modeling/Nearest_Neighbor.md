---
sidebar_label: 'Nearest Neighbor, NN'
---

# **Domain modeling** {#domain-modeling}

Annapurna offers two powerful tools for domain modeling in your projects: Nearest Neighbor and Kriging. Both options can be executed with all parameters fully automated, allowing Annapurna to generate the necessary adjustments even in the first run. Once the process is completed, a detailed report is generated, and the model can be visualized in 3D in the Visualization section.

Additionally, created instances can be modified, adjusted, or cloned (with a new name), enabling the preservation of desired results and comparison with other modeling executions.

Below is a step-by-step guide on how to use these tools. Although the usage is intuitive, user experience may influence the decisions and adjustments to be made.

---

## **Nearest Neighbor** {#nearest-neighbor}

The guide is divided into two sections: the fully automated application and the customized application. It is possible to combine automated and customized options as needed.

### **Automated**

Description to make an automated workflow in Nearest Neighbor Domain Modeling

**Step 1: Instance Creation**

* Upon selecting this tool from the task tree on the left, the platform presents an interface where you can create a "new instance" or select existing instances to open, clone, or delete. After entering the name, click the "New instance" button to generate it. Remember that the name cannot be modified later. The interface immediately proceeds to the second step, which involves working on the instance.

**Step 2: Search Plan Settings**

* Once the instance is created, the interface transitions to the second step, which involves adjusting settings. This step indicates the instance's name and presents two alternatives to choose from: Customized or Automated. For this example, we select Automated.

**Step 3: Dataset Selection**

* Select the block model and points containing the database on which domain estimations will be based, choosing at least one attribute to estimate. Specific filters for the block model and/or Point Dataset can be applied. Remember that both the block model and point information must refer to the same project, ensuring spatial correlation with the project area.

**Step 4: Save and Run**

* After making adjustments and selections, save the settings. A window will appear to decide whether to run the estimation domain modeling. Click "Run Instance," and a confirmation popup will appear; press Ok to start the process. The instance and its status can be checked in "Logged," in case you wish to exit the interface and navigate to another tool tree offered by Annapurna or start a new instance and work on another project.

**Step 5 : Results**

* Upon completion of the processing, a new column is generated in the block model database with the resulting information. This column is named after the attribute used for estimation, followed by the estimation method, suffixed with "\_Est" to indicate it as estimated.  
* Example: For instance, using "CuT" as the attribute and the "Nearest Neighbor" method, the resulting column would be named "CuT\_NN\_Est".

Once completed, you can review the report with the automated adjustments determined by Annapurna. View the results in 3D projection in the Utilities section and save the visualization link for sharing. This instance can be cloned to create a new one based on the automatically calculated parameters, allowing for adjustments only on a customized basis if needed.

---

### **Customized**

**Step 1: Instance Creation**

* Upon selecting this tool from the task tree on the left (Domain Modeling, NN), the platform provides an interface where you can create a "new instance" or select existing instances to open, clone, or delete.  
* Creating an instance from scratch requires entering a name and clicking the "New instance" button to generate it. Remember that the assigned name cannot be modified later.  
* The interface immediately proceeds to the second step, working on the instance. If you've previously executed a procedure in your project either automated or customized and wish to work on that instance with new plan adjustments:  
  * Select the name of the completed instance and click "Open" to continue working on the same project under the same name.  
  * Alternatively, select the name of the completed instance, click "Clone," and then provide a new name for this cloned instance. Once created, select it from the dropdown list and click "Open."  
  * Working from a completed and executed instance allows you to utilize the parameters it brings and modify them as needed.

**Step 2: Search Plan Settings**

* Once the instance is determined, the interface moves to the second step: choosing settings. For this section, select "Customized."

**Step 3: Dataset Selection**

* Select the block model and points containing the database for domain estimations, choosing at least one attribute to estimate. You may apply specific filters for the block model and/or Point Dataset.  
* Ensure both the block model and point information refer to the same project, maintaining spatial correlation with the project area.

**Step 4: Save and Continue**

* After making adjustments and selections, save the settings. A window will appear to customize the parameters. Here, you can modify the search plan for each domain to be estimated.  
* Note that there are six parameters to determine for each plan (1, 2, 3, and 4): Major axis, Semi-Major axis, Minor Axis, Angle 1, Angle 2, and Angle 3.  
* You can utilize multiple tools provided by Annapurna to support your decisions.

**Step 5: Save and Run**

    * Once all adjustments have been made manually in the previous step, click "Save and Continue," then "Run Instance." A confirmation popup will appear; press "Ok" to start the process.  
    * The instance and its status can be checked in "Logged," in case you wish to exit the interface and navigate to another tool tree offered by Annapurna or start a new instance and work on another project.  
    * You can review the report with the parameters used and print it. View the results in 3D projection in the Utilities section and save the visualization link for sharing.

**Step 6 : Results**

    * Upon completion of the processing, a new column is generated in the block model database with the resulting information. This column is named after the attribute used for estimation, followed by the estimation method, suffixed with "\_Est" to indicate it as estimated.  
    * Example: For instance, using "CuT" as the attribute and the "Nearest Neighbor" method, the resulting column would be named "CuT\_NN\_Est".

:::note
*If you require further assistance, supervision, or encounter any issues or difficulties in finding the desired function, please do not hesitate to contact support.*
:::
