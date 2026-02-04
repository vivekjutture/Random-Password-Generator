# 🔐 Random Password Generator

A modern, high-performance password generator built with React and Vite. Create secure, customizable passwords with an intuitive interface, real-time generation, and one-click clipboard copying.

![React](https://img.shields.io/badge/React-19.2.0-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38b2ac?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## Overview

A lightweight, responsive password generator that prioritizes security, performance, and user experience. Built as a learning project to demonstrate modern React patterns and web security best practices.

## 🚀 Live Demo

**Try it now:** https://vivekjutture.github.io/Random-Password-Generator

## ✨ Key Features

- **Customizable Length**: Generate passwords between 8 and 50 characters
- **Flexible Character Sets**: Toggle numbers and special characters independently
- **Instant Copy**: One-click clipboard copying with visual feedback
- **Real-time Generation**: Auto-generates passwords as you adjust settings
- **Cryptographically Secure**: Uses Web Crypto API (`crypto.getRandomValues()`)
- **Optimized Performance**: Fisher-Yates shuffle algorithm with React Hook optimization
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Clean UX**: Intuitive controls with immediate visual feedback

## 🚀 Quick Start

### Prerequisites

- Node.js 14+
- npm

### Project Setup

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/Random-Password-Generator.git

   ```

2. Navigate to the project directory

   ```bash
   cd Random-Password-Generator
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the development server

   ```bash
   npm run dev
   ```

## 📋 Usage

1. **Adjust Length**: Use the slider to set password length (8-50 characters)
2. **Include Numbers**: Check "Numbers" to add digits (0-9)
3. **Include Special Characters**: Check "Characters" to add symbols (!@#$%^&\*~?;)
4. **Copy Password**: Click "Copy" button to copy to clipboard
5. **Instant Feedback**: Button changes to "Copied✔️" for 1 second

## 🏗️ Technical Architecture

### State Management

The app uses React's built-in hooks for state management:

```jsx
- length: Password length (8-50)
- numberAllowed: Boolean toggle for numbers
- specialCharsAllowed: Boolean toggle for special characters
- password: Current generated password
- copied: Copy button feedback state
```

### Core Algorithms

**Password Generation Process**:

1. Build character set from user selections
2. Shuffle the pool using Fisher-Yates algorithm
3. Randomly select characters from shuffled pool
4. Return generated password

**Fisher-Yates Shuffle**:

```jsx
for (let i = arr.length - 1; i > 0; i--) {
  const rand = crypto.getRandomValues(new Uint32Array(1))[0];
  const j = rand % (i + 1);
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
```

Uses cryptographically secure randomness for uniform distribution.

### Performance Optimizations

- **`useCallback`** hooks prevent unnecessary function recreations
- **`useRef`** for efficient DOM element selection and manipulation
- **Dependency arrays** ensure re-renders only when values change
- **Memoized generation** prevents redundant password calculations

```jsx
const generatePassword = useCallback(() => {
  // Only recreates when dependencies change
}, [length, numberAllowed, specialCharsAllowed, setPassword]);

useEffect(
  () => generatePassword(),
  [length, numberAllowed, specialCharsAllowed, generatePassword],
);
```

## 📁 Project Structure

```bash
Random-Password-Generator/
├── src/
│   ├── App.jsx           # Main component with password logic
│   ├── main.jsx          # React entry point
│   └── index.css         # Tailwind CSS configuration
├── public/               # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
```

## 🔒 Security Features

- **Client-Side Generation**: All processing happens in the browser—no server communication
- **Cryptographic Randomness**: Uses Web Crypto API for true random values
- **No Data Storage**: Passwords are never logged, stored, or persisted
- **No External Dependencies**: Minimal attack surface
- **XSS Protection**: React's built-in JSX escaping prevents injection attacks

## 🎨 Technology Stack

| Technology   | Purpose                 | Version |
| ------------ | ----------------------- | ------- |
| React        | UI Framework            | 19.2.0  |
| Vite         | Build Tool & Dev Server | 7.2.4   |
| Tailwind CSS | Styling                 | 4.1.18  |
| ESLint       | Code Quality            | 9.39.1  |

## 🎯 Code Quality Highlights

- **Zero Dependencies**: Minimal third-party packages (only React, Tailwind)
- **React Best Practices**: Proper hook dependencies and closure handling
- **Semantic HTML**: Accessible form controls and labels
- **Performance-First**: Optimized for fast generation and smooth UI
- **Maintainable Code**: Clear variable names and logical structure

## 🚀 Future Enhancements

- [ ] Password strength meter with ZXCVBN scoring
- [ ] Custom character set builder
- [ ] Exclude similar characters mode (l/1, O/0, etc.)
- [ ] Theme toggle (dark/light mode)
- [ ] Batch password generation
- [ ] Password export to CSV/JSON
- [ ] Keyboard shortcuts for accessibility

## 🤝 Contributing

Contributions welcome! The project is structured for easy extension:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a Pull Request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.
