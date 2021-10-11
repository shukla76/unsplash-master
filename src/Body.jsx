import React, { Fragment, useEffect, useState } from "react";
import "./bodystyle.css";
import { createApi } from "unsplash-js";
import { useSelector } from "react-redux"

const api = createApi({
  accessKey: "nilYDDih-3h-1woEPPe0xBlthBYQ1KUeq7uJ670PZMI"
});

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <Fragment>
      <img className="img" src={urls.regular} />
      <div>
      <a
        className="credit"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
      </div>
    </Fragment>
  );
};

const Body = () => {
  const inputData = useSelector((state) => state.inputData)
  const [data, setPhotosResponse] = useState(null);
  console.log(inputData);

  useEffect(() => {
    api.search
      .getPhotos({ query: `${inputData}`, orientation: "portrait" })
      .then(result => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, [inputData]);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
      </div>
    );
  } else {
    return (
      <div className="feed">
        <ul className="columnUl">
          {data.response.results.map(photo => (
            <li key={photo.id} className="li">
              <PhotoComp photo={photo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Body;