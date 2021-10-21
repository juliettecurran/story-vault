import React from "react";
import { useHistory } from "react-router-dom";
import { useCharacterStore } from "../../../../Provider/CharacterStoreProvider";
import { observer } from "mobx-react";
import ItemCard from "../ItemCard/ItemCard";
import EmptyList from "../EmptyList/EmptyList";
import Modal from "../../SingleItemView/Modal";
import { useState } from "react";
import "./characters.css";

const CharacterList = () => {
  let history = useHistory();
  const characterStore = useCharacterStore();
  const { characterList } = useCharacterStore();
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = (Id) => {
    characterStore.deleteCharacter(Id);
  };

  const handleEdit = (Id) => {
    history.push(`/character/edit/${Id}`);
  };

  /* const handleView = (Id) => {
   
  }; */

  return (
    <>
      <h3 className="CharacterList__listTitle">Characters</h3>

      <div className="CharacterList__container">
        {characterList && characterList.length > 0 ? (
          <>
            {characterList.map((character, index) => {
              console.log("characterlist", character);
              return (
                <ItemCard
                  key={index}
                  character={character}
                  cardType="character"
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              );
            })}
          </>
        ) : (
          <EmptyList listType="character" />
        )}
        {openModal && <Modal closeModal={setOpenModal} />}
      </div>
    </>
  );
};

export default observer(CharacterList);
