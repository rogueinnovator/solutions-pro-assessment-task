**Solution Lab React Assessment Task**  
**Project Overview**

This project is a React-based UI implementation for a Solution Lab assessment task, built using modern frontend technologies like **Vite**, **React**, **Tailwind CSS**, and **Lucide React Icons**. The task involved creating a responsive card component with custom fonts, dynamic styling, and proper layout structuring.

| **Technology**       | **Purpose**                                      |
|-----------------------|--------------------------------------------------|
| **React**            | Frontend UI library                              |
| **Vite**             | Fast build tool for React                        |
| **Tailwind CSS**     | Utility-first CSS framework                      |
| **Lucide React**     | Icon library for React                           |
| **Google Fonts**     | Custom font integration (**Abhaya Libre**, **Poppins**, **Roboto**) |
| **Sensation Light**  | Commercial font located in the `assets/fonts` directory |
| **TypeScript**       | Static type checking                             |

🚀 **Features Implemented**

✅ **Custom Font Integration**

  - Used **Google Fonts** (**Abhaya Libre**, **Poppins**, **Roboto**, **Sensation Light**)

✅ **Responsive Card Component**

  - Dynamic text styling (**font-abhaya**, **font-sansation-light**)  
  - Border and hover effects (**border-fuchsia-300**)

✅ **Icon Integration (Lucide React)**

  - Used icons like **Edit2Icon**, **Trash2Icon**, **XIcon**

✅ **TypeScript Support**

  - Strict typing for props and state

✅ **Image Lazy Loading**

  - Added lazy loading feature to images using the `loading="lazy"` attribute for improved performance and faster page load times.

✅ **Vite Optimized Build**

  - Fast **HMR (Hot Module Replacement)**  
  - Optimized production build

🔧 **Setup & Installation**

1. **Clone the repository**:  
  ```bash
  git clone https://github.com:rogueinnovator/solutions-pro-assessment-task.git 
  cd solutions-pro-assessment-task
  ```

2. **Install dependencies**:  
  ```bash
  npm install
  ```

3. **Run the development server**:  
  ```bash
  npm run dev
  ```

4. **Build for production**:  
  ```bash
  npm run build
  ```

5. **Preview production build**:  
  ```bash
  npm run preview
  ```

📌 **Key Challenges & Solutions**

| **Challenge**                  | **Solution**                                      |
|--------------------------------|--------------------------------------------------|
| **Google Fonts not loading**   | Corrected `fontFamily` name in the configuration. |
| **Tailwind classes not applying** | Ensured proper `content` paths in the Tailwind config file. |
| **Responsive design issues**   | Used fixed dimensions combined with relative positioning for better layout. |
| **TypeScript type errors**     | Defined appropriate interfaces and types for props and state. |
