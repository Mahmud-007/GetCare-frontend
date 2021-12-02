import Link from 'next/link'

export default function Navbar() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b>GetCare</b></a>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page">Home</a>
              <Link href='/doctor'>
                <a className="nav-link active" aria-current="page">Doctors</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
