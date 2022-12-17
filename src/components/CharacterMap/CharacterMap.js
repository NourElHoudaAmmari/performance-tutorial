import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';


function itemize(text, transformer){
    const letters = text.split('')
      .filter(l => l !== ' ')
      .reduce((collection, item) => {
        const letter = transformer ? transformer(item) : item;
        return {
          ...collection,
          [letter]: (collection[letter] || 0) + 1
        }
      }, {})
      return Object.entries(letters)
    .sort((a, b) => b[1] - a[1]);
  }

  function CharacterMap({ showExplanation, text, transformer }) {
    const characters = useMemo(() => itemize(text, transformer), [text, transformer]);
  return(
    <div>
         {showExplanation &&
        <p>
          
        </p>
      }
      Character Map:
      {characters.map(character => (
        <div key={character[0]}>
          {character[0]}: {character[1]}
        </div>
      ))}
    </div>
  )
}

CharacterMap.propTypes = {
    showExplanation: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    transformer: PropTypes.func
  }
  
  CharacterMap.defaultProps = {
    transformer: null
  }
export default memo(CharacterMap);