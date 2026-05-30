export const loadPatternImages = () => {
   const modules = import.meta.glob("../../asset/**/*.jpg", {
     eager: true,
   });
 
   const imagesByCategory = {};
 
   Object.entries(modules).forEach(([path, module]) => {
     const url = module.default;
 
     // ambil nama folder
     const parts = path.split("/");
 
     const folderName = parts[parts.length - 2];
 
     if (!imagesByCategory[folderName]) {
       imagesByCategory[folderName] = [];
     }
 
     imagesByCategory[folderName].push(url);
   });
 
   console.log(imagesByCategory);
 
   return imagesByCategory;
 };