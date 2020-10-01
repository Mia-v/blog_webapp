import { createStore } from 'redux';

import amsterdamImg from './amsterdam.jpg';
import barcelonaImg from './barcelona.jpg';


const initialState = {
    posts:[
      { postId: 1, title: "Amsterdam", img: amsterdamImg, textContent: "Amsterdam, capital of the Netherlands! These days the city has a population of just over 790.000 inhabitants and is the largest city in the country. Amsterdam is located in the province ‘Noord-Holland’, situated in the west. It is one of the most popular destinations in Europe, receiving more than 4.5 million tourists annually.Amsterdam has a great history. It is very unique for its large and untouched historic center. It has a rich architectural history, dominated by water. It is a meeting point for all different cultures around the world and has a welcoming attitude towards visitors. Well known for its museums, red light district, coffee shops but also the great variety of eating & drinking places and night life. Therefore a lot of hotels and hostels can be found on different locations, value for money and ambience.It is a beautiful and romantic city with its antique houses, lovely bridges, famous canals and of course the list of world class attractions!" },
      { postId: 2, title: "Barcelona", img: barcelonaImg,  textContent: "Barcelona is a city on the coast of northeastern Spain. It is the capital and largest city of the autonomous community of Catalonia, as well as the second most populous municipality of Spain. With a population of 1.6 million within city limits, its urban area extends to numerous neighbouring municipalities within the Province of Barcelona and is home to around 4.8 million people, making it the fifth most populous urban area in the European Union after Paris, the Ruhr area, Madrid, and Milan. It is one of the largest metropolises on the Mediterranean Sea, located on the coast between the mouths of the rivers Llobregat and Besòs, and bounded to the west by the Serra de Collserola mountain range, the tallest peak of which is 512 metres (1,680 feet) high.Founded as a Roman city, in the Middle Ages Barcelona became the capital of the County of Barcelona. After merging with the Kingdom of Aragon, Barcelona continued to be an important city in the Crown of Aragon as an economic and administrative centre of this Crown and the capital of the Principality of Catalonia. Barcelona has a rich cultural heritage and is today an important cultural centre and a major tourist destination. Particularly renowned are the architectural works of Antoni Gaudí and Lluís Domènech i Montaner, which have been designated UNESCO World Heritage Sites. Since 1450, it is home to the University of Barcelona, widely considered the most prestigious university in Spain. The headquarters of the Union for the Mediterranean are located in Barcelona. The city is known for hosting the 1992 Summer Olympics as well as world-class conferences and expositions and also many international sport tournaments.Barcelona is a major cultural, economic, and financial centre in southwestern Europe, as well as the main biotech hub in Spain. As a leading world city, Barcelona's influence in global socio-economic affairs qualifies it for global city status. Barcelona is a transport hub, with the Port of Barcelona being one of Europe's principal seaports and busiest European passenger port, an international airport, Barcelona–El Prat Airport, which handles over 50 million passengers per year, an extensive motorway network, and a high-speed rail line with a link to France and the rest of Europe." }
    ]
};


// Actions

const LIST = 'LIST';
const NEW_POST = 'NEW_POST';

const showList = () => {
  return{
    type: LIST,
    payload: {
      state: initialState
    }
  }
}

export const addNewPost = newPost => {
  return{
    type: NEW_POST,
    payload: {
      postId: newPost.postId,
      title: newPost.title,
      img: newPost.img,
      textContent: newPost.textContent
    }
  }
}


// Reducers


const postsReducer = (state=initialState, action) => {
  switch (action.type) {
    case LIST: {
      return action.showList;
    };

    case NEW_POST: {
      state.posts.push({
        postId: action.payload.postId,
        title: action.payload.title,
        textContent: action.payload.textContent
      });
      return state;
    }
    
    default: {
      return state;
    }
  };
};

// Store

const store = createStore(postsReducer, initialState);


export default store;