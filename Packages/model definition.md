# JSON Model for Definition Documentation
This documentation provides a detailed explanation of each parameter used in the JSON model for definition, facilitating understanding for any user.

## General Structure
The JSON model for definition is structured into several sections, each representing a distinct aspect of the data being defined. Here's the breakdown of the general structure:


- Name: The name of the entity being defined (e.g., atmospheric pressure, weight, volume).
ShortName: A shortened version of the name for compact representation.
- ID: A unique identifier for the entity.
- Description: A brief description explaining the entity's purpose or nature.
- Type: The type of entity being defined (e.g., pressure, weight, volume).
Fields (for complex types): Subsections defining specific attributes or properties of the entity.


### Parameters Explanation
- Name:
    - Type: String
    - Description: Represents the full name of the entity.

- ShortName:
    - Type: String
    - Description: Provides a shortened version of the name for brevity and clarity.

- ID:
    - Type: String
    - Description: Serves as a unique identifier for the entity, facilitating reference and retrieval.

- Description:
    - Type: String
    - Description: Offers a brief explanation or definition of the entity, aiding understanding.

- Type:
    - Type: Object
    - Description: Defines the type of entity being described (e.g., pressure, weight, volume). It contains additional parameters specific to the type being defined.

- Fields:
    - Type: Object
    - Description: Pertains to complex types where the entity has multiple attributes or properties. Each field within this section further elaborates on specific aspects of the entity.


### Fields Explanation
For complex types (such as pressure, weight, volume), the following parameters are used within the Fields section:

- Name:
    - Type: String
    - Description: Represents the name of the attribute or property being defined.
  
- Description:
    - Type: String
    - Description: Provides a brief explanation of the attribute or property, aiding comprehension.

- Type:

    - Type: String
    - Description: Specifies the data type of the attribute or property (e.g., integer, string, object).

### Optional Parameters (if applicable):

- Range: Specifies the valid range of values for numerical attributes.
- Nullable: Indicates whether the attribute can have a null (empty) value.
- Decimals: Specifies the number of decimal places for numerical attributes.
- Prefix/Suffix: Defines any prefix or suffix to be included with the attribute value.
- Multipliers/Submultipliers: Indicates whether the attribute can be represented using different units and their multipliers.