# Burger Destroyer

Burger Destroyer is a smart to-do application that will manages all the delicious burgers you have yet to destroy, and the burgers that you eventually will destroy.


## Instructions

Enter into the box the burgers that you will consume. 

Once you have destroyed such burger, check the box saying that you have done so!

## Demo

Adding a burger from the input button will display it on the left column as Burgers to Eat.

From
<img src="public/assets/imgs/add_burger.JPG" alt="Add Burger">

To
<img src="public/assets/imgs/added_burger.JPG" alt="Added Burger">


Clicking on DEVOUR IT sends the burger over to DESTROYED BURGERS.

<img src="public/assets/imgs/added_burger.JPG" alt="Destroyed Burger">






# Developer Section

## Directory structure

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   
│       └── img
│           
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```




# Built With

* [Handlebars]  - HTML handler
* [Express] - Node.js Framework
* [mySQL]  - Database Manager


