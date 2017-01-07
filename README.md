# movie-firebase
Movies ionic 2 firebase

Install the packages you’ll need

After you make sure that the Ionic CLI started/installed everything correctly, it’s time to install the packages we’ll need for this app.

First, we’ll need to update @ionic/app-scripts to use the latest version, since that’s the one with Webpack support, meaning it works with Firebase out of the box, you won’t have to create custom builds.

1
$ npm install @ionic/app-scripts@latest --save-dev
That will tell Ionic to use the latest version of the module and you’ll get webpack support.

Now it’s time to install AngularFire2, open your terminal (you should already be in the project folder) and install it:

1
$ npm install angularfire2 --save
