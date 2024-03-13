# Deployment and env

## What is deployment
When we build an app at the beginning, it's only accessible on our own computer, this is known as the local dev environment, aka **localhost**. When working on localhost, our code lives on our computers and is accessed only by us.

If we want to release the local app to users, we need to make it available on a public computer, aka **server**. Those web servers keep our code, run it and deliver pages to anyone who requests them. The process of moving the code from local computer to the remote public host is called **deployment**, which eventually allows others users across the Internet to access the app.

## Deployment environment
The main three environments are: development, stage, and production.

### Development
Usually short as dev,this is the environment on our computer, where all of our commits and branches live. Nothing we do in the dev environment affects what users currently see when they pull up the website. This is just for us and the other web devs to see how new features will work and to try out improvements. We don't want to release our code before we make sure it works locally at least. The development environment is usually configured differently from the environment that users work in.

### Stage
The stage environment is as similar to the production environment as it can be. We'll have all of the code on a server this time instead of a local machine. It'll connect to as many services as it can without touching the production environment.

All of the hard core testing happens here. Any database migrations will be tested here and so will any configuration changes. When we have to do major version updates, the stage environment helps us find and fix any issues that come up too.

If we have a client, this is where we would be able to give them a demo of how things work and look. Think of the stage environment as the place where we do the last checks and polish things up.

### Production
Usually short as prod, this is where users access the final code after all of the updates and testing. Of all the environments, this one is the most important as this is where companies make their money so we can't have any crippling mistakes here. That's why we have to go through the other two environments with all of the testing first. Once we're in production, any bugs or errors that remain will be found by a user and we can only hope it's something minor.

## The deployment advantages of SPA
A single page application is super-simple to deploy if compared to more traditional server-side rendered applications: it is really just one index.html file, with a CSS bundle and a Javascript bundle.