import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "./BackButton";
import Spinner from "./Spinner";

const ShowBook = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  //  Get the userId param from the URL.
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((response) => {
        console.log(response.data.book);
        setBook(response.data.book);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{book.BookName}</span>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Author</span>
              <span>{book.BookAuthor}</span>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Published</span>
                <span>{book.publishYear}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Created On</span>
                <span>{new Date(book.createdAt).toString()}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Last Update</span>
                <span>{new Date(book.updatedAt).toString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
