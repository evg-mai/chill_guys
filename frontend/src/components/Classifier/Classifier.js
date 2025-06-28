import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './Classifier.css'
import {Spinner, Button, Alert, Image} from 'react-bootstrap'
import axios from 'axios'

class Classifier extends Component {
    state = { 
        files: [],
        isLoading: false,
        recentImage: null,
     }

     onDrop =(files) => {
        this.setState({
            files: [],
            isLoading: true,
            recentImage: null,
            })
        this.loadImage(files)
     }

     loadImage=(files)=>{
        setTimeout(() => {
            this.setState({
                files,
                isLoading: false,
            }, () => {
                console.log(this.state.files)
            })
        }, 1000)
     }

     activateSpinner = () => {
        this.setState({
            files:[],
            isLoading: true,
        })
     }

     deactivateSpinner = () => {
        this.setState({isLoading: false})
     }

    sendImage =()=> {
        this.activateSpinner()
        let formData = new FormData()
        formData.append('picture', this.state.files[0], this.state.files[0].name)

        axios.post('http://127.0.0.1:8000/api/image/create/', formData, {
            headers: {
                'accept': 'application/json',
                'content-type': 'multipart/form-data'

            }
        }).then(resp=>{
            setTimeout(()=>{this.getImageClass(resp)}, 500);
            console.log(resp)
        }).catch(err=>{
            console.log(err)
        })
    }

    getImageClass =(obj)=> {
        axios.get(`http://127.0.0.1:8000/api/image/${obj.data.id}`, {
            headers: {
                'accept': 'application/json',
            }
        }).then(resp=>{
            this.setState({recentImage: resp})
            console.log(resp)
        }).catch(err=>{
            console.log(err)
        })
        this.deactivateSpinner()
    }


    render() { 

        const files = this.state.files.map(file => (
            <li key={file.name}>
              {file.name} - {file.size} bytes
            </li>
        ));


        return ( 
            <Dropzone onDrop={this.onDrop} accept='image/png, image/jpeg'>
                {({ isDragActive, getRootProps, getInputProps }) => (
                    <section className="container">
                        <div {...getRootProps({ className: 'dropzone back' })}>
                            <input {...getInputProps()} capture="enviroment"/>
                            <i className="far fa-image mb-2 text-muted" style={{fontSize:100}}></i>
                            <p className='text-muted' >{isDragActive ? 'Drop an image' : 'Перетащите сюда или сделайте фотографию сварного шва'}</p>
                        </div>
                        <aside>
                           {files}
                        </aside>

                        {this.state.files.length > 0 &&
                            <Button variant='info' size='lg' className='mt-3' onClick = {this.sendImage}>Подтвердить</Button>
                        }

                        {this.state.isLoading &&
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Загрузка...</span>
                            </Spinner>
                        }
                        {this.state.recentImage &&
                            <React.Fragment>
                                <Image className='justify-content-center mb-2' src={"http://127.0.0.1:8000"+this.state.recentImage.data.picture} 
                                height='200' rounded/>
                                <Alert variant='success'>
                                    {this.state.recentImage.data.classified}
                                </Alert>
                            </React.Fragment>
                        }

                        
                    </section>
                )}
            </Dropzone>
            
         );
    }
}
 
export default Classifier;

