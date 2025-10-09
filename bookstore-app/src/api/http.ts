import axios from "axios";
import { Alert } from "react-native";

// const ENDPOINT_URL = 'https://68e5b0ae21dd31f22cc29578.mockapi.io/books';

const apiClient = axios.create({
  baseURL: "https://68e5b0ae21dd31f22cc29578.mockapi.io/books",
});

type Book = {
  id?: string;
  book_title: string;
  name_of_author: string;
  price_of_book: string;
  cover: string;
  email_of_seller?: string; // Optional field
};

export const getBooks = async (onSuccess: (books: Book[]) => void, onError: (error: any) => void) => {
  try {
    const response = await apiClient.get("/");
    onSuccess(response.data);
  } catch (error) {
    onError(error);
  }
};

// export const getBookById = async () => {
//   try {
//     const response = await apiClient.get(`/${id}`);
//     onSuccess(response.data);
//   } catch (error) {
//     onError(error);
//   }
// };

export const createBook = async (book: Book) => {
  const response = await apiClient.post("/", book);
  return response.data;
};

export const updateBookById = async (id: string, updatedBook: Book) => {
  const response = await apiClient.put(`/${id}`, updatedBook);
  return response.data;
};

export const deleteBookByID = async(itemID: any) => {
  try {
    const response = await apiClient.delete(`/${itemID}`)
    Alert.alert("Book Is Deleted Successfully")
  } catch (error) {
    console.log(error)
  }
}

// const getListOfBooks = async () => {
//     try {
//       const response = await axios.get(ENDPOINT_URL);
//       console.log(JSON.stringify(response.data, null, 2));
//       setBooks(response.data);
//     } catch (error) {
//       console.error('Error fetching books:', error);
//     }
//   };

//   const getBookById = async (id: string) => {
//     try {
//       const response = await axios.get(`${ENDPOINT_URL}/${id}`);
//       console.log(JSON.stringify(response.data, null, 2));
//       // Handle the book data as needed
//       setSingleBook(response.data);
//     } catch (error) {
//       console.error('Error fetching book by ID:', error);
//     }
//   };

//   const deleteBookById = async (id: string) => {
//     try {
//       await axios.delete(`${ENDPOINT_URL}/${id}`);
//       Alert.alert('Success', `Book with ID ${id} deleted.`);
//       // Optionally, refresh the list of books
//       getListOfBooks();
//     } catch (error) {
//       console.error('Error deleting book by ID:', error);
//     }
//   };

//   const createBook = async () => {

//     const newBookWithId = {
//       book_title: 'New Book Title',
//       name_of_author: 'Author Name',
//       price_of_book: '19.99',
//       cover: 'https://static.vecteezy.com/system/resources/thumbnails/047/493/988/small/hairy-fluffy-cat-playing-png.png',
//       email_of_seller: 'author@example.com',
//       id: (Math.floor(Math.random() * 10000)).toString(), // Generate a random ID
//     }

//     try {
//       const response = await axios.post(ENDPOINT_URL, newBookWithId);
//       // Optionally, refresh the list of books
//       getListOfBooks();
//     } catch (error) {
//       console.error('Error creating book:', error);
//     }
//   };

//   const updateBookById = async (id: string, updatedData: Partial<Book>) => {
//     try {
//       await axios.put(`${ENDPOINT_URL}/${id}`, updatedData);
//       // Optionally, refresh the list of books
//       getListOfBooks();
//     } catch (error) {
//       console.error('Error updating book by ID:', error);
//     }
//   }