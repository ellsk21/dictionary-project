import React from "react";
import "./Dictionary.css";

export default function Photos(props) {
    if (props.photos) {
        return (
          <div>
            
            <div className="Photos">
            <h3 className="photo-h3">Photo gallery</h3>
              <div className="photo-grid">
                {props.photos.map(function (photo, index) {
                  return (
                    <a
                      key={index}
                      href={photo.src.original}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={photo.src.landscape}
                        alt={photo.alt}
                        className="img-fluid photo-single"
                      ></img>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    }