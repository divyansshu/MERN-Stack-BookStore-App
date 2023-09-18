import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import BackButton from "./BackButton";
import Spinner from "./Spinner";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [bookname, setBookName] = useState("");
  const [bookauthor, setAuthor] = useState("");
  const [publishyear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
   const {enqueueSnackbar} = useSnackbar();
  const handleSaveBook = () => {
    const data = {
      bookname,
      bookauthor,
      publishyear,
    };
    setLoading(true);
    axios
      .post("http://localhost:3000/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully", {variant: "success"});
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error happend. Please check Console");
        enqueueSnackbar("Error", {variant: 'error'});
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={bookname}
            onChange={(e) => setBookName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={bookauthor}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Published Year</label>
          <input
            type="text"
            value={publishyear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>Save</button>

      </div>
    </div>
  );
};

export default CreateBook;