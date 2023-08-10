/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogById } from "../../redux/actions";


const DeatilDogs = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const characterDog = useSelector((state) => state.characterDog)

    useEffect(() => {
        dispatch(getDogById(id));
    }, []);

    return(
        <div>
            {characterDog[0] ? <h1>{characterDog[0].name}</h1> : null}
            {characterDog[0] ? <img src={characterDog[0]?.image.url} alt="Not image" /> : null}
            {characterDog[0] ? <h2>{characterDog[0].bread_for}</h2> : null}
            {characterDog[0] ? <h2>{characterDog[0].breed_group}</h2> : null}
            {characterDog[0] ? <h2>{characterDog[0].life_span}</h2> : null}
            {characterDog[0] ? <h2>{characterDog[0].temperament}</h2> : null}
            {characterDog[0] ? <h2>{characterDog[0].origin}</h2> : null}
            {characterDog[0] ? <h2>{characterDog[0]?.weight.imperial}/{characterDog[0]?.weight.metric}</h2> : null}
            {characterDog[0] ? <h2>{characterDog[0]?.height.imperial}/{characterDog[0]?.height.metric}</h2> : null}
        </div>
    )
}

export default DeatilDogs;