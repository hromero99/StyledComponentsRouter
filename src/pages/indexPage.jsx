import { useEffect, useState } from "react"
import { ButtonStyled } from "../components/ButtonStyled"
import { NameRoomTableComponent } from "../components/nameRoomTableComponent"
import { TableStyled, TrTitleStyled, TdStyled, ImgHabitacionStyled } from "../components/tabla"
import { useDispatch, useSelector } from "react-redux"
import { getRoomListFromAPIThunk } from "../features/rooms/roomThunk"
import { getRoomData, getRoomError, getRoomStatus } from "../features/rooms/roomSlice"
import { RoomCardStyled } from "../components/roomCardStyled"


export const IndexPage = () => {
    
    const dispatch = useDispatch()
    const roomListData = useSelector(getRoomData)
    const roomListError = useSelector(getRoomError)
    const roomListStatus = useSelector(getRoomStatus)
    const [spinner,setSpinner] = useState(true)
    const [roomList,setRoomList] = useState([])

    useEffect(() => {
        if (roomListStatus === "idle"){
            dispatch(getRoomListFromAPIThunk()) 
        }
        else if (roomListStatus === "pending"){
            setSpinner(true)
        }
        else if (roomListStatus === "fulfilled"){
            let components = []
            roomListData.forEach(room => {
                components.push(
                    <RoomCardStyled>
                        <p>{room.room}</p>
                        <p>{room.price}</p>
                    </RoomCardStyled>
                )
            });
            setSpinner(false)
            setRoomList(components)
        }
        
    },[dispatch,roomListData,roomListStatus])
    return(
        <>
            {spinner ? <p>Loading</p>: <div>
                    {roomList}
                </div>
            }
        </>
    )
}