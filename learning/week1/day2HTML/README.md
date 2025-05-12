Network & HTML
Network
How internet works internet is a wire, devices that connected to the internet can communicate webpage/file is store in the server's hard drive each server has unique IP address our device is client
html foundation of the web page css style of the web page js interaction/functionality of the web page

HTTPs hyper text transfer protocol (secure) data sent is encrypted responsible for communication between web servers and clients webpage send request to server, server send response back

CDN content delivery network a system of distributed servers that deliver web content to users based on their geographic location. bring servers closer to user, reducing physical distance between server and users request send to nearest edge server based on user's location
“A CDN, or Content Delivery Network, is basically a network of servers spread out across different locations. Instead of loading everything from one main server (which could be far from the user), the CDN stores copies of static content like images, stylesheets, or videos in multiple places around the world. So when someone visits a website, they get the data from the server that’s closest to them. This makes the website load faster and reduces the pressure on the main server. It also helps keep the site online even during high traffic or if something goes wrong with the original server.”

HTTP requests stateless REST server response to create,read,update,delete requests GET/POST/PUT/DELETE REST stands for Representational State Transfer. It’s a way of designing APIs that makes it easy for different systems to communicate over the web, usually using HTTP. In REST, everything is treated like a resource—like users, posts, or products—and each resource has its own unique URL. You use standard HTTP methods like GET to read, POST to create, PUT or PATCH to update, and DELETE to remove. It’s simple, stateless, and easy to work with, which is why it’s really popular for building web services.

HTTP status codes 1xx informational 2xx success 200 - OK 201 - OK created 204 - No Content 3xx redirect 301 - Moved to new URL 304 - Not modified 4xx client error 400 - Bad request 401 - Unauthorized 403 - Forbidden 404 - Not found 409 - Conflict 5xx server error 500 - internal server error

HTML
Inline Elements: , ,

Do not start on a new line
Take only the necessary width
Block Elements:

## ,

,
,

Start on a new line
Take full width available
Tag Attributes:

provide information about an element
placed within the start tag
key/value pairs
HTML5 Semantic Tags: clearly describes its meaning to both the browser and developer almost everything is semantic tags expect span and div

Details

<div class="container">
  <h1>Hello, World!</h1>
  <p>This is a paragraph.</p>
</div>
DOM manipulation NEED TO REVIEW
Document Object Model Manipulation means interacting with HTML elements using JavaScript You use selectors like getElementById, querySelector, and querySelectorAll to grab elements from the page so you can read , change, or remove them

selectors
event listeners let you run JavaScript when something happens on the page: like a user clicking button you use addEventListener() to "listen" for events such as click, submit, or keydown and then trigger a function when the event occurs
event propagation describes how events move through the DOM two main phrase
event capturing : event moves from the root of the DOM down to the target element
event bubbling default behavior where events "bubble up" from the target element to its parent element : event moves back up from the target to the root
event delegation attaching a single event listener to a parent element instead of individual child elements because of bubbling, the parent can catch events from its children, which is more efficient
Browser
Local Storage vs session storage vs cookies browser independent local storage and session storage are similar local never expires has to delete manually, session expire when tab closed both stores on browser only
cookies can only store 4kb much smaller, store in browser and server sent with each request automatically, communicate between browser and server

localStorage.setItem('name','Bob) localStorage.getItem('name') localStorage.removeItem('name')

sessionStorage.getItem('name') document.cookie = 'name=Kyle;expires='+new Date(2020,0,1).toUTCString()

Accessibility
