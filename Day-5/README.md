# Day-5
### document.getElementById() 
is a method used to access an HTML element by its unique id attribute.
Purpose: It retrieves the element with the specified id.
Return Value: It returns the element as an object if found, or null if no element with the given id exists.
Usage: Ideal for quickly accessing and modifying elements with unique id attributes.

### document.querySelector()

In JavaScript, the document.querySelector() method is used to select and return the first element in the DOM that matches a specified CSS selector. If no matching element is found, it returns null.

###  document.createElement()
In JavaScript, document.createElement() is a method used to create a new HTML element dynamically. This element is not automatically added to the DOM (Document Object Model); you need to append it to an existing element in the DOM to make it visible.

###  document.createTextNode()
The document.createTextNode() method in JavaScript is used to create a new text node containing the specified text. A text node is a type of DOM node that holds only text content, without any HTML tags or elements.


### The document.write() 
The document.write() method in JavaScript is used to write content directly to the HTML document. It inserts the specified content (usually HTML or text) into the document stream.

Key Points:
Usage:

It writes content to the document while it is still loading.
Commonly used for simple tasks like dynamically adding text or HTML during page load.

### document.open() or  document.close()

In JavaScript, the document.close() method is used to indicate that you have finished writing to a document using document.write() or document.open(). It essentially closes the output stream of the document, signaling that no further content will be added.


Key Points:
Purpose: It finalizes the writing process after using document.write().
Usage: Typically used in conjunction with document.open() and document.write().
Effect: Once document.close() is called, the browser renders the content written to the document.
