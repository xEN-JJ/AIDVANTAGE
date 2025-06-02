# Aidvantage Mobile Application

## Overview

Aidvantage is a mobile application designed to streamline the process of applying for and managing municipal assistance programs. Developed for the City Social Welfare Development Office, it provides residents with a convenient and transparent platform to access various aid services, including medical and educational assistance. The app aims to empower users by giving them "The Upper Hand in Hard Times" through easy access to crucial support.

## Features

This application offers a comprehensive suite of features to enhance the user experience and simplify the assistance application process:

### 1. User Authentication & Profile Management

* **Welcome & Login Screen:**
  
    The initial entry point allows users to log in or sign up, providing a clean and intuitive start to their journey.

* **Login Interface:**

    Secure login with email and password, including a "Forgot Password" option for convenience.

* **Profile Creation - Personal Information:**

    New users complete a multi-step profile creation process, starting with essential personal details like name, gender, and address.

* **Profile Creation - Demographic Details:**

    Further demographic information such as birth date, place of birth, civil status, educational attainment, and occupation are collected to tailor assistance options.

* **Profile Creation - Account Credentials:**

    Users set their email and password for their new account, ensuring secure access to the app's features.

* **User Profile View:**

    A dedicated profile section allows users to review their basic information at a glance.

* **Edit Profile Functionality:**

    Users can easily edit and update their profile details, ensuring their information remains accurate.

* **Change Profile Picture:**
 
    Options to change the profile picture directly from the camera or gallery.

### 2. Assistance Program Discovery

* **Home Dashboard:**

    The personalized home screen welcomes the user and displays available assistance programs, such as Medical and Educational Assistance. A search bar and filter icon provide easy navigation.

* **Medical Assistance Program Details (Part 1):**

    Detailed information about specific programs, including objectives and the role of the City Social Welfare Development Office.

* **Medical Assistance Program Details (Part 2 - Eligibility & Requirements):**

    Clear outlines of eligibility criteria and the list of required documents for the application.

### 3. Application Process

* **Application Form - Personal Information (1/3):**

    A multi-step application form, starting with personal details and type of assistance.

* **Application Form - Family Composition (2/3):**

    Easy addition of family members to the application, crucial for comprehensive assistance.

* **Application Form - Document Submission (3/3):**

    The final step for submitting required documents, with clear placeholders for each type (e.g., Valid ID, Medical Abstract, Final Hospital Bill).

### 4. Application Tracking & Status Updates

* **Application List:**

    A centralized view of all submitted applications with their respective statuses: `pending`, `declined`, or `approved`.

* **Application Details - Pending:**

    Detailed view of a pending application, with a clear message indicating staff validation. Submitted documents are also displayed.

* **Application Details - Declined:**

    Provides specific remarks when an application is declined, guiding the user on necessary corrections for resubmission. Highlights the problematic document.

* **Application Details - Approved:**

    Clearly outlines the "Next Steps" for approved applications, guiding users through the final stages of receiving assistance.

## Technology Stack

* **Frontend:** React Native, Nativewind, TailwindCSS
* **Frameworks & Tools:** Expo, Expo Router
* **Language:** JavaScript

## Dependencies

### Runtime Dependencies

These packages are required to run the application:

- `@react-native-picker/picker: 2.11.0` – Picker dropdown for forms.
- `axios: ^1.9.0` – For making API requests.
- `expo: ^53.0.9` – Core framework for running React Native apps.
- `expo-constants: ~17.1.6` – Access app constants.
- `expo-document-picker: ~13.1.5` – Enables document uploads.
- `expo-image-picker: ~16.1.4` – Allows image selection from camera or gallery.
- `expo-linking: ~7.1.4` – Handle deep linking within the app.
- `expo-router: ~5.0.7` – File-based routing system.
- `expo-status-bar: ~2.2.3` – Manage status bar styling.
- `expo-updates: ~0.28.13` – Over-the-air update support.
- `expo-linear-gradient: ~14.1.4` – Gradient background support.
- `nativewind: ^4.1.23` – Tailwind CSS integration for React Native.
- `prettier: ^3.5.3` – Code formatting.
- `react: 19.0.0` – Core React framework.
- `react-dom: 19.0.0` – React DOM bindings (for web).
- `react-native: 0.79.2` – Core library for building mobile apps.
- `react-native-collapsible: ^1.6.2` – Expand/collapse UI component.
- `react-native-dropdown-picker: ^5.4.6` – Custom dropdown UI.
- `react-native-progress: ^5.0.1` – Visual progress bars.
- `react-native-radio-buttons-group: ^3.1.0` – Grouped radio buttons.
- `react-native-reanimated: ~3.17.4` – Enhanced animations.
- `react-native-safe-area-context: 5.4.0` – Handles safe area layout.
- `react-native-screens: ~4.10.0` – Native screen transitions.
- `react-native-web: ^0.20.0` – Web compatibility for React Native.
- `tailwindcss: ^3.4.17` – Utility-first CSS framework.
- `twrnc: ^4.8.0` – Tailwind Runtime for Native Components.
- `typescript: ~5.8.3` – Typed JavaScript for better reliability.

### Development Dependencies

These tools are used for development, linting, and type-checking:

- `@babel/core: ^7.20.0` – JavaScript compiler.
- `@types/react: ~19.0.10` – Type definitions for React.
- `eslint: ^8.57.1` – Code quality checker.
- `eslint-config-expo: ~9.2.0` – Expo ESLint presets.
- `eslint-config-prettier: ^10.1.5` – Turns off conflicting ESLint rules.
- `eslint-plugin-prettier: ^5.4.0` – Integrates Prettier with ESLint.
- `typescript: ~5.8.3` – Language for type-safe JavaScript.

## Installation & Setup

> Make sure Node.js, npm/yarn, and Expo CLI are installed before starting.

1. **Clone the repository:**
    ```bash
    git clone https://github.com/xEN-JJ/AIDVANTAGE.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd Aidvantage
    ```

3. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

4. **Run the application:**
    ```bash
    npx expo start        # Launches Expo dev server
    npx react-native run-android   # For Android devices
    npx react-native run-ios       # For iOS (requires macOS and Xcode)
    ```

## Contributors

This mobile application was developed by the following students as part of a ADET (Applications Development and Emerging Tech) Final Project.

- **John Joseph P. Asoro**
- **Jovel B. Portuguez**
- **Weneilyn B. Paronda**
- **Graham Russell A.Gonzales**

**ADET Project Title:** Aidvantage – The Upper Hand in Hard Times  
**Institution:** University of Nueva Caceres
**Academic Year:** 2024–2025
