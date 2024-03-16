# Static, dynamic and SPA
"Static," "dynamic," and "SPA" (Single Page Application) are terms used to describe different approaches to building and delivering web applications

## Static website
A static website consists of HTML pages that are **pre-generated** and are stored on the server. The content remains the same for all users, and will not change unless the developer updates it manually. With the help of a static site generator, we do not need to hand-code those pages any more, as they can be generated automatically (before they’re uploaded).

:::tip
Static websites are generally faster to load because there's no need to generate content dynamically.
Use cases are info-based sites such as: personal blogs, company websites, and landing pages.
:::

## Dynamic website
A dynamic website generates content **on-the-fly** in response to user requests or inputs. Content can be customized based on various factors such as user preferences, session data, or database content. It is often powered by **server-side programming languages** like Java, PHP, Python, Ruby, or Node.js. These languages handle HTTP requests from clients, interact with databases, and perform other server-side tasks.

One disadvantage is that every page that a user visits needs to be generated on the server. That means, the user always has to wait for a new page to be sent even there is only a tiny change and the main frame stays the same.

:::tip
Suitable for websites with fast-changing contents and good SEO.
Use cases are e-commerce websites, content management systems (CMS), and web applications with user authentication.
:::
The advantage is that the client (browser) receives the final content and that is great for SEO. That’s especially important if the client is not a user but a search engine crawler - it always helps if it sees what the user would see.


## SPA
A Single Page Application is a type of dynamic web application where the entire application is contained within a single web page. SPAs use JavaScript to dynamically update the page content, often in response to user interactions, without the need for full page reloads.

The application loads once initially as a single HTML page and dynamically updates content without refreshing the entire page. Then it requires **client-side routing** to manage navigation within the application.

SPA provides a smoother user experience similar to native mobile apps, because the user never has to wait for a new page to load. Instead, updates and changes happen instantly.

One biggest disadvantage is the SEO incapability, because the content received initially from the server is just an empty HTML, so the search engine crawler won't be able to see anything.

:::tip
Suitable for web apps that don’t need search engine crawling, such as Gmail, Facebook, and Twitter.
If SEO matters, one possible way is to create the landing page as a static site while create the rest of the app as a SPA.
:::