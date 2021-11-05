import React from "react";
import { useHistory } from "react-router-dom";
import { useCharacterStore } from "../../../../Provider/CharacterStoreProvider";
import { observer } from "mobx-react";
import ItemCard from "../ItemCard/ItemCard";
import EmptyList from "../EmptyList/EmptyList";
import ItemCardModalOuter from "../../SingleItemView/ItemCardModalOuter";
import ItemCardModalRow from "../../SingleItemView/ItemCardModalRow";
import { toJS } from 'mobx';

import "./characters.css";
import CharacterModal from "../../SingleItemView/CharacterModal";

const CharacterList = () => {

    let history = useHistory();
    const characterStore = useCharacterStore();
    const { characterList } = useCharacterStore();

    const handleDelete = (Id) => {
        characterStore.deleteCharacter(Id);
    };

    const handleEdit = (Id) => {
        history.push(`/character/edit/${Id}`);
    };

    return (
        <>
            <h3 className="CharacterList__listTitle">Characters</h3>
            <div className="CharacterList__container">
                {characterList && characterList.length > 0 ? (
                    <>
                        {characterList.map((character, index) => {
                            console.log('charac', toJS(character))
                            return (


                                <ItemCard
                                    key={index}
                                    data={character}
                                    cardType="character"
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}

                                >
                                    <CharacterModal handleDelete={handleDelete} handleEdit={handleEdit} character={character} />
                                </ItemCard>


                            );
                        })}
                    </>
                ) : (
                    <EmptyList listType="character" />
                )}
            </div>
        </>
    );
};

export default observer(CharacterList);
