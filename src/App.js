import "./scss/styles.scss";
import rightImage from "./images/image-header-desktop.jpg";

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card__left">
          <div className="card__left-content">
            <h1>
              Get <span>insights</span> that help your business grow.
            </h1>
            <p>
              {" "}
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>

          <div className="card__left-info">
            <div className="data">
              <h1>10K+</h1>
              <p>companies</p>
            </div>
            <div className="data">
              <h1>10K+</h1>
              <p>companies</p>
            </div>
            <div className="data">
              <h1>10K+</h1>
              <p>companies</p>
            </div>
          </div>
        </div>
        <div className="card__right">
          <img src={rightImage} alt="right side" />
        </div>
      </div>
    </div>
  );
};

export default App;
