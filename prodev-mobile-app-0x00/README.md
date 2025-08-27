First Mobile App Setup
This document outlines the steps taken to scaffold a new mobile application using the Expo Router template and the observed effects of the reset-project command.

Scaffolding Process
Navigate to the project directory:
cd prodev-mobile-setup

Initialize the Expo project:
npx create-expo-app@latest .
This command initializes a new Expo project in the current directory using the latest Expo Router template. The file-based routing system creates a app/ directory which contains the application's navigation routes.

Modify the Home Screen:

I opened the app/(tabs)/index.tsx file.

I located the default <Text> component with the value "Welcome!".

I changed the text to "** First App Created**".

The changes were automatically reflected on the web preview after saving the file.

Observations from npm run reset-project
When I ran the npm run reset-project command, I observed the following:

The existing app/ directory was renamed to app-example/. This preserved the original project files and the modifications I had made.

A new app/ directory was created, containing a fresh copy of the default Expo Router template.

This command effectively "resets" the project to its initial, un-edited state, making it easy to get a fresh start without having to manually delete files. The app-example/ folder serves as a backup of the previous work.