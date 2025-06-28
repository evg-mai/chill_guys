import React, { Component } from 'react';
import axios from 'axios';
import { Button, Spinner } from 'react-bootstrap';
import Image from './Image';

class ImageList extends Component {


    state = {
        images: [],
        visible: 2,
        isLoading: true
    }

    componentDidMount() {
        this.getImages()
    }

    getImages = () => {
        axios.get('http://127.0.0.1:8000/api/images/', {
            headers: {
                accept: 'application/json'
            }
        }).then(resp => {
            this.setState({
                images: resp.data,
                isLoading: false,
            })
            console.log(resp)
        })
    }

    handleVisible = () => {
        const visible = this.state.visible
        const new_visible = visible + 2
        this.setState({ visible: new_visible })
    }

    render() {
        const images = this.state.images.slice(0, this.state.visible).map(img => {
            return <Image key={img.id} pic={img.picture} name={img.classified} />
        })
        return (
            <div>
                <h1>Список запросов</h1>
                {this.state.isLoading ?
                    <Spinner animation="border" role="status"></Spinner>
                    :
                    <React.Fragment>
                        {this.state.images.length === 0 &&
                            <h3>Нет распознанных изображений</h3>
                        }
                        {images}
                        {(this.state.images.length > this.state.visible) ?
                            <Button variant='primary' size='lg' onClick={this.handleVisible}>Load more</Button>
                        :
                        
                            <h3>Нет больше изображений</h3>
                        }
                            
                        
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default ImageList;