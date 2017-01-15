React Native Snapchat Clone
===

Well actually, very simplified clone , just for fun. 
This app is backed by the following Ruby on Rails API
https://github.com/Michaelvilleneuve/react-native-snapchat-clone-API.

Works and looks the same on Android and iOS.

It features : 
+ 📲 Login
+ 👀 Viewing the list of snaps you received (with distinction between those you've already viewed and those you've not)
+ 📸 Sending Snap to another user
+ 👻 Self destruction of snaps after 10 seconds

## 📲 Login
It uses Rails's devise token Gem to handle connection, and React Native storage to persist token.

<img width="200" src="https://raw.githubusercontent.com/Michaelvilleneuve/react-native-snapchat-clone/master/screenshots/login-screen.png">

## 👀 Viewing the list
You can only click the snaps you have not already viewed.

<img width="200" src="https://raw.githubusercontent.com/Michaelvilleneuve/react-native-snapchat-clone/master/screenshots/snaps-list-view.png">

## 👻 Viewing single snapp (before self destruction)
Nothing to say here, just view the snap before it disappears.

<img width="200" src="https://raw.githubusercontent.com/Michaelvilleneuve/react-native-snapchat-clone/master/screenshots/snap-viewing.png">

## 📸 Capturing a snapp
Uses front cam as default, then base64 encode the image

<img width="200" src="https://raw.githubusercontent.com/Michaelvilleneuve/react-native-snapchat-clone/master/screenshots/snap-capture.png">

## 📸 Choosing a recipient
Pick a recipient, and the base64 image is uploaded to the API

<img width="200" src="https://raw.githubusercontent.com/Michaelvilleneuve/react-native-snapchat-clone/master/screenshots/recipient-choosing.png">

## That's it !
Do whatever you want with, it. 
It is too late to compete with SnapChat anyway 😉
