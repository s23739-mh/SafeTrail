To get ready with the project:

---

*Own NEW Environment (omit it)*

Run - 'npm install -g expo-cli'

Run - 'npm install react-i18next i18next --save'

Run - 'npm install i18next --save'

---

Keep in mind that the project is being developed in Visual Studio Code
Make sure you have newest Node.js, Typescript installed 
Run - npm i

Specific versions of packages are listed in package.json

Use Android Studio to emulate android system.

If you want to run a platform specific version of app:
- npm run android
- npm run ios

In order to see current version of the app: 
1. Install 'expo go' app on your phone / set-up Android Studio emulator
2. 'npm start' from the SafeTrail project directory
3. Scan the QR code*
4. Have fun seeing the changes :) press R on terminal in case of changes not updating

Ctrl+C to terminate.

3* - You don't have to scan it on emulator, on iOS systems you have to open your camera app instead of built-in camera 

---

Current Project Structure:

src - All the project files that may require changes


assets - Images and other data. May require further division into subdirectories.

components - js files used to create UI

screens - Directory with screens :) 

i18n - Translations

constants.js - in this file, we are keeping constants used throughout the system, in the future also types

organisms - "Big templates" created from molecules and atoms

molecules - Elements used to build screens, header/forms/input sets. Made of atoms

atoms - The smallest, reusable elements
