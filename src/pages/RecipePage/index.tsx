import { useEffect, useState } from "react"

import axios from 'axios';

import Recipe from "../../components/Recipe";

export interface beerType {
        id: number;
        name: string;
        tagline: string;
        first_brewed: string;
        description: string;
        image_url: null;
        abv: number;
        ibu: number;
        target_fg: number;
        target_og: number;
        ebc: number;
        srm: number;
        ph: number;
        attenuation_level: number;
        volume: {
        value: number,
        unit: string
        },
        boil_volume: {
        value: number,
        unit: string
        },
        method: {
        mash_temp: [
        {
        temp: {
        value: number,
        unit: string
        },
        duration: number;
        }
        ],
        fermentation: {
        temp: {
        value: number;
        unit: string
        }
        },
        twist: string | null;
        },
        ingredients: {
        malt: 
        {
        name: string,
        amount: {
        value: number,
        unit: string
        }
        }[],
        hops: 
        {
        name: string,
        amount: {
        value: number,
        unit: string
        },
        add: string,
        attribute: string
        }[],
        yeast: string
        },
        food_pairing: string [];
        brewers_tips: string | null,
        contributed_by: string,
    };

    const defaultbeer: beerType[]= [];

const RecipePage = () => {

    const [activeTub, setActiveTub] = useState<string>('malt');
    // to fix the type here
    const [beer, setBeer] : [ beerType[], (beer: beerType[]) => void]= useState(defaultbeer);
    const [loading, setLoading]: [boolean, (loading: boolean) => void] =  useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = useState("");

    useEffect(() => {
        axios
            .get<beerType[]>("https://api.punkapi.com/v2/beers/random")
            .then(response => {
                setBeer(response.data);
                setLoading(false);
            })
            .catch(ex => {
                const error =
                ex.response.status === 404
                  ? "Resource Not found"
                  : "An unexpected error has occurred";
                setError(error);
                setLoading(false);
              });
        }, []);

console.log(beer[0]);
    return(
        loading ? <h1>loding</h1> :
    <div>
        <Recipe beer={beer[0]} />
    </div>
    )
} 

export default RecipePage