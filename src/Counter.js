import { TextInput, View, StyleSheet ,Button, FlatList,Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem, editItem } from './store/action';

const App = ({ app_list, addItem, deleteItem, editItem }) => {
  const [task, setTask] = useState('');
  const [isEditableVisible,setEditableVisible]=useState(false);
  const intialvalue=[{id:'',task:''}]
  const [editTask,setEditTask]=useState('');
  const [editId,setEditId]=useState(0);

  const AddItem = () => {
    
    if(task==''){
    alert('Should Contain Some Value')
    }
    else{
      console.log(task)
      addItem(task)
    }
    setTask('')
  }

  const DeleteItem = (id,task) => {
    //console.log(id)
    alert('Deleted task is ' + task)
    deleteItem(id)
  }

  const EditItem =()=>{
    setEditableVisible(false)
    alert(editId + editTask)
    editItem(editId,editTask)
    
  }
  
    const openEdit=(Id,editValue)=>{
     console.log('data  ->  '+editValue)
     setEditId(Id);
     setEditTask(editValue);
      console.log('ID  -> ' +Id);
      setEditableVisible(true);
    }

  const renderingItem=({item})=>{
    //console.log(item.task)
    return(
      <View style={styles.mainContainer}>

        <View style={styles.taskContainer}>

         
        <TouchableOpacity onPress={()=>openEdit(data.id,data.task)}>
             <Text style={styles.edit}>Edit</Text>
         </TouchableOpacity>

         {/* <Button title ='ADD' onPress={()=>EditItem()}>
                    Add Task
                  </Button> */}
                  <TouchableOpacity style={styles.cancel} onPress={()=>setEditableVisible(false)}>
                  <Text style={{color:'red'}}> Cancel </Text>
                  </TouchableOpacity>




          <Text style={styles.taskTitle}> # DETAIL'S</Text>


          <View style={styles.taskTextContainer}>
              <Text style={styles.taskText}>{item.task}</Text>
              <TouchableOpacity onPress={()=>DeleteItem(item.id,item.task)}>
                <Text style={styles.deleteText}>DELETE</Text>
              </TouchableOpacity>
          </View>

        </View>


      </View>
      )
  }

  return(
    <View style={styles.container}>
      <TextInput
      underlineColorAndroid='black'
      placeholder='ADD-DETAIL'
      value={task}
      label='TASk'
      onChangeText={task => setTask(task)}
      />

      <Button title ='ADD' onPress={AddItem}>
        Add Task
      </Button>

      <FlatList
      data={app_list} 
      renderItem={renderingItem}
      />

    </View>
  )
  
}


const styles = StyleSheet.create({
  container:{
    padding:50,
    backgroundColor:'pink'
    
  },
  mainContainer:{
    elevation:7,
    backgroundColor:'white',
    // paddingLeft:3,
    paddingRight:20,
    backgroundColor:'pink'
  },
  taskContainer:{
    padding:10,
    margin:10,
    height:100,
    elevation:5,
    backgroundColor:'white',
    flexDirection:'column',
    borderRadius:10,
  },
  taskTitle:{
    fontSize:20,
    paddingBottom:10,
  },
  taskTextContainer:{
    flexDirection:'row',
    paddingLeft:10,
  },
  taskText:{
    width:200,
    fontSize:18,

  },
  deleteText:{
    color:'red',
    fontWeight:'bold',
    fontSize:13
  },
  edit:{
      paddingLeft:220,
      marginBottom:2,
      color:'blue'
  }

 
});
const mapStateToProps = (state) => {
  return {
    app_list: state.app_list,
  }
}

const mapDispatchToProps = { addItem, deleteItem, editItem }

export default connect(  mapStateToProps, mapDispatchToProps )(App)
 
  
