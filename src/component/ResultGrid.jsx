import React, { useEffect } from 'react'
import {fetchPhoto,fetchVideo}
import { useDispatch, useSelector } from 'react-redux'
import {setLoading, setQuery,setError,setResult}
import { ResultCard } from './ResultCard'

export const ResultGrid = () => {
 const{query,result,loading,error,activeTab}= useSelector((store)=>store.search)
  const dispatch=useDispatch()
  useEffect(function(){
    if(!query)return
    const getData= async() => {
      let data =[]
      try{
        dispatch(setLoading())
             if(activeTab=='photo'){
        let response = await fetchPhoto(query)
        data= response.result.map((item)=>({
          id:item.id,
          type:'photo',
          title:item.alt_description,
          thumbnail:item.url.small,
          src:item.url.full
        }))
      }
      if(activeTab=='video'){
        let response = await fetchVideo(query)
        data= response.video.map((item)=>({
          id:item.id,
          type:'video',
          title:item.user.name,|| 'video',
          thumbnail:item.url.small,
          src:item.url.full
        }))
      }
      dispatch(setResult(data))
      } catch (err){
        dispatch(setError(err.message))
      }
    }
    getData()
  }, [query,activeTab])

   if (error) return <h1>Error</h1>
   if( loading) return <h1><Loading styleName={}></Loading></h1>
  return (
    <div className='flex  justify-center  w-full flex-wrap gap-5 overflow-auto px-10'>
        {result.map((item,idx)=>{
          return  <div key={idx}>
          <ResultCard item={item}/>
          </div>
        })}
    </div>
  )
}
