import moment from "moment";

const fileFormat = (url="") => {
    const fileExt = url.split(".").pop();

    if(fileExt === "mp4" || fileExt === "webm" || fileExt === "ogg")
        return "video";
    if(fileExt === "mp3" || fileExt === "wav")
        return "audio";
    if(fileExt === "png" || fileExt === "jpg" || fileExt === "jpeg" || fileExt === "gif")
        return "image";

    return "file"
}
const TransformImage = (url = "", width= 200) => url;

const getLast7Days = () => {
   const currentDate = moment();
   const Last7Days  = [];

   for(let i = 0; i<7; i++){
    const dayDate = currentDate.clone().subtract(i, "days");
    const dayName = dayDate.format("dddd");

    Last7Days.unshift(dayName);
   }

   return Last7Days;
};

export {fileFormat, TransformImage, getLast7Days}