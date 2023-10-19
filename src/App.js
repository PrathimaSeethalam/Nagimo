// import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
  <div style={{marginBottom:"50px"}} class="container text-center">
  <div   style={{marginBottom:"50px"}} class="row">
    <div class="col-sm-12">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Palladium Dashboard</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Welcome Back Dan</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Period
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">All</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Wall
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit" fdprocessedid="h393si">Search</button>
        </form>
      </div>
    </div>
  </nav>
    </div>
  </div>
  <div  style={{marginBottom:"40px"}} class="row">
    <div class="col-sm-8">
    <div class="row">
    <div class="col-sm-6">
      <Card/>
    </div>
    <div  style={{marginBottom:"40px"}} class="col-sm-6"> <Card/></div>
    </div>

     <div style={{marginBottom:"40px"}} class="row">
    <div class="col-sm-6">
      <Card/>
    </div>
    <div class="col-sm-6"> <Card/></div>
    </div>
    <div class="row">
    <div class="col-sm-6">
      <Card/>
    </div>
    <div class="col-sm-6"> <Card/></div>
    </div>
    </div>
    <div class="col-sm-4">
      <img src="https://cdn1.matadornetwork.com/blogs/1/2009/06/Woman-in-a-climbing-wall-gym-1200x854.jpg" alt="" style={{height: "400px",
    width: "380px" }}/>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-4" >
      <div className="row"><strong>Week Overview</strong></div>
      <hr/>
      <div  className="row">+ new climbers</div>
      <div className="row">+ traffic</div> <div className="row">- difficult of climbs completed</div> <div className="row">+ content sharingg</div>
    </div>
    
    <div class="col-sm-4">
      <div className="row"><strong>Suggestions</strong></div>
      <hr/>
      <div className="row">set higher difficulty</div>
      <div className="row">Repost climber content (clickable)</div> 

    </div>
    <div class="col-sm-4">
      <div className="row"><strong>Month Overview</strong></div>
      <hr/>
      <div className="row">+ new climbers</div>
      <div className="row">+ traffic</div> <div className="row">- difficult of climbs completed</div> <div className="row">+ content sharingg</div>

    </div>
  </div>
</div>



  );
}

export default App;
