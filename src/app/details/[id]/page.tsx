
const SingleDetail = ({params} : {params: {id: string}}) => {

  return (
    <div className="container">
      <p>Feedback {params.id}</p>
    </div>
  );
};

export default SingleDetail;