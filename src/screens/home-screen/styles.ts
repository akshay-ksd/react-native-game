
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"flex-end",
  },
  road:{
    width:"100%",
    height:80,
    backgroundColor:"#5F5F5F",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
    transform:[{rotateX:"70deg"}],
    position:"absolute",
    top:"40%"
  },
  lines:{
    width:30,
    height:2,
    backgroundColor:"white",
  },
  river:{
    width:"100%",
    height:"20%"
  },
  bg:{
    width:"100%",
    top:"10%"
  },
  path:{
    position:"absolute",
    width:"100%",
    bottom:0,
    alignItems:"center"
  },
  header:{
    width:"100%",
    height:100,
    position:"absolute",
    top:0,
    alignItems:"center",
    justifyContent:"center",
    zIndex:200000000000
  }
});

export default styles;
