import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { updateBookById } from '../src/api/http';

type EditBookScreenProps = {  
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};
// @ts-ignore
const EditBookScreen = ({ id, title, author, price, img, modalVisible, setModalVisible }: EditBookScreenProps) => {
  const [bookTitle, setBookTitle] = useState(title);
  const [authorName, setAuthorName] = useState(author);
  const [bookPrice, setBookPrice] = useState(price);
  const [coverURL, setCoverURL] = useState(img);

  // const [bookObject, setBookObject] = useState({
  //   id: id,
  //   book_title: title,
  //   name_of_author: author,
  //   price_of_book: price,
  //   cover: img
  // });

  // console.log(bookTitle, authorName, bookPrice, coverURL);

  const handleSaveChanges = async () => {
    try {
      await updateBookById(id, {
        book_title: bookTitle,
        name_of_author: authorName,
        price_of_book: bookPrice,
        cover: coverURL
      });
      // Optionally, you can show a success message or update the UI

      setModalVisible(false);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"rgba(0,0,0,0.5)"}}>
      <View style={{width:"90%", backgroundColor:"#fff", borderRadius:10, padding:20}}>
        <Text style={{fontSize:18, fontWeight:"bold", marginBottom:10}}>Edit Book</Text>
        {/* Add form fields for editing book details here */}
        <TextInput value={bookTitle} placeholder="Book Title" style={{borderBottomWidth:1, borderBottomColor:"#ccc", marginBottom:10}} onChangeText={(text: string) => setBookTitle(text)} />
        <TextInput value={authorName} placeholder="Author Name" style={{borderBottomWidth:1, borderBottomColor:"#ccc", marginBottom:10}} onChangeText={(text: string) => setAuthorName(text)} />
        <TextInput value={bookPrice} placeholder="Book Price" style={{borderBottomWidth:1, borderBottomColor:"#ccc", marginBottom:10}} onChangeText={(text: string) => setBookPrice(text)} />
        <TextInput value={coverURL} placeholder="Cover URL" style={{borderBottomWidth:1, borderBottomColor:"#ccc", marginBottom:10}} onChangeText={(text: string) => setCoverURL(text)} />


        <TouchableOpacity style={{marginTop:20, backgroundColor:"#25a", padding:10, borderRadius:5, alignItems:"center"}} onPress={handleSaveChanges} disabled={false}>
          <Text style={{color:"#fff", fontWeight:"bold"}} >Save Changes</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

export default EditBookScreen;