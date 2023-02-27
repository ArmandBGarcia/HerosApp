import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { heroes } from "../data/heroes";
import { getHeroById } from "../helpers/getHeroById";

export const Hero = () => {
  const { id } = useParams();
  console.log("params", id);
  console.log(useParams());
  //useMemo va a disparar el callback cada vez que sus dependencias cambien
  const hero = useMemo(() => getHeroById(id), [id]);
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    // de esta manera regresa un paso atras navigate(-1)
    // hero.publisher === "Marvel Comics"
    //   ? navigate("/marvel", { replace: true })
    //   : navigate("/dc", {
    //       replace: true,
    //     });
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5 ">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={heroes.superheroe}
          className="img-thumbnail "
        />
      </div>

      <div className="col-8">
        <h3>{hero.superheroe}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button
          className="btn btn-outline-primary"
          onClick={handleNavigateBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};
