import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Image } from "../Img";

class All extends Component {
  state = {
    items: []
  };
  componentDidMount() {
    this.loadItems();
    
  }
  loadItems = () => {
    API.getItems()
      .then(res => {
        this.setState({ items: res.data })
        console.log(this.state.items)
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.items.length ? (
            this.state.items.map(item => {
              return (
                <div className="col s3">
                  <Link to={"/shop/" + item._id}>  
                    <Image key={item._id}
                      src={item.src}
                    />
                     </Link>
                     <div> {item.name}</div>
                     <div >
                    {Object.keys(item.size).map((size, i) => {
                      if (i !== 0 && i !== 5) return
                      const price = item.size[size]
                      return <span>${price}{(i === 0)?'/':''}</span>
                    })}
                    </div>
                </div>
              )
            })
          ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
      </div>
    )
  }
}
export default All;