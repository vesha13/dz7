import { render } from '@testing-library/react';
import React, {useState} from 'react';

function DateTime(props) {
  const now = new Date()
  const post = Date.parse(props.date)
  const postDate = new Date(post)
  console.log(now)
  //console.log(post)
  console.log(postDate)   
  console.log((now-postDate)/(1000 * 60 * 60 * 24*365))
    return (
         <p className="date">{props.date}</p>
    )
}


function DatePrettyTime(Component) {
  // ...and returns another component...
  return class extends React.Component {
    state ={}

    componentDidMount(){
    fetch(Component)
    .then(result =>result.json())
    .then(date => this.setState({date: date}));
  }
   
    now = new Date()
    post = Date.parse(this.state.date)
    postDate = new Date(this.post)
    diff =(this.now-this.postDate)/(1000 * 60 * 60 * 24*365) 

  
    render() {
      console.log(this.state)
      this.setState({date: this.diff + 'лет(года) назад'})
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <Component {...this.props}  date={this.state.diff}/>;
    }
  };
}

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DatePrettyTime Component={DateTime}/>
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}