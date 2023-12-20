
const upload_precet = import.meta.env.VITE_UPLOAD_PRECET
const cloud_name = import.meta.env.VITE_CLOUD_NAME;

const uploadImageToCloudinary = async file => {
    const uploadData = new FormData();
    uploadData.append('file' , file)
    uploadData.append('upload_precet' , upload_precet)
    uploadData.append("cloud-name", cloud_name);


    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: "post",
        body: uploadData,
      }
    );

    const data = await res.json();

    return data


}

export default uploadImageToCloudinary