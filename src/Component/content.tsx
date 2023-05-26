import Img1 from "../assets/react.png"
const ExampleCard = () => {
    return (
      <div className="card" style={{ width: 500 }}>
        <img
          className="card-img-top"
          src={Img1}
          alt="Card image cap"
          style={{ display: 'block', margin: '0 auto' }}
        />
        <div className="card-body">
          <p className="card-text">
            React is a JavaScript library created by Facebook
            React is a User Interface (UI) library
            React is a tool for building UI components
          </p>
        </div>
      </div>
    );
  };
  
  export default ExampleCard;