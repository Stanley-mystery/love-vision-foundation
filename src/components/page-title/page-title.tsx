interface PageTitleProps {
  title: string;
  description: string;
  currentPage: string;
}

const PageTitle = ({ title, description, currentPage }: PageTitleProps) => {
  return (
    <div className="page-title">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="heading-title">{title}</h1>
              <p className="mb-0">{description}</p>
            </div>
          </div>
        </div>
      </div>

      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li className="current">{currentPage}</li>
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default PageTitle;
