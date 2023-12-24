import React, { useEffect, useState } from 'react';
import { Image } from 'antd';
import CardContainer from '../CardContainer';
import { useDispatch, useSelector } from 'react-redux';
import { GetSessions } from '../features/session/sessionSlice';
import Loading from './Loading';
import Meta from '../Meta';

const OngoingSessions = () => {

  const dispatch = useDispatch()
  const {AllSessions} = useSelector(state=>state.admin)

  const [sessionsData,setSessionsData] = useState([])
  const [date,setDate] = useState(null)
  
  useEffect(()=>{
    dispatch(GetSessions())    
  },[])

  useEffect(()=>{
    setSessionsData(AllSessions)
  },[AllSessions])

  useEffect(()=>{
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const today = `${year}-${month+1}-${day}`
    setDate(today)
  },[])

  const compareTwoDates = (x,y)=>{
    const date1 = new Date(x)
    const date2 = new Date(y)

    if (date1.getTime() < date2.getTime()) {
        return false
      } else if (date1.getTime() >= date2.getTime()) {
        return true
      } else {
        return false
      }
  }

  const completeSessionDescription = (currentData)=>{
      return <>
      <div className="row">
        <div className="col-12">
          <div className="imgdiv">
            <Image
              width={200}
              src={currentData?.images}
              className='img-fluid'
          />
          </div>
        </div>
      </div>
      <div className='row'>
          <div className="col-12">
            <ul>
              <li>
            <label htmlFor="" className='fs-4'>Date : </label> 
            <span className='fs-6 mx-3'>{currentData?.date}</span>
              </li>
              <li>
                <label htmlFor="" className='fs-4'>Timings :</label>
                <span className='fs-6 mx-3'>{`${currentData?.startAt} - ${currentData?.ends}`}</span>
              </li>
              <li>
                <label htmlFor="" className='fs-4'>Venu :</label>
                <span className='fs-6 mx-3'>{currentData?.venue}</span>
              </li>
            </ul>
          </div>
      </div>
    </>
  }

  const completeOutComeDescription = (currentData)=>{
    return  <>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis doloribus corporis tempora possimus, non voluptates quibusdam dolore eaque, similique obcaecati inventore, laborum corrupti odit labore. Porro suscipit doloremque laborum quod odio vitae sint consequatur?
  </>
  }



  return (
    <div className='container-xxl'>
      <Meta title={'Sessions'}/>
      <div className="row">
        <div className="col-12">
          <h4 className='fs-2 fw-bold my-4'>Upcoming Sessions</h4>
        </div>
      </div>
      {
        <div className="container">
        <div className="row">
          {Array.isArray(sessionsData) ? (
            sessionsData.map(element => {
              const sessionDescription = completeSessionDescription(element);
              const outcomeDescription = completeOutComeDescription(element);
              // const historyDescription = completeHistoryDescription(element);
  
              return compareTwoDates(element?.date, date) ? (
                <div key={element?._id} className="col-md-4 mb-4">
                  <CardContainer
                    sessionDescription={sessionDescription}
                    outcomeDescription={outcomeDescription}
                    sessionId={element?._id}
                    sessiontitle={element?.sessiontitle}
                    today={true}
                    // history={historyDescription}
                  />
                </div>
              ) : null;
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    } 
    </div>
  );
}

export default OngoingSessions;

