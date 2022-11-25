import React, {useEffect} from "react";
import axios from "axios";
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlaylists } from "../../store";

const PlayListPictureContainerStyle = styled.div`
    width:20vw;
    maxWidth:20vw;
    
` 
const PlayListRowStyle = styled.div`
    display:flex;
    color:black;
    background: ${ props => props?.i % 2 ?  'rgba(0,0,0, .05)' :'transparent'};
    align-items:center;
    gap: 5%;

` 
const PlaylistTitleStyle = styled.p`
font-size: 1.1em;
`

const GetterRedux = () =>  {
   
    const playlists = useSelector((state) => {
        console.log(state.playlists)
        return state.playlists.playlists}) 
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPlaylists())

    }, []);

    useEffect(() => {
        console.log("UPDATE playlists", playlists)
    }, [playlists])

    
    const returnPlaylists = ( ) => {
        return playlists.map((playlist) => {
            return <PlayListRowStyle>{playlist.name}</PlayListRowStyle>
        })
    }
 

    return (
        <div>
            {
            returnPlaylists()
            }

        </div>
    )
}
   
export default GetterRedux;