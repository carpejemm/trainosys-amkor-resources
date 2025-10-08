import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

type EditBookScreenProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const EditBookScreen = ({ modalVisible, setModalVisible }: EditBookScreenProps) => {
  const [bookTitle, setBookTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [coverURL, setCoverURL] = useState("");
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"rgba(0,0,0,0.5)"}}>
      <View style={{width:"90%", backgroundColor:"#fff", borderRadius:10, padding:20}}>
        <Text style={{fontSize:18, fontWeight:"bold", marginBottom:10}}>Edit Book</Text>
        {/* Add form fields for editing book details here */}
        <TextInput placeholder="Book Title" style={{borderBottomWidth:1, borderBottomColor:"#ccc", marginBottom:10}} onChangeText={(text) => setBookTitle(text)} />
        <TextInput placeholder="Author Name" style={{borderBottomWidth:1, borderBottomColor:"#ccc", marginBottom:10}} onChangeText={(text) => setAuthorName(text)} />
        <TextInput placeholder="Book Price" style={{borderBottomWidth:1, borderBottomColor:"#ccc", marginBottom:10}} onChangeText={(text) => setBookPrice(text)} />
        <TextInput placeholder="Cover URL" style={{borderBottomWidth:1, borderBottomColor:"#ccc", marginBottom:10}} onChangeText={(text) => setCoverURL(text)} />


        <TouchableOpacity style={{marginTop:20, backgroundColor:"#25a", padding:10, borderRadius:5, alignItems:"center"}} onPress={() => setModalVisible(!modalVisible)} disabled={false}>
          <Text style={{color:"#fff", fontWeight:"bold"}} >Save Changes</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

export default EditBookScreen;