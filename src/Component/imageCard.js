import React ,{Component} from 'react';

class ImageListCard extends Component{
    constructor(props){
        super(props);
        this.state={spans:0};
        this.imageRef=React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);
    }
    setSpans = () =>{
        const height=this.imageRef.current.clientHeight;
        const span=Math.ceil(height/10+1);
        this.setState({spans:span});
    };
    render(){
      return(
        <div style={{gridRowEnd:`span ${this.state.spans}`}}>
        <img 
        ref={this.imageRef}
        alt={this.props.image.description}
        src={this.props.image.urls.regular}
        ></img>
    </div>
      );
    }
}
export default ImageListCard;