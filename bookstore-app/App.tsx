import { use, useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button, FlatList, Image, Alert } from 'react-native';
import BookCard from './src/components/BookCard';

import { getBooks, deleteBookByID, createBook, updateBookById } from './src/api/http';

type Book = {
  id: string;
  book_title: string;
  name_of_author: string;
  price_of_book: string;
  cover: string;
};
interface GetBooksParams {
  onSuccess: (books: Book[]) => void;
  onError: (error: unknown) => void;
}
export default function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getListOfBooks = () => {
    setIsLoading(true);
    getBooks(
      (books: Book[]) => {
        setBooks(books);
        setIsLoading(false);
      },
      (error: unknown) => {
        console.error('Error fetching books:', error);
      }
    )
  }

  const onDeleteItem = (item: any) => {
    console.log(item.id);
    deleteBookByID(item.id);
    getListOfBooks();
  };

  const onEdit = (id: string) => {
    updateBookById(id,{
      id: id,
      book_title: "Updated Book Title",
      name_of_author: "Updated Author",
      price_of_book: "99.99",
      cover: "https://via.placeholder.com/150"
    })
    .then(() => {
      Alert.alert("Book Updated Successfully");
      getListOfBooks();
    })
    .catch((error) => {
      console.error('Error updating book:', error);
    });
  }

  useEffect(() => {
    getListOfBooks();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Books:</Text>
      <FlatList 
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard
            id={item.id} 
            authorName={item.name_of_author}
            bookTitle={item.book_title}
            bookPrice={item.price_of_book}
            bookCover={item.cover}
            onDeleteItem={() => onDeleteItem(item)}
            onEdit={() => (onEdit(item.id))}
          />
        )}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
  },
  button: { 
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
