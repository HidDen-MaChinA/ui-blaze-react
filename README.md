# UI-Blaze-React
A starter project that i can use for new react ui project. it is packed with twailwindcss, i18n and react-router.
with that it has my personnal implementation of routing, authentification, authorization, form handling, api calls and many more. 


# How to install
First clone the repository

    git clone https://github.com/HidDen-MaChinA/ui-blaze-react.git


Then Install all the dependencies

    npm install

# How to setup
## Authentification
In the ```blazeRouteConfiguration.ts``` file add the type for the succesfuly authentified user that will be used through the application accessible via zustand store.

       const authentificationDetails = useAuthStore(store=>store);

And setup your authentification provider in the ```blazeCentralConfiguration.ts``` file. using the "blazeAuthProvider" property, set the value for "blazeAuthProvider.authentificationPath" to set the ressource path of the API that will be used for authentification and set the value for "blazeAuthProvider.authentificationProvider" as an instance of a class that will implement the ```IBlazeAuthentificationProvider``` Interface.
 
 ## Layout
 In the ```blazeCentralConfiguration.ts``` file in the "blazeLayout" property. either use a prebuilt Component for each properties of "blazeLayout" or create your very own following the guideline of Blaze UI for maximum reusability. but that will be in the customization section of this readme.

 # How to Use
 I created Blaze UI to be a really strong react web app starter backed with Authentification, Route Control, Forms creations, Charts, APICalls system, middlewares to controle the result of the whoami api call in the Authentification layer...and many more.
 ## Routes
 There is a file named ```blazeRouteConfiguration.ts``` in the src/ directory that should export by default an array of object of type 

    TBlazeRouteType
    
that object will be used to create a route and has a few usefull properties like ```protection``` of type boolean telling weither the route is protected using the authentification layer or not. there is also the ```middlewares``` property, witch is an array of function of type

    BlazeMiddleware

each function in the array is executed after the response of the method

    IBlazeAuthentificationProvider::whoami

in the authentification layer of the application and each middleware is executed following it's index in the ```middlewares``` array.
Each middleware's return value is used as the argument for the next middleware in the list until there is no middlewares left in the array then the result of the last middleware is set to be the value of the user information accessible with the zustand store ```useAuthStore```.
If in the end the result of the last middleware is null. then the authentification infer that you are not allowed and redirect you to the ```/forbidden``` page. 