const React = require("react");
const Def = require("../default");



function show(data) {
  let comments =(
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place,comments.length){
comments = data.place.comments.map( c =>{
  return (
    <div className="border">
      <h2 className="rant">{c.rant ? 'Rant!': 'Rave!'} </h2>
      <h4>{c.content} </h4>
      <h3>
        <strong> - {c.author} </strong>
      </h3>
      <h4>Ranting: {c.stars} </h4>
    </div>
  )
})
  }
  return (
    <Def>
      <main>
        <br />
        <br />
        <div className="row">
          <div className="col-sm-6">
            <img id="show-image" src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <h2>Rated</h2>
            <p>Not Rated</p>
            <h2>Description</h2>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <p>
              Located {data.place.city}, {data.place.state}, and serving{" "}
              {data.place.cuisines}
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <h2>Comments</h2>
          {comments}
          <p>no comments yet!</p>
        </div>
        <br />
        <br />
        <div className="row">
          <a
            className="col-sm-1 edit-button"
            href={`/places/${data.place.id}/edit`}
          >
            Edit
          </a>
          <form
            method="POST"
            action={`/places/${data.place.id}?_method=DELETE`}
            className="col-sm-1 delete-form"
          >
            <button type="submit" className="btn btn-danger delete-button">
              Delete
            </button>
          </form>
        </div>
        <br />
      </main>
    </Def>
  );
}

module.exports = show;
