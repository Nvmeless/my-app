import React from "react";
import axios from "axios";
import styled from 'styled-components'

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

class GetterAxios extends React.Component {
   
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
        this.getPlateformContext = this.getPlateformContext.bind(this);
    }
    adaptor(data){
    }

    getPlateformContext(){
        const spotify = () => {
            const config = {
                baseUrl:"https://api.spotify.com/",
                path:"v1/me/playlists",
                token:"BQC8Rw5l7nHi5HJs-f9OQG_IMAHFTqTUl4NIja7EMDOsV0F6hSvB_CuNRwBBn4TdMa9NhFSuTxUoAXu9kxACWzQJOjH5FACSlRELGucOgRAJRGpTOP648TGmmgGq-ugw264EFld3p_v7khYjOKunrD3caIk8oqyfWTITKW1R32XxPkBICiDAJr63IIC8V0g6JqelPa8C5cTmlfM-"
            }

            let url = () => {
                return config.baseUrl + config.path
            }
            
            let headers = () => {
                
                return {
                    'Authorization': `Bearer ${config.token}`
                }
            }
            return {
                method: 'get',
                url: url(),
                headers: headers()
              };
        }

        return spotify()

    }

    getPlateformAdaptor(response) {
        if( 200 === response?.status ){
        
            const spotify = (response) => {



                const row = (item) => {
                    console.log(item)
                    if(item) {
                        return{
                            id:item.id,
                            picture:{
                                custom: item.images[0],
                                generated: item.images[1],
                            },
                            name:item?.name,
                            owner:{
                                picture:{

                                }
                            }
                        }
                    } 
                    else {
                        return 
                    }
                }



                return {
                    data:{
                        rows:response.data.items.map((item) => {
                            return row(item)})
                    }
                }
            }

            let datas = spotify(response);
            console.log(datas)
            this.setState({items:datas.data.rows })
            this.setState({DataisLoaded: true})
       }
    }

    
  


    get(){

        let config = this.getPlateformContext();
          axios(config)
          .then((response) => {
            this.getPlateformAdaptor(response)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        this.get();
    }
    /*
    useEffect(() => {
        get();
    },[]);
    useEffect(() => {
        get();
        return () => { // Demonte la fonction }
    },[]);
    useEffect(() => { // S'execute si toto change }, [toto])
*/ 
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
            <div style={{
            
            }}>
            {
                items.map((item, i) => {
                    return ( 
                                    <PlayListRowStyle i={i}>
                                        <PlayListPictureContainerStyle>
                                                        <img 
                                                            style={
                                                                {
                                                                    width: "inherit",
                                                                    height:"inherit",
                                                                    borderRadius:"10px"
                                                                    }} 
                                                            src={item?.picture?.custom?.url}/>
                                                        </PlayListPictureContainerStyle>
                                            <PlaylistTitleStyle>
                        <p>
                            {item.name.length > 28 ? item.name.slice(0,28) + '...' : item.name}
                        </p>
                    </PlaylistTitleStyle>
        </PlayListRowStyle>

                )})
            }
        </div>
    );
}
}
   
export default GetterAxios;