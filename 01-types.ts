/**
 * 1. Inference: By default typescript assigns a data type to all variables when they have not been assigned a data type. For example:
 */
let username = "John Doe"; // By default typescript will assigs "string" data type

/**
 * 2. DataTypes: To set a data typhe we have to type ":" after variable name. For example: [let | const] myvar:[myType] = value.
 * Datatypes List: All available in JavaScript
 */
let phoneCode: number = 58;

/**
 * 3. Any: It is not recommended to use it, it disables the typscript checking.
 */
let other: any = "asdf";
other = 34;

/**
 * 4. Unknown: This data type is to set when it does not know the data type.
 */
let otherVar: unknown = "asdf";
other.as; // it throw a error because "as" property is missing

// Last moment: https://youtu.be/fUgxxhI_bvc?list=PLUofhDIg_38pNCZe9ptj72exbFjzyePxT&t=1623
