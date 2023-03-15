import aspectRatio from "windicss/plugin/aspect-ratio";

export default {
  darkMode: "class",
  plugins: [aspectRatio],
  shortcuts: {
    link: "text-sky-700 inline-block relative z-1 after:(inline-block content-DEFAULT bg-yellow-200 h-2 absolute -left-2 -right-2 bottom-0 -z-1 transition-transform transform scale-x-0 origin-right) hover:after:origin-left hover:after:scale-x-100 dark:(text-sky-300) dark:after:(bg-purple-800) transition-colors"
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      }
    }
  }
};
