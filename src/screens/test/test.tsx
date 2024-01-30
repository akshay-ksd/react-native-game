import { View, Text, FlatList, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
const Test = () => { 
  const [resData,setReData] = useState([])
  const AllData = useRef([])
  useEffect(()=>{
    getData()
  },[])

  const getData=()=> {
   axios.get("https://countriesnow.space/api/v0.1/countries/capital").then((res)=>{
    if(res.data?.data.length){
        setReData(res.data?.data)
        AllData.current = res.data?.data
    }
   })
  }

  const renderItem =({item,index}:any)=>{
        return(
            <View style={{width:"100%",height:50,backgroundColor:"#f2f2f2",alignItems:"center",justifyContent:"center"}}>
                <Text>{item?.name}</Text>
            </View>
        )
  }

  const searchPlace =(t:string)=>{
    if(t.length !== 0){
        let filteredData = resData.filter((item:any)=>item.name.includes(t))
        setReData(filteredData)
    }else{
        setReData(AllData.current) 
    }
    
  }
  return (
    <View style={{flex:1}}>
      <View style={{width:"100%",height:50,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
         <TextInput placeholder='Search Place' onChangeText={searchPlace} style={{width:"50%",borderWidth:1,height:40}}/>
      </View>
      <FlatList data={resData}
                renderItem={renderItem}/>
    </View>
  )
}

export default Test