import { useEffect, useState } from "react";

import {
    getAbilityInfo,
    getAllPocketmon,
    getPokemonSprites,
} from "../libs/axios/pokeAPI";
import { PokeRoot } from "../type/abilityType";
import { SpritesRoot } from "../type/spritesType";

interface pokemon {
    name: string;
    url: string;
}

const Main = () => {
    const [data, setData] = useState<pokemon[]>([]);
    const [ability, setAbility] = useState<PokeRoot[]>([]);
    const [sprites, setSprites] = useState<SpritesRoot[]>([]);

    const fetchData = async () => {
        try {
            const response = await getAllPocketmon();
            setData(response.results);
            response.results.forEach((poke) => {
                const match = poke.url.match(/\/pokemon\/(\d+)\//);
                if (match) {
                    const pokemonId = parseInt(match[1], 10);
                    fetchInfo(pokemonId);
                    fetchPoketSprites(pokemonId);
                }
            });
        } catch (err) {
            console.error(err);
        }
    };

    const fetchInfo = async (poketId: number) => {
        try {
            const response = await getAbilityInfo(poketId);
            setAbility((poke) => [...poke, response]);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchPoketSprites = async (poketId: number) => {
        try {
            const response = await getPokemonSprites(poketId);
            setSprites((prev) => [...prev, response]);
            console.log("sprites", response.sprites.front_default);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <div>item:{item.name}</div>
                </div>
            ))}

            {/* {ability.map((data, idx) => (
                <div key={idx}>
                    <div>
                        data:
                        {data.flavor_text_entries.map((el, i) => (
                            <div key={i}>{el.flavor_text}</div>
                        ))}
                    </div>
                </div>
            ))} */}

            {sprites.map((el, i) => (
                <div key={i}>
                    <img src={el.sprites.front_default} />
                </div>
            ))}
        </div>
    );
};
export default Main;
