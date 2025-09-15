// src/hooks/useSEO.jsx
import { useEffect } from "react";

export const useSEO = ({ title, description }) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let meta = document.querySelector("meta[name='description']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [title, description]);
};

// Example usage:
// import { useSEO } from "src/hooks/useSEO";
// const Component = () => {
//   useSEO({
//     title: "My Title",
//     description: "My Description",
//   });
//   return <div>Hello World</div>;
// };