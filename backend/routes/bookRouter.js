import  express  from "express"
import bookModel from "../models/BookStore.js"


const router = express.Router();
//route method to add the newbook to the database
router.post("/", async (req, res) => {

    const { bookname, bookauthor, publishyear } = req.body;

    try {

        if (!bookname || !bookauthor || !publishyear) {
            return res.status(400).send({ message: "fill all the required fields" });
        } else {

            const newBook = {
                BookName: bookname,
                BookAuthor: bookauthor,
                publishYear: publishyear
            }

            const book = await bookModel.create(newBook);
            return res.status(201).send(book);

        }

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });

    }
});

// route method to get all books from database
router.get("/", async (req, res) => {

    try {
        const allBooks = await bookModel.find({});
        return res.status(200).json({ count: allBooks.length, books: allBooks });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
});

// route method to get one book by id from database
router.get("/:bookId", async (req, res) => {

    try {
        const id = req.params.bookId;
        const book = await bookModel.findById({ _id: id });
        return res.status(200).json({ book });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
});

//route method to find and update the book
router.put("/:bookId", async (req, res) => {

    const { bookname, bookauthor, publishyear } = req.body;

    try {
        if (!bookname || !bookauthor || !publishyear) {
            return res.status(400).send({ message: "fill all the required fields" });
        } else {
            const id = req.params.bookId;
            const result = await bookModel.findByIdAndUpdate(id, {
                $set: {
                    BookName: bookname,
                    BookAuthor: bookauthor,
                    publishYear: publishyear
                }
            });
            if (!result) {
                return res.status(404).json({ message: "Book Not Found" });
            } else {
                return res.status(200).send({ message: "Book Updated Successfully" });
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
});

//route method to delete the book by Id
router.delete("/:bookId", async (req, res) => {

    const id = req.params.bookId;
    try {
        const result = await bookModel.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send({ message: "Book Not Found" });
        } else {
            return res.status(200).send({ message: "Book successfully Deleted" });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
});

export default router;


