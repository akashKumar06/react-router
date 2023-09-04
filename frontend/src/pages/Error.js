import {useRouteError} from 'react-router-dom';

import PageContent from "../components/PageContent";

function ErrorPage() {
    const error  = useRouteError();
    
    let title = "An error occurred";
    let message = "Someting Went Wrong!";

    if(error.status === 500){
        message = error.data.message;
    }

    if( error.status === 404){
        title = "Not Found";
        message = 'Could not find resource or page';
    }
  return (
    <h1>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </h1>
  );
}

export default ErrorPage;
