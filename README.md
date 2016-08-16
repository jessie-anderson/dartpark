# DartPark

DartPark is an application that allows users to buy and sell parking spots on and around Dartmouth’s campus. Users can register as either renters or vendors; renters must be Dartmouth students, but vendors can be residents of Hanover, students, student organizations, the town of Hanover, or anyone else with spots available in Hanover. If a user is a student, they will have the option to create a vendor profile as well.

The app will allow renters to search for and buy parking spots based on location and price. Vendors will be able to list spots with location, description, and price. Payment will occur through the app.

### Mockups

**Sign Up!**
![alt text](Mockups/Sign Up.png)

Renter or Vendor?
![alt text](Mockups/SelectAccountType.png)

**Or login if you already have an account:**
![alt text](Mockups/Log In.png)

**Vendor Stuff:**

Don't have any spots yet?
![alt text](Mockups/DefaultVendor-FTU.png)

Create spots to sell...
![alt text](Mockups/AddSpots.png)

And then review the spots you made...
![alt text](Mockups/ViewSpots.png)

And then edit info as needed...
![alt text](Mockups/AddPicPopUp.png)

And now this is your homepage:
![alt text](Mockups/DefaultVendor.png)

And you can click on spots to view/ edit them!
![alt text](Mockups/SpotDetails.png)

Sample profile page:
![alt text](Mockups/EditProfile.png)

**Renter Stuff**

Dartmouth Students Only!
![alt text](Mockups/StudentAuth.png)

Search for spots...
![alt text](Mockups/FindSpot-Select.png)

And click on one you're interested in...
![alt text](Mockups/FindSpot-Search.png)

And pay!
![alt text](Mockups/PayForSpot.png)

Here's a sample profile:
![alt text](Mockups/ProfileRenter.png)


**Shared stuff**

Messaging
![alt text](Mockups/Messaging.png)

**Flow Charts**

Vendor
![alt text](Mockups/FLOW_CHART.png)

Renter
![alt text](Mockups/Renter_FLOWCHART.png)


## Architecture

### Code organization

* Two repos
  * Frontend: [dartpark](https://github.com/jessie-anderson/dartpark)
  * Backend: [dartpark-server](https://github.com/jessie-anderson/dartpark-server)
* Frontend: see src/ file for components
  * Renter-specific components
  * Vendor-specific components
  * Shared components

### Tools and Libraries
* Bootstrap
* Heroku
* mongodb
* mongoose
* Google Maps API
* react-router
* eslint
* Sass
* Express
* Redux
* react
* babel
* npm
* github
* atom
* this guy

![](http://i.imgur.com/B8qZnEO.gif)

### Mongoose Schemas (Rough Ideas)

**Users**

* first name
* last name
* renter or vendor?
* password
* Dartmouth email?

**Spots**

* Name
* Price
* Occupied (boolean, false by default)
* Address
* Path to photo: (url/path)

## Setup

* npm install
* npm start (frontend)
* mongod (backend)
* mongo (if you want the mongo command line)
* npm start dev (backend)


## Deployment

`git push heroku master` (backend)

`npm run deploy` (frontend)

Also, deploys automatically using Travis CI whenever master branch is updated.

Screenshot of Travis CI at work:
![travis](travis.png)


## Authors

* Luisa Vasquez
* Jessie Anderson
* Benjamin Cooper
* Mau Esquivel
* Divya Kalidindi

## Acknowledgments

Thanks, Tim!
