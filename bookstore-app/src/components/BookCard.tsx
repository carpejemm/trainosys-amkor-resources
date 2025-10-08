import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Platform, TouchableOpacity, Modal } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import EditBookScreen from "../../screens/EditBookScreen";

type BookCardProps = {
  id: string;
  authorName: string;
  bookTitle: string;
  bookPrice: number | string;
  bookCover: string;
  onDeleteItem: (id: string) => void;
  onEdit: (id: string) => void;
};

const BookCard = ({ id, authorName, bookTitle, bookPrice, bookCover, onDeleteItem, onEdit }: BookCardProps) => {

  const [modalVisible, setModalVisible] = useState(false);

  const onHandleEditButton = () => {
    setModalVisible(true);
    // onEdit(id);
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: bookCover }}
        style={styles.coverImage}
      />  
      <View style={styles.detailsContainer}>
        <Text style={styles.bookName}>{bookTitle}</Text>
        <Text style={styles.authorName}>{authorName}</Text>
        <Text style={styles.price}>${bookPrice}</Text>
      </View>

      {/* Delete And Edit Buttons */}
        <View style={styles.delEditContainer}>
            <TouchableOpacity style={styles.circleButton}>
                <MaterialIcons name="delete-outline" size={20} color="red" onPress={() => onDeleteItem(id)}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleButton} >
                {/* <AntDesign name="edit" size={20} color="#25a" onPress={() => onEdit(id)} /> */}
                <AntDesign name="edit" size={20} color="#25a" onPress={onHandleEditButton} />
            </TouchableOpacity>
        </View>

      {/* {Add modal for Edit Book} */}
      <Modal visible={modalVisible} animationType="slide" transparent={true} >
        <EditBookScreen modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding:10,
        shadowColor:"#000",
        shadowOffset:{width:0, height:2},
        shadowOpacity: .1,
        shadowRadius:4,
        elevation: 3,
        margin:10
    },
    coverImage:{
        height: 120,
        width:"25%",
        borderRadius: 8,
        resizeMode:"stretch"
    },
    detailsContainer:{
        flex:1,
        marginHorizontal: 10,
        marginTop:10
    },
    bookName:{
        fontSize: 16,
        fontWeight:"bold",
        color:"#000"
    },
    authorName:{
        fontSize: 14,
        color:"#888",
        marginVertical: 3
    },
    price:{
        fontSize: 16,
        fontWeight:"bold",
        color:"#25a"
    },
    delEditContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    circleButton:{
        height:35,
        width:35,
        borderRadius: 20,
        backgroundColor: "#eee",
        justifyContent:"center",
        alignItems:"center",
        marginStart: 10
    }
})

export default BookCard;