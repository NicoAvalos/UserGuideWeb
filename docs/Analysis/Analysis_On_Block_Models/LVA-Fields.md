---
sidebar_label: 'LVA-Fields'
sidebar_position: 12
---

# **Locally Varying Anisotropy (LVA) Fields**

The **LVA Fields** tool allows you to compute Locally Varying Anisotropy fields by interpolating azimuth, dip, and tilt values into a block model. These fields are derived from a selected points dataset and can be applied to specific domains, categories, or attributes. This tool provides flexibility for discrete calculations, allowing separate computations for different lithologies.

---

## **Requirements**

1. The block model must contain **at least one global domain** to interact with.
2. You must select a points dataset, which may include categorical or continuous variables.
3. Filters can optionally be applied to the points dataset.

---

## **Angle Names and Default Settings**

| **Angle**  | **Default Reference** |
|------------|------------------------|
| **Angle 1** | Azimuth               |
| **Angle 2** | Dip                   |
| **Angle 3** | Tilt                  |

**Important:** Angle names must be carefully managed and ordered, as they are linked to the LVA calculations for the selected domain, attribute, or category. These angles can later be used for domain modeling, estimations, or simulations.

---

## **How It Works**

The tool calculates LVA fields based on the selected domain and configuration. It operates in two modes:

1. **Global Mode**: Considers all points within the selected dataset for interpolation.
2. **Discrete Mode**: Allows calculations to be performed separately for each lithology or category.

For example:

- If lithologies **A, B, C, D** are selected, the tool treats this selection as **1**, while the rest of the block model is treated as **0**. The LVA is then computed for this dataset.
- Alternatively, for only lithology **A**, it is treated as **1**, while all others (**B, C, D, and others**) are treated as **0**. This results in specific angles being assigned to the **LVA of lithology A**.

---
    **Steps to Compute LVA Fields**

1. **Select the Block Model Dataset**:
   - Choose the block model dataset to apply the LVA calculations.
   - Choose the Blcok model Domains.
   - Optionally, apply filters to narrow down the dataset.

2. **Select the Points Dataset**:
   - Select a points dataset that includes the attributes or domains required for the calculation.
   - Optionally, apply filters to narrow down the dataset.

3. **Configure General Settings**:
   - Set the **Random Seed** to ensure reproducibility.
   - Define the **Maximum Number of Computed Locations**.
   - Specify the **Maximum Number of Nearest Points** to consider during interpolation.

4. **Assign Names to Angles**:
   - Provide meaningful names for Angle 1 (Azimuth), Angle 2 (Dip), and Angle 3 (Tilt).
   - Ensure the angle names align with the intended use for domain modeling or simulations.

5. **Select Calculation Mode**:
   - Choose between **LVA-Fields from Mineralization** (based on attributes) or **LVA-Fields from Geological Units** (based on domains or lithologies).
   - For discrete mode, select specific lithologies or categories.

6. **Configuring the Cross-Table**
    -The **cross-table** maps the relationship between the units in the block model (rows) and the units in the points dataset (columns).
    1. Identify the units in the block model you wish to map.
    2. Check the corresponding boxes in the matrix to define how the units in the points dataset (columns) influence the block model units (rows).
    3. Ensure that each row corresponds to a specific unit in the block model (or that corresponds to your own criteria).

    :::caution
    This matrix determines the influence of the selected units in the points dataset on the block model.

    Only the units with marked boxes will participate in subsequent calculations.
    :::

7. **Run the Calculation**

   - Click **Compute LVA-Field** to generate the anisotropy fields.

---

## **Examples of Usage**

**Global Mode**:
    - Compute LVA for the entire dataset using all lithologies or domains.
    - The resulting angles will be generalized for the entire block model.

**Discrete Mode**:
    - Compute LVA separately for lithologies **A, B, C, D**, assigning specific angles to each lithology.
    - Useful for scenarios where anisotropy differs significantly between domains.

---

:::tip
    - Carefully manage angle names to avoid confusion during later stages of modeling or simulation.
    - Use the discrete mode for detailed studies where separate anisotropy fields are required for specific lithologies or domains.
    - Always double-check the selected points dataset and applied filters to ensure the correct subset of data is being used.
:::
