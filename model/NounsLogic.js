// NounsLogic.js
const NounsLogic = (nounsState) => {
  const createNoun = (name, bornAt, photo) => {
    const newItem = {
      id: nounsState.nouns.length + 1,
      name,
      bornAt,
      photo,
    };

    return newItem;
  };

  const readNoun = (data, id) => {
    const foundNoun = data.find(noun => noun.id === id);

    return foundNoun;
  };

  const updateNoun = (state, data) => {
    const updatedNouns = state.nouns.map(noun => {
      if (noun.id === data.id) {
        return { ...noun, ...data };
      }
      return noun;
    });

    return updatedNouns;
  };

  const deleteNoun = (data, id) => {
    const updatedNouns = data.filter((obj) => obj.id !== id);

    return updatedNouns;
  };

  const listNouns = (data) => {

    return data;
  };

  return {
    createNoun,
    readNoun,
    updateNoun,
    deleteNoun,
    listNouns,
  };
};

export default NounsLogic;