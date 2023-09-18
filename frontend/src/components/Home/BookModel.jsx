import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const BookModel = ({book, onclose}) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center"
      onClick={onclose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onclose}
        />

        <h2 className="w-fit px-3 py-0 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.BookName}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.BookAuthor}</h2>
        </div>
        <p className="mt-4">AnyThing You want to show</p>
        <p className="my-2">
          The Power of Your Subconscious Mind, one of the most beloved and
          bestselling inspirational guides of all time, shows how changing your
          thought patterns can produce dramatic improvements in your life. Using
          practical, easy-to-understand techniques and real-world case studies,
          Dr. Joseph Murphy reveals the vast influences of the subconscious mind
          on all aspects of existence-money, relationships, jobs, happiness-and
          how you can apply and direct its power to achieve your goals and
          dreams.
        </p>
      </div>
    </div>
  );
};

export default BookModel;
