1.  Explain the differences between `client-side routing` and `server-side routing`.
Client side routing is a server set up where an initial request is made by the client to the server, and the server sends all of the data in the form of an html page at once. This prevents the page from refreshing each time we request data, because the data is already stored in state. Server-side routing is where the client requests data from the server, and each time the server sends over only the necessary data. This triggers a page refresh. This method can be slower than client-side routing, but has the benefit of having search engine optimization, which client-side routing does not have. 


1.  What does HTTP stand for?
Hypertext transfer protocol

1.  What does CRUD stand for?
Create, read, update, delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Create -> POST method
Read -> GET method
Update -> PUT method
Delete -> DELETE method

1.  Mention three tools we can use to make AJAX requests
You can use fetch, axios, or another library such as jquery or Request