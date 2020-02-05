# Burger_Munch
Node Express Handlebars: Homework 13

## to do

* We need a burger.png
│       └── img
│           └── burger.
  * Wait till Friday to see if Marcie can get you a burger icon
* Handlebars -- set up page how you would like it to look 
  * Bkg clolor -- woody brown color, or wood panelling
  * To devour box forest green, devoured column slate grayish color
  * make the form box larger? 
  * pick a great font 
  * will the button be hidden on devoured through handlebars or through plain ol CSS?
  * Just use CSS to set it up or bring over some sweet sweet bootstrap or other css friend?
* Watch Sarahs cat video review
  * Fix connections accordingly once you have a greater understanding of what the heck you're doing babe
* Write readme
* Upload appropriately

### Overview

In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

* **This assignment must be deployed.** Be sure to utilize the [MYSQL Heroku Deployment Guide](../../03-Supplemental/MySQLHerokuDeploymentProcess.pdf) in order to deploy your assignment.

### Before You Begin

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.
* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.
* Your app will store every burger in a database, whether devoured or not.
* [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).

4. Write up and Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

5. Now you're going to run these SQL files.
   * Make sure you're in the `db` folder of your app.
   * Start MySQL command line tool and login: `mysql -u root -p`.
   * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.
   * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.
   * Close out of the MySQL command line tool: `exit`.

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. In addition, add this homework to your portfolio, more information can be found below.
 
- - -

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.