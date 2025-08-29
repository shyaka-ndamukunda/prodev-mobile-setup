# My First Mobile App Setup

This document outlines the steps I followed to set up my first mobile application using the Expo Router template. It also includes my observations from the `reset-project` command.

## Scaffolding Process

1.  **Project Initialization:** I used the `npx create-expo-app@latest prodev-mobile-app-0x00` command to initialize a new Expo project. This created a new directory, `prodev-mobile-app-0x00`, with all the necessary project files.

2.  **Home Screen Modification:** I navigated into the project directory and opened the `app/(tabs)/index.tsx` file. I changed the default "Welcome!" text to "**First App Created**" as required by the task.

## Observations from `npm run reset-project`

When I ran the `npm run reset-project` command, I observed the following:

* The script moved the original `app` folder (which contained my modified files) to a new directory named **`app-example`**. This action serves as a backup of the original project.
* A new, clean `app` directory was automatically created with a fresh set of default files.
* I encountered an `EPERM` error, which required me to perform the file move manually. This taught me that file permissions or a running process can interfere with script execution.